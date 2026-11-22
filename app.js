/* Nurse Aide Skills Practice — question engine + UI. No dependencies. */
(function (root) {
  'use strict';

  /* ---------- Core (pure logic, also loadable in Node for tests) ---------- */
  function createCore(SKILLS, rng, SAY) {
    rng = rng || Math.random; SAY = SAY || {};
    var rand = function (n) { return Math.floor(rng() * n); };
    var pick = function (a) { return a[rand(a.length)]; };
    var shuffle = function (a) {
      a = a.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = rand(i + 1); var t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    };
    var sample = function (a, k) { return shuffle(a).slice(0, k); };
    var weighted = function (a, wf) {
      var ws = a.map(wf), tot = ws.reduce(function (x, y) { return x + y; }, 0), r = rng() * tot;
      for (var i = 0; i < a.length; i++) { r -= ws[i]; if (r <= 0) return a[i]; }
      return a[a.length - 1];
    };

    var seq = function (sk) { return sk.steps.filter(function (s) { return s.kind === 'seq'; }); };
    var groups = function (sk) {
      var g = {}; seq(sk).forEach(function (s) { g[s.g] = 1; });
      return Object.keys(g).map(Number).sort(function (a, b) { return a - b; });
    };
    var inGroup = function (sk, g) { return seq(sk).filter(function (s) { return s.g === g; }); };
    /* Some skills repeat a step word for word (e.g. "removes gloves... washes hands" twice in bedpan).
       Steps like that cannot anchor a question, because she could not tell which occurrence is meant. */
    var isDup = function (sk, s) { return sk.steps.some(function (t) { return t !== s && t.text === s.text; }); };
    var uniq = function (sk, a) { return a.filter(function (s) { return !isDup(sk, s); }); };
    var onePer = function (sk, gs) {
      var out = [];
      gs.forEach(function (g) { var c = uniq(sk, inGroup(sk, g)); if (c.length) out.push(pick(c)); });
      return out;
    };
    function finalize(q) {
      if (!q) return null;
      if (q.ui === 'order') return q.items.length >= 3 ? q : null;
      if (q.ui !== 'choice' || !q.options.some(function (o) { return o.step; })) return q;
      var seen = {}; if (q.context) seen[q.context] = 1;
      (q.list || []).forEach(function (t) { if (t) seen[t] = 1; });
      var c = q.options.filter(function (o) { return o.correct; })[0];
      if (!c || seen[c.step.text]) return null;
      seen[c.step.text] = 1;
      var before = q.options.length;
      q.options = q.options.filter(function (o) { if (o.correct) return true; if (seen[o.step.text]) return false; seen[o.step.text] = 1; return true; });
      if (q.numbered && q.options.length !== before) return null;
      return q.options.length >= 3 ? q : null;
    }
    var key = function (sk, st) { return sk.num + '-' + st.n; };

    var TYPES = {
      order: 'Put in order', next: 'What comes next?', before: 'What comes first?',
      spot: 'Spot the mistake', missing: 'Missing step', critical: 'Critical element',
      fact: 'Know the number', tf: 'True or false', mcq: 'Best answer', correction: 'Correction drill'
    };

    var gens = {
      order: function (sk) {
        var gs = groups(sk); if (gs.length < 3) return null;
        var k = Math.min(gs.length, 4 + rand(2));
        var chosen = sample(gs, k).sort(function (a, b) { return a - b; });
        var items = onePer(sk, chosen), shown = shuffle(items), tries = 0;
        while (tries++ < 10 && shown.every(function (s, i) { return s === items[i]; })) shown = shuffle(items);
        return { ui: 'order', prompt: 'Tap these steps in the order you would do them.', items: shown, correct: items, steps: items };
      },
      next: function (sk) {
        var gs = groups(sk), cands = uniq(sk, seq(sk)).filter(function (s) { return gs.indexOf(s.g) < gs.length - 1; });
        if (!cands.length) return null;
        var A = pick(cands), ng = gs[gs.indexOf(A.g) + 1], C = pick(inGroup(sk, ng));
        var pool = seq(sk).filter(function (s) { return s !== A && s.g !== ng && s.g !== A.g; });
        if (pool.length < 2) return null;
        var opts = sample(pool, 3).map(function (s) { return { step: s, correct: false }; });
        opts.push({ step: C, correct: true });
        return { ui: 'choice', prompt: 'You have just done the step below. What comes next?', context: A.text, options: shuffle(opts), answer: C, steps: [C],
          note: 'In this skill, that step is followed by the one above. The other choices happen earlier or later.' };
      },
      before: function (sk) {
        var gs = groups(sk);
        var cands = uniq(sk, seq(sk)).filter(function (s) {
          var i = gs.indexOf(s.g);
          return i >= 1 && seq(sk).filter(function (t) { return t.g > s.g; }).length >= 2;
        });
        if (!cands.length) return null;
        var X = pick(cands), pg = gs[gs.indexOf(X.g) - 1], C = pick(inGroup(sk, pg));
        var later = seq(sk).filter(function (t) { return t.g > X.g; });
        var opts = sample(later, 3).map(function (s) { return { step: s, correct: false }; });
        opts.push({ step: C, correct: true });
        return { ui: 'choice', prompt: 'Which of these must already be done BEFORE the step below?', context: X.text, options: shuffle(opts), answer: C, steps: [C, X],
          note: 'The other choices all come after that step.' };
      },
      spot: function (sk) {
        var gs = groups(sk); if (gs.length < 3) return null;
        var k = Math.min(gs.length, 4 + rand(2)), start = rand(gs.length - k + 1);
        var items = onePer(sk, gs.slice(start, start + k)); k = items.length; if (k < 3) return null;
        var i = 1 + rand(k - 1), early = items[i], shouldPrecede = items[i - 1];
        var done = items.slice(); done[i - 1] = early; done[i] = shouldPrecede;
        return { ui: 'choice', numbered: true, prompt: 'Someone did these steps in the order shown. One step was done too EARLY. Tap it.',
          options: done.map(function (s) { return { step: s, correct: s === early }; }), answer: early, steps: [early, shouldPrecede],
          note: 'It should come after: "' + shouldPrecede.text + '"', noteStep: shouldPrecede };
      },
      missing: function (sk) {
        var ss = seq(sk); if (ss.length < 4) return null;
        var len = Math.min(5, ss.length), start = rand(ss.length - len + 1), win = ss.slice(start, start + len);
        var ri = 1 + rand(len - 2), R = win[ri]; if (isDup(sk, R)) return null;
        var pool = ss.filter(function (s) { return win.indexOf(s) < 0 && s.g !== R.g; });
        var d = sample(pool, 3).map(function (s) { return { step: s, correct: false }; });
        if (d.length < 3) {
          var others = [];
          SKILLS.forEach(function (o) { if (o !== sk) seq(o).forEach(function (s) { if (!sk.steps.some(function (t) { return t.text === s.text; })) others.push(s); }); });
          sample(others, 3 - d.length).forEach(function (s) { d.push({ step: s, correct: false }); });
        }
        d.push({ step: R, correct: true });
        return { ui: 'choice', prompt: 'One step is missing from this part of the skill. Which step belongs in the gap?',
          list: win.map(function (s, i) { return i === ri ? null : s.text; }), options: shuffle(d), answer: R, steps: [R] };
      },
      critical: function (sk) {
        var crit = sk.steps.filter(function (s) { return s.critical; }), non = sk.steps.filter(function (s) { return !s.critical; });
        if (!crit.length || non.length < 3) return null;
        var C = pick(crit), opts = sample(non, 3).map(function (s) { return { step: s, correct: false }; });
        opts.push({ step: C, correct: true });
        return { ui: 'choice', prompt: 'Which of these is a Critical Element Step? Miss it or do it wrong and you fail the whole skill.', options: shuffle(opts), answer: C, steps: [C],
          allCritical: crit };
      },
      fact: function (sk) {
        if (!sk.facts || !sk.facts.length) return null;
        var f = pick(sk.facts);
        if (rng() < 0.5) return { ui: 'number', prompt: f.q, answerNum: f.answer, unit: f.unit, explain: f.explain, steps: [] };
        var nums = [f.answer].concat(f.wrong).sort(function (a, b) { return a - b; });
        return { ui: 'choice', prompt: f.q, options: nums.map(function (n) { return { text: n + ' ' + f.unit, correct: n === f.answer }; }), explain: f.explain, steps: [] };
      },
      tf: function (sk) {
        if (!sk.tf || !sk.tf.length) return null;
        var t = pick(sk.tf);
        return { ui: 'choice', prompt: 'True or false?', context: t.s, options: [{ text: 'True', correct: t.a === true }, { text: 'False', correct: t.a === false }], explain: t.explain, steps: [] };
      },
      mcq: function (sk) {
        if (!sk.mcq || !sk.mcq.length) return null;
        var m = pick(sk.mcq);
        return { ui: 'choice', prompt: m.q, options: shuffle(m.choices.map(function (c, i) { return { text: c, correct: i === m.a }; })), explain: m.explain, steps: [] };
      },
      correction: function (sk) {
        var gs = groups(sk);
        var cands = uniq(sk, seq(sk)).filter(function (s) { var i = gs.indexOf(s.g); return i >= 1 && i < gs.length - 1; });
        if (!cands.length) return null;
        var X = pick(cands), gi = gs.indexOf(X.g), pg = gs[gi - 1];
        var zs = uniq(sk, seq(sk)).filter(function (s) { return s.g > X.g && s.g <= gs[Math.min(gs.length - 1, gi + 2)]; }); if (!zs.length) return null; var Z = pick(zs);
        var C = pick(inGroup(sk, pg));
        var pool = seq(sk).filter(function (s) { return s !== X && s.g !== X.g && s.g !== pg; });
        if (pool.length < 2) return null;
        var opts = sample(pool, 3).map(function (s) { return { step: s, correct: false }; });
        opts.push({ step: C, correct: true });
        return { ui: 'choice', prompt: 'You just finished "' + Z.text + '" and realize you skipped the step below. On test day you may correct it, but you must say where it belongs. It belongs right after…',
          context: X.text, options: shuffle(opts), answer: C, steps: [X],
          note: 'The skipped step comes right after that one. Saying the correct place in the sequence is part of getting credit for a correction.', noteStep: X };
      }
    };

    Object.keys(gens).forEach(function (t) { var f = gens[t]; gens[t] = function (sk) { return finalize(f(sk)); }; });

    function skillWeight(P, sk) {
      var st = P.skills[sk.num];
      if (!st || !st.seen) return 2;
      return 1 + Math.min(8, 2 * (st.miss || 0));
    }

    function makeQuestion(P, lastType, forceType, forceSkill) {
      for (var attempt = 0; attempt < 40; attempt++) {
        var sk = forceSkill || weighted(SKILLS, function (s) { return skillWeight(P, s); });
        var types = forceType ? [forceType] : shuffle(Object.keys(gens).filter(function (t) { return t !== lastType; }));
        for (var i = 0; i < types.length; i++) {
          var q = gens[types[i]](sk);
          if (q) { q.type = types[i]; q.label = TYPES[types[i]]; q.skill = sk; return q; }
        }
      }
      return null;
    }

    function record(P, q, ok) {
      var st = P.skills[q.skill.num] || (P.skills[q.skill.num] = { seen: 0, right: 0, miss: 0 });
      st.seen++; P.total++;
      if (ok) { st.right++; st.miss = Math.max(0, (st.miss || 0) - 0.5); P.correct++; }
      else { st.miss = (st.miss || 0) + 1; }
      (q.steps || []).forEach(function (s) {
        var k = key(q.skill, s);
        if (ok) { if (P.steps[k]) { P.steps[k]--; if (!P.steps[k]) delete P.steps[k]; } }
        else P.steps[k] = (P.steps[k] || 0) + 1;
      });
    }

    /* Mock exam: hand hygiene + 4 random skills, exactly one of them a measurement skill. */
    function dealMock() {
      var hand = SKILLS.filter(function (s) { return s.num === 1; })[0];
      var meas = pick(SKILLS.filter(function (s) { return s.measurement; }));
      var rest = sample(SKILLS.filter(function (s) { return !s.measurement && s.num !== 1; }), 3);
      return [hand].concat(shuffle(rest.concat([meas])));
    }

    /* Grade a full ordering. Steps outside the best in-order run are "out of order".
       Critical steps weigh heavily so they are only flagged when truly misplaced. */
    function gradeOrder(sk, placed) {
      /* word-for-word identical steps are interchangeable: put each set in sheet order first */
      placed = placed.slice();
      var byText = {};
      placed.forEach(function (s, i) { (byText[s.text] = byText[s.text] || []).push(i); });
      Object.keys(byText).forEach(function (t) {
        var idx = byText[t]; if (idx.length < 2) return;
        var ss = idx.map(function (i) { return placed[i]; }).sort(function (a, b) { return a.g - b.g; });
        idx.forEach(function (i, k) { placed[i] = ss[k]; });
      });
      var n = placed.length, best = [], prev = [], i, j;
      for (i = 0; i < n; i++) {
        var w = placed[i].critical ? 1000 : 1; best[i] = w; prev[i] = -1;
        for (j = 0; j < i; j++) if (placed[j].g <= placed[i].g && best[j] + w > best[i]) { best[i] = best[j] + w; prev[i] = j; }
      }
      var end = -1, mx = -1; for (i = 0; i < n; i++) if (best[i] > mx) { mx = best[i]; end = i; }
      var keep = {}; for (i = end; i >= 0; i = prev[i]) keep[i] = 1;
      var out = placed.filter(function (s, idx) { return !keep[idx]; });
      var all = seq(sk), missed = all.filter(function (s) { return placed.indexOf(s) < 0; });
      var wrong = out.concat(missed), allowed = Math.floor(all.length * 0.2);
      var critFail = wrong.some(function (s) { return s.critical; });
      return { out: out, missed: missed, wrong: wrong, allowed: allowed, critFail: critFail, pass: !critFail && wrong.length <= allowed };
    }

    /* ---- Spoken exam: find which steps were said, and where, in a speech-to-text transcript ---- */
    var WINDOW = 14;
    /* "washcloth" would look like the verb "wash", and "clean washcloth / clean gloves" like the verb "clean": normalise both away. */
    var ADJ_CLEAN = /^(washcloth|cloth|area|spot|part|glov|technique|towel|dry|gown|linen|side|section|one$|hands?$)/;
    function tokenize(t) {
      var raw = String(t || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean), out = [];
      for (var i = 0; i < raw.length; i++) {
        if (raw[i] === 'clean' && raw[i + 1] && ADJ_CLEAN.test(raw[i + 1])) continue;
        /* "before washing", "after removing": a reference to another step, not doing it */
        if (i && /^(before|after|while|until)$/.test(raw[i - 1]) && /ing$/.test(raw[i])) continue;
        out.push(raw[i].replace(/^washcloths?$/, 'cloth'));
      }
      return out;
    }
    /* a term is alternatives split by "|"; each is a prefix match, or an exact match when it ends with "$" */
    function termHit(term, tok) {
      return term.split('|').some(function (a) { return a && (a.charAt(a.length - 1) === '$' ? tok === a.slice(0, -1) : tok.indexOf(a) === 0); });
    }
    function positions(tokens, patterns) {
      var out = {};
      (patterns || []).forEach(function (pat) {
        for (var i = 0; i < tokens.length; i++) {
          if (!pat.some(function (t) { return termHit(t, tokens[i]); })) continue;
          var win = tokens.slice(i, i + WINDOW);
          if (pat.every(function (t) { return win.some(function (w) { return termHit(t, w); }); })) out[i] = 1;
        }
      });
      return Object.keys(out).map(Number).sort(function (a, b) { return a - b; });
    }
    /* said: {stepN: true} = she says the phone misheard and she did say it in the right place */
    function gradeSpoken(sk, transcript, said) {
      said = said || {};
      var toks = tokenize(transcript), ss = seq(sk), prev = -1, pos = {}, heard = {};
      sk.steps.forEach(function (s) { var p = positions(toks, SAY[key(sk, s)]); if (p.length) heard[s.n] = p; });
      ss.forEach(function (s) {
        var p = heard[s.n]; if (!p) return;
        var ok = p.filter(function (x) { return x >= prev; });
        if (ok.length) { pos[s.n] = ok[0]; prev = ok[0]; } else pos[s.n] = p[0];
      });
      var placed = ss.filter(function (s) { return pos[s.n] != null; }).sort(function (a, b) { return (pos[a.n] - pos[b.n]) || (a.n - b.n); });
      var g = gradeOrder(sk, placed);
      var out = g.out.filter(function (s) { return !said[s.n]; }), missed = g.missed.filter(function (s) { return !said[s.n]; });
      var wrong = out.concat(missed).sort(function (a, b) { return a.n - b.n; });
      var critFail = wrong.some(function (s) { return s.critical; });
      return { out: out, missed: missed, wrong: wrong, allowed: g.allowed, critFail: critFail, pass: !critFail && wrong.length <= g.allowed,
        heard: heard, words: toks.length, autoWrong: g.wrong };
    }

    function pickSkill(P) { return weighted(SKILLS, function (s) { return skillWeight(P, s); }); }

    return { pickSkill: pickSkill, tokenize: tokenize, positions: positions, gradeSpoken: gradeSpoken, gens: gens, TYPES: TYPES, makeQuestion: makeQuestion, record: record, dealMock: dealMock, gradeOrder: gradeOrder, seq: seq, groups: groups, shuffle: shuffle, key: key };
  }

  if (typeof module !== 'undefined' && module.exports) { module.exports = { createCore: createCore }; }
  if (typeof document === 'undefined') return;

  /* ------------------------------- UI ------------------------------- */
  var SKILLS = root.NNAAP_SKILLS || [];
  var core = createCore(SKILLS, null, root.NNAAP_SAY);
  var SR = root.SpeechRecognition || root.webkitSpeechRecognition;
  var canSpeak = !!SR && !!root.NNAAP_SAY;
  var KEY = 'nnaap-progress-v1';
  var app = document.getElementById('app');
  var P = loadP();
  var session = { n: 0, right: 0 }, lastType = null, mock = null, view = 'quiz';

  function blank() { return { skills: {}, steps: {}, total: 0, correct: 0 }; }
  function loadP() { try { return Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return blank(); } }
  function saveP() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { /* private mode: progress lasts for this visit only */ } }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function h(html) { var d = document.createElement('div'); d.innerHTML = html; return d; }
  function critTag(s) { return s && s.critical ? ' <span class="crit">Critical element</span>' : ''; }
  function stepHtml(s) { return esc(s.text) + critTag(s); }
  function whyHtml(s) { return s && s.why ? '<div class="why"><b>Why:</b> ' + esc(s.why) + '</div>' : ''; }
  function skillTag(sk) { return '<span class="tag plain">Skill ' + sk.num + ' · ' + esc(sk.name) + '</span>'; }

  if (!SKILLS.length) { app.innerHTML = '<div class="card"><h1>Skills data did not load.</h1><p>Check that data/skills.js is next to this page.</p></div>'; return; }

  document.querySelectorAll('nav button').forEach(function (b) {
    b.addEventListener('click', function () {
      if (mock && mock.running && b.dataset.view !== 'mock' && !b.dataset.armed) {
        b.dataset.armed = '1'; b.textContent = 'Leave exam?'; setTimeout(function () { delete b.dataset.armed; b.textContent = b.dataset.view === 'quiz' ? 'Quiz' : 'Weak spots'; }, 3000); return;
      }
      if (mock && mock.running && b.dataset.view !== 'mock') stopMock();
      go(b.dataset.view);
    });
  });

  function go(v) {
    view = v;
    document.querySelectorAll('nav button').forEach(function (b) { b.classList.toggle('on', b.dataset.view === v); });
    window.scrollTo(0, 0);
    if (v === 'quiz') showQuestion(); else if (v === 'mock') showMockIntro(); else showProgress();
  }

  /* ---------- Tap-to-order widget (used by quiz and mock exam) ---------- */
  function orderWidget(items, onChange, useShort) {
    var placed = [], el = document.createElement('div'), locked = false;
    function label(s, i) {
      var main = useShort && s.short ? esc(s.short) : esc(s.text);
      var sub = useShort && s.short ? '<span class="sub">' + esc(s.text) + '</span>' : '';
      return (i != null ? '<span class="num">' + (i + 1) + '.</span> ' : '') + main + sub;
    }
    function draw() {
      var rest = items.filter(function (s) { return placed.indexOf(s) < 0; });
      el.innerHTML = '<div class="slotlabel">Your order</div>';
      var a = document.createElement('div'); a.className = 'opts';
      if (!placed.length) a.innerHTML = '<div class="empty">Tap the step you would do first.</div>';
      placed.forEach(function (s, i) {
        var b = document.createElement('button'); b.className = 'opt'; b.innerHTML = label(s, i); b.disabled = locked;
        b.setAttribute('aria-label', 'Remove step ' + (i + 1));
        b.onclick = function () { placed.splice(i, 1); draw(); };
        a.appendChild(b);
      });
      el.appendChild(a);
      if (rest.length) {
        el.appendChild(h('<div class="slotlabel">Steps left (' + rest.length + ')</div>').firstChild);
        var r = document.createElement('div'); r.className = 'opts';
        rest.forEach(function (s) {
          var b = document.createElement('button'); b.className = 'opt'; b.innerHTML = label(s, null); b.disabled = locked;
          b.onclick = function () { placed.push(s); draw(); };
          r.appendChild(b);
        });
        el.appendChild(r);
      }
      if (!locked && placed.length) el.appendChild(h('<p class="muted small" style="margin-top:8px">Tap a step in your order to take it back out.</p>').firstChild);
      onChange(placed.slice(), rest.length === 0);
    }
    draw();
    return { el: el, get: function () { return placed.slice(); }, lock: function () { locked = true; draw(); } };
  }

  /* ------------------------------ Quiz ------------------------------ */
  function showQuestion() {
    var q = core.makeQuestion(P, lastType);
    lastType = q.type;
    app.innerHTML = '';
    var card = h('<div class="card"><div class="meta"><span class="tag">' + esc(q.label) + '</span>' + skillTag(q.skill) + '</div><h1>' + esc(q.prompt) + '</h1></div>').firstChild;
    if (q.context) card.appendChild(h('<div class="context">' + esc(q.context) + '</div>').firstChild);
    if (q.list) card.appendChild(h('<ol class="ctx">' + q.list.map(function (t) { return t === null ? '<li class="gap">Which step goes here?</li>' : '<li>' + esc(t) + '</li>'; }).join('') + '</ol>').firstChild);
    var fb = document.createElement('div');
    app.appendChild(card);

    function finish(ok, answerHtml) {
      core.record(P, q, ok); saveP(); session.n++; if (ok) session.right++;
      var html = '<div class="fb ' + (ok ? 'good' : 'bad') + '"><h2>' + (ok ? 'Correct.' : 'Not quite.') + '</h2>' + answerHtml + '</div>' +
        '<div class="row"><button class="btn" id="again">' + (ok ? 'Yes, another question' : 'Try another question') + '</button><button class="btn ghost" id="done">Done for now</button></div>';
      if (ok) html = html.replace('<div class="row">', '<p style="margin-top:14px"><b>Want another one?</b></p><div class="row" style="margin-top:0">');
      fb.innerHTML = html; card.appendChild(fb);
      fb.querySelector('#again').onclick = showQuestion;
      fb.querySelector('#done').onclick = showDone;
      fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function explainChoice(ok) {
      var out = '';
      if (q.answer) {
        out += '<p>' + (ok ? '' : '<b>Correct answer:</b> ') + stepHtml(q.answer) + '</p>';
        if (q.note) out += '<p>' + esc(q.note) + '</p>';
        out += whyHtml(q.noteStep || q.answer);
        if (q.noteStep && q.noteStep !== q.answer) out += whyHtml(q.answer);
        if (q.allCritical && q.allCritical.length > 1) out += '<p class="small">Every critical element in this skill:</p><ul class="small">' + q.allCritical.map(function (s) { return '<li>' + esc(s.text) + '</li>'; }).join('') + '</ul>';
      } else {
        var c = q.options.filter(function (o) { return o.correct; })[0];
        out += '<p>' + (ok ? '' : '<b>Correct answer:</b> ' + esc(c.text) + '. ') + esc(q.explain || '') + '</p>';
      }
      return out;
    }

    if (q.ui === 'choice') {
      var box = document.createElement('div'); box.className = 'opts';
      q.options.forEach(function (o, i) {
        var b = document.createElement('button'); b.className = 'opt';
        b.innerHTML = (q.numbered ? '<span class="num">' + (i + 1) + '.</span> ' : '') + esc(o.step ? o.step.text : o.text);
        b.onclick = function () {
          box.querySelectorAll('button').forEach(function (x, j) { x.disabled = true; if (q.options[j].correct) x.classList.add('right'); });
          if (!o.correct) b.classList.add('wrong');
          var pre = '';
          if (!o.correct && o.step && q.type !== 'spot') pre = '<p><b>Why your answer is wrong:</b> "' + esc(o.step.text) + '" ' + wrongReason(q, o.step) + '</p>';
          if (!o.correct && q.type === 'spot') pre = '<p><b>Why your answer is wrong:</b> that step was in a fine place. The problem is the step done before it should have been.</p>';
          finish(o.correct, pre + explainChoice(o.correct));
        };
        box.appendChild(b);
      });
      card.appendChild(box);
    } else if (q.ui === 'number') {
      var row = h('<div class="numrow"><input type="number" inputmode="decimal" aria-label="Your answer"><span>' + esc(q.unit) + '</span><button class="btn">Check</button></div>').firstChild;
      var inp = row.querySelector('input'), btn = row.querySelector('button');
      var submit = function () {
        if (inp.value === '') { inp.focus(); return; }
        inp.disabled = true; btn.disabled = true;
        var ok = Number(inp.value) === q.answerNum;
        finish(ok, '<p>' + (ok ? '' : '<b>Correct answer:</b> ' + q.answerNum + ' ' + esc(q.unit) + '. You entered ' + esc(inp.value) + '. ') + esc(q.explain || '') + '</p>');
      };
      btn.onclick = submit; inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
      card.appendChild(row);
    } else if (q.ui === 'order') {
      var check = h('<div class="row"><button class="btn" disabled>Check my order</button></div>').firstChild, cb = check.querySelector('button');
      var w = orderWidget(q.items, function (placed, full) { cb.disabled = !full; });
      card.appendChild(w.el); card.appendChild(check);
      cb.onclick = function () {
        var placed = w.get(), ok = placed.every(function (s, i) { return s === q.correct[i]; });
        w.lock(); check.remove();
        var html = '';
        if (!ok) {
          html += '<p><b>Correct order:</b></p><ol>' + q.correct.map(function (s) { return '<li>' + stepHtml(s) + '</li>'; }).join('') + '</ol>';
          var bad = q.correct.filter(function (s, i) { return placed[i] !== s; }).slice(0, 3);
          html += '<p><b>Why the order matters:</b></p>' + bad.map(function (s) { return '<p class="small"><b>' + esc(s.short || s.text) + '</b></p>' + whyHtml(s); }).join('');
        } else {
          html += '<p>That is the order on the skills sheet.</p>';
        }
        finish(ok, html);
      };
    }
  }

  function wrongReason(q, s) {
    var a = q.answer;
    if (q.type === 'critical') return 'is a real step in this skill, but it is not one of the bolded Critical Element Steps.';
    if (q.type === 'missing' || q.type === 'next' || q.type === 'before' || q.type === 'correction') {
      if (s.g == null || !a || a.g == null || q.skill.steps.indexOf(s) < 0) return 'does not belong at this point.';
      return s.g < a.g ? 'happens earlier in the skill than this point.' : 'happens later in the skill than this point.';
    }
    return 'is not the right choice here.';
  }

  function showDone() {
    app.innerHTML = '<div class="card"><h1>Good work today.</h1><p>This visit: <b>' + session.right + ' of ' + session.n + '</b> correct.</p>' +
      '<p class="muted">The quiz remembers what you miss and asks those skills more often. Reading is only half of it: say the steps out loud and practice them on a real person too.</p>' +
      '<div class="row"><button class="btn" id="more">One more question</button><button class="btn ghost" id="weak">See my weak spots</button></div></div>';
    document.getElementById('more').onclick = showQuestion;
    document.getElementById('weak').onclick = function () { go('progress'); };
  }

  /* ---------------------------- Weak spots ---------------------------- */
  function showProgress() {
    var rows = SKILLS.map(function (sk) {
      var st = P.skills[sk.num] || { seen: 0, right: 0, miss: 0 };
      return { sk: sk, st: st, pct: st.seen ? Math.round(100 * st.right / st.seen) : null };
    }).sort(function (a, b) {
      if ((a.pct === null) !== (b.pct === null)) return a.pct === null ? 1 : -1;
      return (a.pct - b.pct) || (b.st.miss - a.st.miss) || (a.sk.num - b.sk.num);
    });
    var pctAll = P.total ? Math.round(100 * P.correct / P.total) : 0;
    var seen = rows.filter(function (r) { return r.st.seen; }).length;
    var html = '<div class="stats"><div class="stat"><b>' + P.total + '</b><span>answered</span></div><div class="stat"><b>' + (P.total ? pctAll + '%' : '–') + '</b><span>correct</span></div><div class="stat"><b>' + seen + '/' + SKILLS.length + '</b><span>skills seen</span></div></div>';
    html += '<div class="card"><h1>Weakest skills first</h1><p class="muted small">Skills you miss come up more often in the quiz. Skills you have not seen yet are at the bottom.</p>';
    rows.forEach(function (r) {
      var missed = r.sk.steps.filter(function (s) { return P.steps[core.key(r.sk, s)]; });
      var cls = r.pct === null ? '' : r.pct < 60 ? 'lowp' : r.pct < 85 ? 'midp' : '';
      html += '<div class="skillrow"><div class="hd"><span><b>' + r.sk.num + '.</b> ' + esc(r.sk.name) + '</span><span class="muted">' + (r.pct === null ? 'not yet' : r.st.right + '/' + r.st.seen) + '</span></div>' +
        '<div class="bar"><i class="' + cls + '" style="width:' + (r.pct === null ? 0 : r.pct) + '%"></i></div>' +
        (missed.length ? '<p class="small muted" style="margin:8px 0 0">Steps to review: ' + missed.map(function (s) { return esc(s.short || s.text) + critTag(s); }).join('; ') + '</p>' : '') + '</div>';
    });
    html += '</div><div class="row"><button class="btn ghost" id="reset">Reset my progress</button></div>';
    app.innerHTML = html;
    var rb = document.getElementById('reset');
    rb.onclick = function () {
      if (!rb.dataset.armed) { rb.dataset.armed = '1'; rb.textContent = 'Tap again to erase everything'; return; }
      P = blank(); saveP(); showProgress();
    };
  }

  /* ----------------------------- Mock exam ----------------------------- */
  function showMockIntro() {
    if (mock && mock.running) { if (mock.spoken) showSpokenSkill(); else showMockSkill(); return; }
    app.innerHTML = '<div class="card"><h1>Mock exam</h1>' +
      '<p>Five skills, 30 minutes, just like test day: Hand Hygiene plus four random skills, one of them a measurement skill.</p>' +
      '<p>For each skill, tap <b>every</b> step in the order you would do it. You get no feedback until the end, and you cannot go back to a skill once you move on.</p>' +
      '<p class="muted small">Scoring here is a practice rule, not Credentia\'s exact formula: a skill is Unsatisfactory if a Critical Element Step is out of order, or if more than about 20% of its steps are out of order. On the real test you must pass all five.</p>' +
      '<div class="row"><button class="btn" id="start">Start the 30 minutes</button></div></div>' +
      '<div class="card"><h1>Say it out loud</h1>' +
      (canSpeak ? '<p>One skill at a time, no timer. You say every step in order and the phone listens, then shows what it heard and what you missed.</p>' +
        '<p class="muted small">Find a quiet spot and say every step, including the ones you would only do with your hands. The phone can mishear, so you can correct it before the score counts.</p>' +
        '<label class="small muted" for="pick">Skill</label><select id="pick"><option value="">Random (favors your weak spots)</option>' +
        SKILLS.map(function (sk) { return '<option value="' + sk.num + '">' + sk.num + '. ' + esc(sk.name) + '</option>'; }).join('') + '</select>' +
        '<div class="row"><button class="btn" id="speak">Start a spoken skill</button></div>'
        : '<p class="muted small">This needs speech recognition, which this browser does not offer.</p>') + '</div>';
    document.getElementById('start').onclick = function () { startMock(false); };
    if (canSpeak) document.getElementById('speak').onclick = function () { startSpoken(document.getElementById('pick').value); };
  }

  function startMock(spoken) {
    mock = { skills: core.dealMock(), i: 0, answers: [], end: Date.now() + 30 * 60 * 1000, running: true, warned: false, spoken: !!spoken, said: [{}, {}, {}, {}, {}] };
    mock.tick = setInterval(tickMock, 1000);
    showMockSkill();
  }
  function startSpoken(num) {
    var sk = num ? SKILLS.filter(function (s) { return String(s.num) === String(num); })[0] : core.pickSkill(P);
    if (!num && mock && mock.spoken && mock.skills[0] === sk) sk = core.pickSkill(P);
    stopMock();
    mock = { skills: [sk], i: 0, answers: [], running: true, spoken: true, said: [{}], picked: num || '' };
    keepAwake(); window.scrollTo(0, 0); showSpokenSkill();
  }
  function stopMock() { if (mock) { clearInterval(mock.tick); mock.running = false; stopListening(); if (mock.wake) { try { mock.wake.release(); } catch (e) {} mock.wake = null; } } }
  function keepAwake() { try { if (navigator.wakeLock) navigator.wakeLock.request('screen').then(function (w) { if (mock) mock.wake = w; }, function () {}); } catch (e) {} }
  function fmt(ms) { var s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
  function tickMock() {
    if (!mock || !mock.running || mock.spoken) return;
    var left = mock.end - Date.now(), t = document.getElementById('timer');
    if (t) { t.textContent = fmt(left); t.classList.toggle('low', left <= 5 * 60 * 1000); }
    if (left <= 5 * 60 * 1000 && !mock.warned) { mock.warned = true; var n = document.getElementById('fivemin'); if (n) n.hidden = false; }
    if (left <= 0) { if (mock.widget) mock.answers[mock.i] = mock.widget.get(); finishMock(true); }
  }

  function showMockSkill() {
    var sk = mock.skills[mock.i];
    app.innerHTML = '';
    var card = h('<div class="card"><div class="meta"><span class="tag">Skill ' + (mock.i + 1) + ' of 5</span><span class="tag plain">Time left <span class="timer" id="timer">' + fmt(mock.end - Date.now()) + '</span></span></div>' +
      '<p id="fivemin" class="crit" ' + (mock.warned ? '' : 'hidden') + '>Five minutes or less remaining.</p>' +
      '<h1>' + esc(sk.name) + '</h1><p class="muted small">Tap all ' + core.seq(sk).length + ' steps in order.</p></div>').firstChild;
    var row = h('<div class="row"><button class="btn" disabled>' + (mock.i < 4 ? 'Finish this skill, go to next' : 'Finish exam') + '</button></div>').firstChild, nb = row.querySelector('button');
    mock.widget = orderWidget(core.shuffle(core.seq(sk)), function (placed, full) { nb.disabled = !full; }, true);
    card.appendChild(mock.widget.el); card.appendChild(row); app.appendChild(card);
    nb.onclick = function () {
      mock.answers[mock.i] = mock.widget.get(); mock.widget = null;
      if (mock.i < 4) { mock.i++; window.scrollTo(0, 0); showMockSkill(); } else finishMock(false);
    };
  }

  function finishMock(timedOut) {
    stopMock();
    var results = mock.skills.map(function (sk, i) { return { sk: sk, g: core.gradeOrder(sk, mock.answers[i] || []) }; });
    results.forEach(function (r) {
      core.record(P, { skill: r.sk, steps: r.g.wrong }, r.g.pass);
    });
    saveP();
    var passed = results.filter(function (r) { return r.g.pass; }).length;
    var html = '<div class="card"><h1>' + (passed === 5 ? 'All five Satisfactory. That is a pass.' : passed + ' of 5 Satisfactory. The real test needs all five.') + '</h1>' +
      (timedOut ? '<p class="crit">Time ran out. Steps you had not placed count as missed.</p>' : '');
    results.forEach(function (r) {
      html += '<div class="result"><span><b>' + esc(r.sk.name) + '</b></span><span class="pill ' + (r.g.pass ? 's' : 'u') + '">' + (r.g.pass ? 'Satisfactory' : 'Unsatisfactory') + '</span></div>';
    });
    html += '</div>';
    results.forEach(function (r) {
      var seqs = core.seq(r.sk), thr = r.sk.steps.filter(function (s) { return s.kind !== 'seq'; });
      html += '<div class="card"><div class="meta">' + skillTag(r.sk) + '</div>';
      if (!r.g.wrong.length) html += '<p><b>Every step in order.</b></p>';
      else {
        html += '<p><b>' + (r.g.critFail ? 'A Critical Element Step was out of place, which fails the skill.' : r.g.wrong.length + ' step' + (r.g.wrong.length > 1 ? 's' : '') + ' out of place (this practice rule allows ' + r.g.allowed + ').') + '</b></p>';
        r.g.wrong.forEach(function (s, wi) {
          var idx = seqs.indexOf(s), prev = idx > 0 ? seqs[idx - 1] : null;
          if (wi === 4 && r.g.wrong.length > 5) html += '<details><summary class="small">Show ' + (r.g.wrong.length - 4) + ' more</summary>';
          html += '<p class="small"><b>' + (r.g.missed.indexOf(s) >= 0 ? 'Not placed: ' : 'Out of order: ') + '</b>' + stepHtml(s) + '<br><span class="muted">' + (prev ? 'On the sheet it follows: "' + esc(prev.text) + '"' : 'On the sheet it is the first step.') + '</span></p>' + whyHtml(s);
        });
        if (r.g.wrong.length > 5) html += '</details>';
      }
      html += '<details><summary class="small">Full sheet order</summary><ol class="small">' + seqs.map(function (s) { return '<li>' + stepHtml(s) + '</li>'; }).join('') + '</ol>' +
        (thr.length ? '<p class="small"><b>The whole time:</b></p><ul class="small">' + thr.map(function (s) { return '<li>' + stepHtml(s) + '</li>'; }).join('') + '</ul>' : '') + '</details></div>';
    });
    html += '<div class="row"><button class="btn" id="again">New mock exam</button><button class="btn ghost" id="quiz">Back to quiz</button></div>';
    app.innerHTML = html; window.scrollTo(0, 0);
    document.getElementById('again').onclick = showMockIntro;
    document.getElementById('quiz').onclick = function () { go('quiz'); };
  }

  /* --------------------------- Spoken exam --------------------------- */
  var ear = null; /* { rec, on, done:[finished session texts], cur:'', onText, onState } */
  function currentTranscript() { return ear ? ear.done.concat([ear.cur]).join(' ').replace(/\s+/g, ' ').trim() : (mock && mock.answers[mock.i]) || ''; }
  function stopListening() { if (ear) { ear.on = false; try { ear.rec.stop(); } catch (e) {} } }
  function listen(onText, onState) {
    var me = ear = { on: true, done: [], cur: '', started: false };
    function open() {
      var r = new SR(); me.rec = r; r.lang = 'en-US'; r.continuous = true; r.interimResults = true;
      r.onstart = function () { me.started = true; onState('listening'); };
      r.onresult = function (e) {
        var t = ''; for (var i = 0; i < e.results.length; i++) t += e.results[i][0].transcript + ' ';
        me.cur = t; if (ear === me) onText(currentTranscript());
      };
      r.onerror = function (e) {
        if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { me.on = false; onState(me.started ? 'paused' : 'blocked'); }
      };
      r.onend = function () {
        me.done.push(me.cur); me.cur = '';
        if (!me.on) return;
        try { open(); } catch (err) { me.on = false; onState('paused'); }
      };
      r.start();
    }
    open();
  }

  function showSpokenSkill() {
    var sk = mock.skills[mock.i];
    app.innerHTML = '';
    var card = h('<div class="card"><div class="meta"><span class="tag">Spoken skill</span><span class="tag plain">Skill ' + sk.num + '</span></div>' +
      '<h1>' + esc(sk.name) + '</h1>' +
      '<p class="muted small">Say every step out loud, in the order you would do it. Pauses are fine.</p>' +
      '<div class="row" style="margin-top:0"><button class="btn" id="talk">Start talking</button><button class="btn ghost" id="next" hidden>Done, check my steps</button></div>' +
      '<p id="state" class="small muted" style="margin-top:12px"></p><div class="context small" id="live" hidden></div></div>').firstChild;
    app.appendChild(card);
    var talk = card.querySelector('#talk'), next = card.querySelector('#next'), state = card.querySelector('#state'), live = card.querySelector('#live');
    var kept = '';
    function setState(st) {
      if (st === 'listening') { state.innerHTML = '<b>Listening…</b>'; talk.hidden = true; next.hidden = false; }
      else if (st === 'paused') { state.textContent = 'The phone stopped listening. Tap to keep going; what you already said is saved.'; talk.textContent = 'Keep talking'; talk.hidden = false; }
      else if (st === 'blocked') { state.textContent = 'The microphone or speech recognition is blocked for this site. On iPhone, check Settings > Apps > Safari > Microphone, and that Siri & Dictation is turned on, then reload.'; talk.hidden = false; }
    }
    talk.onclick = function () {
      if (ear) kept = (kept + ' ' + currentTranscript()).trim();
      try { listen(function (t) { live.hidden = false; live.textContent = (kept + ' ' + t).trim(); }, setState); }
      catch (e) { setState('blocked'); }
    };
    next.onclick = function () {
      var t = (kept + ' ' + currentTranscript()).trim();
      stopListening(); ear = null; mock.answers[mock.i] = t;
      stopMock(); showSpokenResults(false);
    };
    mock.keptText = function () { return (kept + ' ' + currentTranscript()).trim(); };
  }

  function showSpokenResults(timedOut) {
    ear = null;
    var results = mock.skills.map(function (sk, i) { return { sk: sk, g: core.gradeSpoken(sk, mock.answers[i] || '', mock.said[i]) }; });
    var passed = results.filter(function (r) { return r.g.pass; }).length;
    var html = '<div class="card"><h1>' + (passed ? 'Satisfactory.' : 'Unsatisfactory, for now.') + '</h1>' +
      '<p class="muted small">The phone matches what it heard against each step, so it can miss things. If you did say a step in the right place, tap <b>I said this</b> and the score updates. Be honest with yourself: the evaluator will not give you the benefit of the doubt.</p>';
    results.forEach(function (r) { html += '<div class="result"><span><b>' + esc(r.sk.name) + '</b></span><span class="pill ' + (r.g.pass ? 's' : 'u') + '">' + (r.g.pass ? 'Satisfactory' : 'Unsatisfactory') + '</span></div>'; });
    html += '</div>';
    results.forEach(function (r, i) {
      var seqs = core.seq(r.sk), thr = r.sk.steps.filter(function (s) { return s.kind !== 'seq'; }), said = mock.said[i];
      html += '<div class="card"><div class="meta">' + skillTag(r.sk) + '</div>';
      if (!r.g.words) html += '<p><b>The phone did not hear anything for this skill.</b></p>';
      else if (!r.g.wrong.length) html += '<p><b>Every step heard, in order.</b></p>';
      else html += '<p><b>' + (r.g.critFail ? 'A Critical Element Step was missed or out of place, which fails the skill.' : r.g.wrong.length + ' step' + (r.g.wrong.length > 1 ? 's' : '') + ' missed or out of place (this practice rule allows ' + r.g.allowed + ').') + '</b></p>';
      r.g.autoWrong.slice().sort(function (a, b) { return a.n - b.n; }).forEach(function (s) {
        var idx = seqs.indexOf(s), prev = idx > 0 ? seqs[idx - 1] : null, fixed = !!said[s.n], missed = r.g.heard[s.n] == null;
        html += '<p class="small"' + (fixed ? ' style="opacity:.6"' : '') + '><b>' + (fixed ? 'Counted as said: ' : missed ? 'Not heard: ' : 'Heard out of order: ') + '</b>' + stepHtml(s) +
          '<br><span class="muted">' + (prev ? 'It follows: "' + esc(prev.text) + '"' : 'It is the first step.') + '</span></p>' + (fixed ? '' : whyHtml(s)) +
          '<p><button class="btn ghost said" data-i="' + i + '" data-n="' + s.n + '" style="min-height:40px;padding:8px 14px;font-size:14px">' + (fixed ? 'Undo' : 'I said this') + '</button></p>';
      });
      var missedThr = thr.filter(function (s) { return r.g.heard[s.n] == null; });
      if (missedThr.length && r.g.words) html += '<p class="small muted"><b>Not scored, but worth saying or showing:</b> ' + missedThr.map(function (s) { return esc(s.short || s.text); }).join('; ') + '</p>';
      html += '<details><summary class="small">What the phone heard</summary><p class="small">' + (esc(mock.answers[i] || '') || '<i>Nothing.</i>') + '</p></details>' +
        '<details><summary class="small">Full sheet order</summary><ol class="small">' + seqs.map(function (s) { return '<li>' + stepHtml(s) + '</li>'; }).join('') + '</ol></details></div>';
    });
    html += '<div class="row"><button class="btn" id="save">Save to my weak spots</button><button class="btn ghost" id="again">Another skill</button><button class="btn ghost" id="retry">Try this one again</button></div>';
    var y = window.scrollY;
    app.innerHTML = html;
    if (mock.reviewed) window.scrollTo(0, y); else { window.scrollTo(0, 0); mock.reviewed = true; }
    app.querySelectorAll('.said').forEach(function (b) {
      b.onclick = function () { var m = mock.said[+b.dataset.i], n = +b.dataset.n; if (m[n]) delete m[n]; else m[n] = true; showSpokenResults(timedOut); };
    });
    var sv = document.getElementById('save');
    if (mock.saved) { sv.disabled = true; sv.textContent = 'Saved'; }
    sv.onclick = function () {
      if (mock.saved) return; mock.saved = true;
      results.forEach(function (r) { core.record(P, { skill: r.sk, steps: r.g.wrong }, r.g.pass); });
      saveP(); sv.disabled = true; sv.textContent = 'Saved';
    };
    document.getElementById('again').onclick = function () { startSpoken(''); };
    document.getElementById('retry').onclick = function () { startSpoken(mock.skills[0].num); };
  }

  showQuestion();
})(typeof window !== 'undefined' ? window : globalThis);
