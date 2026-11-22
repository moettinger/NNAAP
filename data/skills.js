(function(root){
  root.NNAAP_SKILLS = [
  {
    "num": 1,
    "name": "Hand hygiene (hand washing)",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Address client by name and introduces self to client by name",
        "short": "Address client, introduce self",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Using the client's name and introducing yourself builds trust and makes sure you are about to care for the right person."
      },
      {
        "n": 2,
        "text": "Turns on water at sink",
        "short": "Turn on water",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Water has to be running before you can wet and rinse, so this is the first thing you physically do at the sink."
      },
      {
        "n": 3,
        "text": "Wets hands and wrists thoroughly",
        "short": "Wet hands and wrists",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Wet skin lets soap spread and lather. Soap put on dry hands will not cover everything."
      },
      {
        "n": 4,
        "text": "Applies soap to hands",
        "short": "Apply soap",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Soap loosens the oils and germs on your skin so water and rubbing can carry them away."
      },
      {
        "n": 5,
        "text": "Lathers all surfaces of wrists, hands, and fingers producing friction, for at least 20 (twenty) seconds, keeping hands lower than the elbows and the fingertips down",
        "short": "Lather 20 seconds, fingertips down",
        "critical": true,
        "kind": "seq",
        "g": 5,
        "why": "Soap only works with enough rubbing time, and 20 seconds is the minimum. Keeping hands below the elbows and fingertips down lets dirty water run off your fingers instead of back up your arms."
      },
      {
        "n": 6,
        "text": "Cleans fingernails by rubbing fingertips against palms of the opposite hand",
        "short": "Clean fingernails against palm",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "Germs collect under nails where plain lathering misses them. Rubbing fingertips on the other palm pushes soap into that space."
      },
      {
        "n": 7,
        "text": "Rinse all surfaces of wrists, hands, and fingers, keeping hands lower than the elbows and the fingertips down",
        "short": "Rinse hands and wrists, fingertips down",
        "critical": true,
        "kind": "seq",
        "g": 7,
        "why": "Rinsing washes the loosened germs and soap away. Fingertips pointed down keeps the dirty water from running back toward your cleaner forearms."
      },
      {
        "n": 8,
        "text": "Uses clean, dry paper towel/towels to dry all surfaces of fingers, hands, and wrists starting at fingertips then disposes of paper towel/towels into waste container",
        "short": "Dry hands with paper towel",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Damp hands pick up and spread germs more easily. Throwing the towel away means nobody else uses it."
      },
      {
        "n": 9,
        "text": "Uses clean, dry paper towel/towels to turn off faucet then disposes of paper towel/towels into waste container or uses knee/foot control to turn off faucet",
        "short": "Turn off faucet with paper towel",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "The faucet handle was touched by your dirty hands. A clean towel (or a knee or foot control) keeps you from re-contaminating clean hands."
      },
      {
        "n": 10,
        "text": "Does not touch inside of sink at any time",
        "short": "Never touch inside of sink",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "The inside of the sink is dirty. Touching it at any point puts germs back on your hands."
      }
    ],
    "facts": [
      {
        "q": "For how many seconds, at minimum, must you lather with friction?",
        "answer": 20,
        "unit": "seconds",
        "wrong": [
          10,
          15,
          30
        ],
        "explain": "Step 5 says to lather 'for at least 20 (twenty) seconds'."
      }
    ],
    "tf": [
      {
        "s": "Hand Hygiene requires lathering with friction for at least 20 seconds.",
        "a": true,
        "explain": "Step 5 (a critical element) says at least 20 (twenty) seconds."
      },
      {
        "s": "The faucet is turned off before the hands are dried with a paper towel.",
        "a": false,
        "explain": "Step 8 is drying with a paper towel; step 9 is using a clean towel to turn off the faucet, so drying comes first."
      },
      {
        "s": "Cleaning fingernails (step 6) is a critical element of Hand Hygiene.",
        "a": false,
        "explain": "Only steps 5 (lathering) and 7 (rinsing) are bold/critical; step 6 is not."
      }
    ],
    "mcq": [
      {
        "q": "A candidate has finished rinsing hands and wrists with fingertips down. What does the sheet say comes next?",
        "choices": [
          "Uses clean, dry paper towel(s) to dry all surfaces of fingers, hands, and wrists",
          "Turns off the faucet with bare hands",
          "Cleans fingernails against the palm of the opposite hand",
          "Applies soap to hands"
        ],
        "a": 0,
        "explain": "Step 7 (rinse) is followed by step 8 (dry hands). Turning off the faucet comes after that in step 9, and soap and nails come before rinsing."
      },
      {
        "q": "A candidate lathers all surfaces for about 10 seconds with fingertips down, then continues correctly. What is the problem?",
        "choices": [
          "Nothing, because fingertips down is the only requirement",
          "Lathering must be 60 seconds exactly",
          "Lathering must last at least 20 seconds, and this is a critical element",
          "Soap should have been applied after rinsing"
        ],
        "a": 2,
        "explain": "Step 5 is a critical element requiring friction for at least 20 (twenty) seconds, and correct fingertips-down position does not make up for a short time."
      }
    ]
  },
  {
    "num": 2,
    "name": "Applies one knee-high elastic stocking",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Client is in supine position (lying down in bed) while stocking is applied",
        "short": "Client supine during application",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Lying flat in bed lets blood drain out of the legs so the stocking can be applied smoothly. It is a position that has to hold the whole time the stocking goes on."
      },
      {
        "n": 4,
        "text": "Turns stocking inside-out, at least to the heel",
        "short": "Turn stocking inside-out to heel",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Turning it inside-out down to the heel makes a short sleeve you can slip over the foot easily without bunching or pulling on the skin."
      },
      {
        "n": 5,
        "text": "Places foot of stocking over toes, foot, and heel",
        "short": "Seat stocking foot over toes and heel",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Getting the foot part seated correctly first means the rest of the stocking lines up with the leg."
      },
      {
        "n": 6,
        "text": "Pulls top of stocking over foot, heel, and leg",
        "short": "Pull stocking top up the leg",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Once the foot is in place you unroll the rest up the leg so the stocking covers evenly."
      },
      {
        "n": 7,
        "text": "Moves foot and leg gently and naturally, avoiding force and over-extension of limb and joints",
        "short": "Move limb gently and naturally",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Joints and limbs can be hurt by force or by pushing past their natural range, especially if the client is weak or has pain. Smooth, natural movements protect the client from injury."
      },
      {
        "n": 8,
        "text": "Finishes procedure with no twists or wrinkles and heel of stocking, if present, is over heel and opening in toe area (if present) is either over or under toe area; if using a mannequin, candidate may state stocking needs to be wrinkle-free",
        "short": "Check no twists or wrinkles",
        "critical": true,
        "kind": "seq",
        "g": 6,
        "why": "Twists and wrinkles can press into the skin, cut off circulation, and cause skin damage. This is a critical element because a badly placed stocking can hurt the client."
      },
      {
        "n": 9,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      },
      {
        "n": 10,
        "text": "After completing skill, wash hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "Turning the stocking inside-out at least to the heel happens before the foot of the stocking is placed over the toes.",
        "a": true,
        "explain": "Step 4 is turning the stocking inside-out; step 5 is placing the foot of the stocking over the toes, foot, and heel."
      },
      {
        "s": "The client should be sitting in a chair while the stocking is applied.",
        "a": false,
        "explain": "Step 3 says the client is in supine position (lying down in bed) while stocking is applied."
      },
      {
        "s": "Finishing the procedure with no twists or wrinkles is a critical element of this skill.",
        "a": true,
        "explain": "Step 8 is the only bold (critical) step in this skill."
      }
    ],
    "mcq": [
      {
        "q": "Which order is correct when applying the stocking?",
        "choices": [
          "Pull the top over the leg, then turn inside-out, then place over toes",
          "Place over toes first, then turn it inside-out, then pull over the leg",
          "Pull the top over the leg first, then place the foot part over the toes",
          "Turn it inside-out to the heel, place the foot part over toes, foot and heel, then pull the top over foot, heel and leg"
        ],
        "a": 3,
        "explain": "Steps 4, 5, and 6 give this order: inside-out to the heel, foot part over toes/foot/heel, then top over foot, heel, and leg."
      },
      {
        "q": "A candidate is working on a mannequin and cannot actually check for wrinkles. What does the sheet allow for the finishing step?",
        "choices": [
          "The candidate may skip the finishing step",
          "The candidate may state that the stocking needs to be wrinkle-free",
          "The candidate must still wait for the evaluator to say it is smooth",
          "The candidate may state that heel position does not matter"
        ],
        "a": 1,
        "explain": "Step 8 says that if using a mannequin, candidate may state stocking needs to be wrinkle-free."
      }
    ]
  },
  {
    "num": 3,
    "name": "Assists to ambulate using transfer belt",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Before assisting to stand, client is wearing non-skid shoes/footwear",
        "short": "Non-skid shoes on client",
        "critical": true,
        "kind": "seq",
        "g": 3,
        "why": "Socks or bare feet can slide on the floor and cause a fall. Non-skid footwear gives the client grip. This is a critical element because a fall can seriously hurt the client."
      },
      {
        "n": 4,
        "text": "Before assisting to stand, bed is at a safe level",
        "short": "Bed at safe level",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A bed at the right height lets the client put feet flat on the floor and push up without climbing down or dropping from a height."
      },
      {
        "n": 5,
        "text": "Before assisting to stand, checks and/or locks bed wheels",
        "short": "Check or lock bed wheels",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A bed that rolls while the client pushes against it can make them fall. Locked wheels keep it steady."
      },
      {
        "n": 6,
        "text": "Before assisting to stand, client is assisted to sitting position with feet flat on the floor",
        "short": "Client sitting with feet flat on floor",
        "critical": true,
        "kind": "seq",
        "g": 3,
        "why": "Feet flat on the floor give the client a base to stand from, and sitting first lets you check for dizziness. This is a critical element because starting a stand without a base risks a fall."
      },
      {
        "n": 7,
        "text": "Before assisting to stand, applies transfer belt securely at the waist over clothing/gown",
        "short": "Apply transfer belt at waist",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The belt gives you a safe handle to support the client's weight instead of pulling on their arms. It goes on over clothing so it does not pinch skin."
      },
      {
        "n": 8,
        "text": "Before assisting to stand, provides instructions to enable client to assist in standing including prearranged signal to alert client to begin standing",
        "short": "Give instructions and signal",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "When the client knows exactly what to do and when, they can help with the stand, which makes it safer for both of you."
      },
      {
        "n": 9,
        "text": "Stands facing client positioning self to ensure safety of candidate and client during transfer. Counts to three (or says other prearranged signal) to alert client to begin standing",
        "short": "Stand facing client, count to three",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Positioning yourself to protect both of you and counting together means you both move at the same moment, so the client is not pulled off balance."
      },
      {
        "n": 10,
        "text": "On signal, gradually assists client to stand by grasping transfer belt on both sides with an upward grasp (candidate’s hands are in upward position), and maintaining stability of client’s legs by standing knee to knee, or toe to toe with client",
        "short": "Assist to stand on signal",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Standing on the agreed signal with a firm upward grasp on the belt and knees or toes blocking the client's legs keeps them from buckling."
      },
      {
        "n": 11,
        "text": "Walks slightly behind and to one side of client for a distance of ten (10) feet, while holding onto the belt",
        "short": "Walk behind and beside, ten feet",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "Walking slightly behind and to one side lets you catch the client if they stumble, and holding the belt keeps your support instantly available."
      },
      {
        "n": 12,
        "text": "Assists client to bed and removes transfer belt",
        "short": "Assist to bed, remove belt",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "The client needs a safe place to rest after walking. The belt comes off only once they are safely back."
      },
      {
        "n": 13,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      },
      {
        "n": 14,
        "text": "After completing skill, wash hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [
      {
        "q": "For how many feet does the candidate walk the client?",
        "answer": 10,
        "unit": "feet",
        "wrong": [
          5,
          15,
          20
        ],
        "explain": "Step 11: 'for a distance of ten (10) feet'."
      },
      {
        "q": "The candidate counts to what number (or says another prearranged signal) before the client begins standing?",
        "answer": 3,
        "unit": "count",
        "wrong": [
          2,
          5,
          10
        ],
        "explain": "Step 9: 'Counts to three (or says other prearranged signal)'."
      }
    ],
    "tf": [
      {
        "s": "Making sure the client is wearing non-skid shoes/footwear is a critical element of this skill.",
        "a": true,
        "explain": "Step 3 is bold (critical)."
      },
      {
        "s": "The transfer belt is applied after the client begins to stand.",
        "a": false,
        "explain": "Step 7 says 'Before assisting to stand, applies transfer belt securely at the waist'."
      },
      {
        "s": "The candidate walks the client at least 20 feet.",
        "a": false,
        "explain": "Step 11 says a distance of ten (10) feet."
      }
    ],
    "mcq": [
      {
        "q": "Which of these must be done BEFORE the candidate assists the client to stand?",
        "choices": [
          "Walks slightly behind the client for ten feet",
          "Removes the transfer belt",
          "Checks and/or locks the bed wheels",
          "Washes hands to finish the skill"
        ],
        "a": 2,
        "explain": "Step 5 is 'Before assisting to stand, checks and/or locks bed wheels'. Walking, belt removal, and hand washing come after the stand."
      },
      {
        "q": "How does the candidate grasp the belt to assist the client to stand?",
        "choices": [
          "On both sides with an upward grasp (hands in upward position), standing knee to knee or toe to toe",
          "By one side only, pulling forward",
          "By the client's arms, with hands downward",
          "From behind the client with no belt contact"
        ],
        "a": 0,
        "explain": "Step 10 describes grasping the belt on both sides with an upward grasp while keeping the client's legs stable knee to knee or toe to toe."
      }
    ]
  },
  {
    "num": 4,
    "name": "Assists with use of bedpan",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Before placing bedpan, lowers head of bed",
        "short": "Lower head of bed before placing",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A flat bed makes it easier to slide the bedpan under the client's hips without hurting their back."
      },
      {
        "n": 4,
        "text": "Puts on clean gloves before placing bedpan under client",
        "short": "Put on gloves before placing",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "You may touch body fluids or a dirty bedpan, so gloves protect you and the client."
      },
      {
        "n": 5,
        "text": "Places bedpan correctly under client’s buttocks",
        "short": "Place bedpan under buttocks",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "The pan needs to sit correctly so waste goes into it and not onto the bed."
      },
      {
        "n": 6,
        "text": "Removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves after placing, wash hands",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Gloves from placing the pan are dirty, so they come off and hands are washed before you touch the bed controls or supplies."
      },
      {
        "n": 7,
        "text": "After positioning client on bedpan and removing gloves, raises head of bed",
        "short": "Raise head of bed",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "Sitting more upright is the natural position for using a bedpan and is more comfortable. It is done after gloves are off so you do not touch controls with dirty gloves."
      },
      {
        "n": 8,
        "text": "Toilet tissue is within reach",
        "short": "Toilet tissue within reach",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "The client needs to clean themselves, so tissue must be where they can reach it without help."
      },
      {
        "n": 9,
        "text": "Hand wipe is within reach and client is instructed to clean hands with hand wipe when finished",
        "short": "Hand wipe within reach, instruct client",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Clean hands after toileting reduce the spread of germs. Telling the client what the wipe is for makes sure they use it."
      },
      {
        "n": 10,
        "text": "Signaling device within reach and client is asked to signal when finished",
        "short": "Signaling device within reach, ask to signal",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "The client needs a way to call you when done. You step away to give privacy, so they must be able to reach the call device."
      },
      {
        "n": 11,
        "text": "Puts on clean gloves before removing bedpan",
        "short": "Put on gloves before removing",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Removing the pan means handling waste, so fresh gloves protect you."
      },
      {
        "n": 12,
        "text": "Head of bed is lowered before bedpan is removed",
        "short": "Lower head of bed before removing",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Lowering the head of bed first lets the pan come out flat so waste does not spill."
      },
      {
        "n": 13,
        "text": "Ensures client is covered except when placing and removing bedpan",
        "short": "Keep client covered except placing/removing",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Keeping the client covered protects their dignity and keeps them warm. Only the moments you must place or remove the pan are exceptions."
      },
      {
        "n": 14,
        "text": "Empties and rinses bedpan and pours rinse into toilet",
        "short": "Empty bedpan, rinse into toilet",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Waste goes into the toilet, where it belongs. Rinsing leaves the pan cleaner for the next use."
      },
      {
        "n": 15,
        "text": "Places bedpan in designated dirty supply area",
        "short": "Place bedpan in dirty supply area",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "A used pan is contaminated, so it goes to the dirty area and not near clean supplies."
      },
      {
        "n": 16,
        "text": "Removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves after emptying bedpan, wash hands",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "The outside of used gloves is contaminated. Removing them without touching that surface and washing hands right after keeps germs from spreading to you, the room, or the next client."
      },
      {
        "n": 17,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 12,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "The head of bed is raised after the bedpan is positioned and the candidate has removed gloves.",
        "a": true,
        "explain": "Step 7: 'After positioning client on bedpan and removing gloves, raises head of bed'."
      },
      {
        "s": "The head of bed is kept raised while the bedpan is removed.",
        "a": false,
        "explain": "Step 12 says head of bed is lowered before bedpan is removed."
      },
      {
        "s": "The candidate puts on gloves once, before placing the bedpan, and wears them until after the bedpan is emptied.",
        "a": false,
        "explain": "Gloves are removed and hands washed in step 6, then clean gloves are put on again in step 11 before removing the bedpan."
      }
    ],
    "mcq": [
      {
        "q": "The client is on the bedpan and the candidate has removed gloves and washed hands. What does the sheet say to do next?",
        "choices": [
          "Empty and rinse the bedpan",
          "Raise the head of bed",
          "Lower the head of bed",
          "Put on clean gloves to remove the bedpan"
        ],
        "a": 1,
        "explain": "Step 7 follows step 6: raise the head of bed after positioning the client and removing gloves. Gloves and lowering the bed come later (steps 11-12)."
      },
      {
        "q": "The client signals they are finished. Which pairing is correct for removing the bedpan?",
        "choices": [
          "Raise the head of bed higher so the client sits up, then remove with bare hands",
          "Remove the bedpan first, then put on gloves",
          "Remove the bedpan and then cover the client",
          "Put on clean gloves and lower the head of bed before the bedpan is removed"
        ],
        "a": 3,
        "explain": "Steps 11 and 12 require clean gloves and a lowered head of bed before the bedpan is removed."
      }
    ]
  },
  {
    "num": 5,
    "name": "Cleans upper or lower denture",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Puts on clean gloves before handling denture",
        "short": "Put on gloves",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Dentures carry saliva and germs, so gloves protect you before you handle them."
      },
      {
        "n": 2,
        "text": "Bottom of sink is lined and/or sink is partially filled with water before denture is held over sink",
        "short": "Line sink or partially fill with water",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Dentures are slippery and break if dropped. Water or a liner in the sink cushions a drop."
      },
      {
        "n": 3,
        "text": "Rinses denture in moderate temperature running water before brushing them",
        "short": "Rinse denture before brushing",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Rinsing first washes away loose food so brushing is more effective. Moderate-temperature water avoids warping the denture."
      },
      {
        "n": 4,
        "text": "Applies denture toothpaste to toothbrush",
        "short": "Apply denture toothpaste",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Denture toothpaste is made for the denture material. Regular toothpaste can scratch it."
      },
      {
        "n": 5,
        "text": "Brushes all surfaces of denture",
        "short": "Brush all surfaces of denture",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Every surface can collect plaque and food, so missing one leaves germs behind."
      },
      {
        "n": 6,
        "text": "Rinses all surfaces of denture under moderate temperature running water",
        "short": "Rinse denture after brushing",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Rinsing removes loosened debris and toothpaste so the client does not taste or swallow it."
      },
      {
        "n": 7,
        "text": "Rinses denture cup and lid",
        "short": "Rinse denture cup and lid",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "The cup and lid need to be clean so they do not re-contaminate the denture stored in them."
      },
      {
        "n": 8,
        "text": "Places denture in denture cup with moderate temperature water/solution and places lid on cup",
        "short": "Denture in cup with water, lid on",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Dentures need to stay moist or they can dry out and change shape. The lid keeps them clean."
      },
      {
        "n": 9,
        "text": "Rinses toothbrush and places in designated toothbrush basin/container",
        "short": "Rinse toothbrush, put in basin",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "A clean brush is ready for the next use and does not spread germs. It goes into its own container."
      },
      {
        "n": 10,
        "text": "Maintains clean technique with placement of toothbrush and denture",
        "short": "Maintain clean technique",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Setting the brush and denture down on a clean place the whole time keeps germs from moving from dirty surfaces onto items going into a client's mouth."
      },
      {
        "n": 11,
        "text": "Sink liner is removed and disposed of appropriately and/or sink is drained",
        "short": "Remove sink liner or drain sink",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "The liner and sink water now carry germs and debris, so they are disposed of properly."
      },
      {
        "n": 12,
        "text": "Removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves, wash hands",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "The outside of used gloves is contaminated. Removing them without touching that surface and washing hands right after keeps germs from spreading to you, the room, or the next client."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "The sink is lined or partially filled with water before the denture is held over the sink.",
        "a": true,
        "explain": "Step 2 says this must happen before denture is held over sink."
      },
      {
        "s": "The first time the denture is rinsed is after it has been brushed.",
        "a": false,
        "explain": "The denture is rinsed twice: once before brushing (step 3) and again after brushing (step 6)."
      },
      {
        "s": "Removing gloves and washing hands is the last step of this skill.",
        "a": true,
        "explain": "Step 12 is the final step, after the sink liner is removed or the sink drained."
      }
    ],
    "mcq": [
      {
        "q": "The candidate has just brushed all surfaces of the denture. What does the sheet say to do next?",
        "choices": [
          "Rinse all surfaces of the denture under moderate temperature running water",
          "Apply denture toothpaste to the toothbrush",
          "Place the denture in the cup and put on the lid",
          "Remove gloves and wash hands"
        ],
        "a": 0,
        "explain": "Step 5 is brushing, and step 6 is rinsing all surfaces under moderate temperature running water."
      },
      {
        "q": "The candidate is about to hold the denture over the sink to rinse it. What must already be true?",
        "choices": [
          "The sink has been drained",
          "The denture is already in the denture cup",
          "The bottom of the sink is lined and/or the sink is partially filled with water",
          "Toothpaste has been applied to the denture"
        ],
        "a": 2,
        "explain": "Step 2: the sink is lined and/or partially filled with water before denture is held over sink. Draining the sink is a later step (11)."
      }
    ]
  },
  {
    "num": 6,
    "name": "Counts and records radial pulse",
    "measurement": true,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Places fingertips on thumb side of client’s wrist to locate radial pulse",
        "short": "Place fingertips to locate radial pulse",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "The radial pulse is felt on the thumb side of the wrist. Using fingertips, not your thumb, avoids mixing up your own pulse with the client's."
      },
      {
        "n": 3,
        "text": "Count beats for one full minute",
        "short": "Count beats for one full minute",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A full minute catches irregular beats that a shorter count could miss, which makes the number accurate."
      },
      {
        "n": 4,
        "text": "Signaling device is within reach",
        "short": "Signaling device within reach",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "The client has to be able to call you if they need help once you leave. A call device they cannot reach is no help in an emergency."
      },
      {
        "n": 5,
        "text": "Before recording, washes hands",
        "short": "Wash hands before recording",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Your hands are washed before you handle the paper or chart so germs from the client or equipment do not spread onto records and the next person who touches them."
      },
      {
        "n": 6,
        "text": "Records pulse rate within plus or minus 4 beats of evaluator’s reading",
        "short": "Record pulse within 4 beats",
        "critical": true,
        "kind": "seq",
        "g": 6,
        "why": "A recorded pulse is part of the client's medical record, so it has to match the true reading closely. This is a critical element because other caregivers make decisions from it."
      }
    ],
    "facts": [
      {
        "q": "For how many full minutes must the pulse be counted?",
        "answer": 1,
        "unit": "minute",
        "wrong": [
          0.5,
          2,
          3
        ],
        "explain": "Step 3: 'Count beats for one full minute'."
      },
      {
        "q": "Within how many beats (plus or minus) of the evaluator's reading must the recorded pulse be?",
        "answer": 4,
        "unit": "beats",
        "wrong": [
          2,
          3,
          6
        ],
        "explain": "Step 6: 'within plus or minus 4 beats of evaluator's reading'."
      }
    ],
    "tf": [
      {
        "s": "Recording a pulse rate within plus or minus 4 beats of the evaluator's reading is a critical element.",
        "a": true,
        "explain": "Step 6 is bold (critical)."
      },
      {
        "s": "The candidate may count beats for 30 seconds and double the result.",
        "a": false,
        "explain": "Step 3 says to count beats for one full minute."
      },
      {
        "s": "Hands are washed before the pulse is recorded.",
        "a": true,
        "explain": "Step 5: 'Before recording, washes hands'."
      }
    ],
    "mcq": [
      {
        "q": "The candidate has finished counting beats for one full minute and the signaling device is within reach. What must happen before the pulse is recorded?",
        "choices": [
          "The candidate counts again for 30 seconds",
          "The candidate puts on gloves",
          "The candidate asks the client to read the pulse",
          "The candidate washes hands"
        ],
        "a": 3,
        "explain": "Step 5 says 'Before recording, washes hands'."
      },
      {
        "q": "The evaluator's reading is 72 beats. Which recorded pulse is within the sheet's tolerance?",
        "choices": [
          "66",
          "75",
          "77",
          "80"
        ],
        "a": 1,
        "explain": "Plus or minus 4 beats gives 68 to 76. 75 is inside; 66, 77, and 80 are outside."
      }
    ]
  },
  {
    "num": 7,
    "name": "Counts and records respirations",
    "measurement": true,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure (for testing purposes), speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "On the test you explain the procedure because the sheet requires it 'for testing purposes'. In everyday practice, clients can change how they breathe if they know you are counting."
      },
      {
        "n": 2,
        "text": "Counts respirations for one full minute",
        "short": "Count respirations one full minute",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "A full minute catches irregular breathing and gives an accurate rate."
      },
      {
        "n": 3,
        "text": "Signaling device is within reach",
        "short": "Signaling device within reach",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The client has to be able to call you if they need help once you leave. A call device they cannot reach is no help in an emergency."
      },
      {
        "n": 4,
        "text": "Before recording, washes hands",
        "short": "Wash hands before recording",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Your hands are washed before you handle the paper or chart so germs from the client or equipment do not spread onto records and the next person who touches them."
      },
      {
        "n": 5,
        "text": "Records respiration rate within plus or minus 2 breaths of evaluator’s reading",
        "short": "Record rate within 2 breaths",
        "critical": true,
        "kind": "seq",
        "g": 5,
        "why": "The rate goes into the client's record and other caregivers rely on it. This is a critical element because the number has to match the true reading."
      }
    ],
    "facts": [
      {
        "q": "For how many full minutes are respirations counted?",
        "answer": 1,
        "unit": "minute",
        "wrong": [
          0.5,
          2,
          3
        ],
        "explain": "Step 2: 'Counts respirations for one full minute'."
      },
      {
        "q": "Within how many breaths (plus or minus) of the evaluator's reading must the recorded rate be?",
        "answer": 2,
        "unit": "breaths",
        "wrong": [
          1,
          3,
          4
        ],
        "explain": "Step 5: 'within plus or minus 2 breaths of evaluator's reading'."
      }
    ],
    "tf": [
      {
        "s": "Respirations are counted for one full minute.",
        "a": true,
        "explain": "Step 2 says one full minute."
      },
      {
        "s": "A recorded respiration rate within plus or minus 4 breaths of the evaluator's reading meets the critical element.",
        "a": false,
        "explain": "Step 5 says plus or minus 2 breaths."
      },
      {
        "s": "Hands are washed before the respiration rate is recorded.",
        "a": true,
        "explain": "Step 4: 'Before recording, washes hands'."
      }
    ],
    "mcq": [
      {
        "q": "What must the candidate do immediately before recording the respiration rate?",
        "choices": [
          "Count again for another minute",
          "Put on gloves",
          "Wash hands",
          "Ask the client to hold their breath"
        ],
        "a": 2,
        "explain": "Step 4 reads 'Before recording, washes hands'."
      },
      {
        "q": "The evaluator counts 16 respirations. Which recorded rate meets the sheet's tolerance?",
        "choices": [
          "17",
          "13",
          "19",
          "20"
        ],
        "a": 0,
        "explain": "Plus or minus 2 breaths gives 14 to 18. Only 17 is inside."
      }
    ]
  },
  {
    "num": 8,
    "name": "Donning and removing PPE (gown and gloves)",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Picks up gown and unfolds",
        "short": "Pick up and unfold gown",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "A gown has to be open so you can put your arms into it without touching it to the floor or yourself."
      },
      {
        "n": 2,
        "text": "Facing the back opening of the gown places arms through each sleeve",
        "short": "Arms through sleeves",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "The back opening faces you so the gown covers your front, where contact is most likely."
      },
      {
        "n": 3,
        "text": "Fastens the neck opening",
        "short": "Fasten neck opening",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A fastened neck keeps the gown from slipping and leaves no gap at your chest."
      },
      {
        "n": 4,
        "text": "Secures gown at waist making sure that back of clothing is covered by gown (as much as possible)",
        "short": "Secure gown at waist, cover clothing",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Tying at the waist closes the gown so your clothing is covered as much as possible and not exposed to germs."
      },
      {
        "n": 5,
        "text": "Puts on gloves",
        "short": "Put on gloves",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Gloves go on after the gown so they can be pulled over the sleeve cuffs."
      },
      {
        "n": 6,
        "text": "Cuffs of gloves overlap cuffs of gown",
        "short": "Overlap glove cuffs over gown cuffs",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "Covering the sleeve cuffs leaves no skin or clothing showing between glove and gown."
      },
      {
        "n": 7,
        "text": "Before removing gown, with one gloved hand, grasps the other glove at the palm, remove glove",
        "short": "Remove first glove",
        "critical": true,
        "kind": "seq",
        "g": 7,
        "why": "The outside of the gloves is the most contaminated part. Pinching the palm of one glove with the other gloved hand removes the first one without touching your skin. This is a critical element."
      },
      {
        "n": 8,
        "text": "Slips fingers from ungloved hand underneath cuff of remaining glove at wrist, and removes glove turning it inside out as it is removed",
        "short": "Remove second glove inside out",
        "critical": true,
        "kind": "seq",
        "g": 8,
        "why": "Sliding clean fingers under the cuff touches only the inside of the glove, and turning it inside out traps germs. This is a critical element."
      },
      {
        "n": 9,
        "text": "Disposes of gloves into designated waste container without contaminating self",
        "short": "Dispose of gloves",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Used gloves go to the designated container so they do not contaminate surfaces or you."
      },
      {
        "n": 10,
        "text": "After removing gloves, unfastens gown at waist and neck",
        "short": "Unfasten gown at waist and neck",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "Gloves come off first so your dirty hands do not touch the ties, which would carry germs to your skin and the gown's inside."
      },
      {
        "n": 11,
        "text": "After removing gloves, removes gown without touching outside of gown",
        "short": "Remove gown without touching outside",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "The outside of the gown is contaminated, so only the inside should touch your hands and body."
      },
      {
        "n": 12,
        "text": "While removing gown, holds gown away from body without touching the floor, turns gown inward and keeps it inside out",
        "short": "Hold gown away, turn inward",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "Holding it away from your body and off the floor keeps germs from touching you. Turning it inward keeps the dirty outside folded in."
      },
      {
        "n": 13,
        "text": "Disposes of gown in designated container without contaminating self",
        "short": "Dispose of gown",
        "critical": false,
        "kind": "seq",
        "g": 12,
        "why": "The gown goes in its designated container so the dirty outside does not touch you or the surroundings."
      },
      {
        "n": 14,
        "text": "After completing skill, washes hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 13,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "Removing the first and second glove (steps 7 and 8) are both critical elements.",
        "a": true,
        "explain": "Steps 7 and 8 are bold (critical)."
      },
      {
        "s": "The gown is unfastened at the waist and neck before the gloves are removed.",
        "a": false,
        "explain": "Steps 10 and 11 begin 'After removing gloves'."
      },
      {
        "s": "Gloves are put on after the gown is secured at the waist.",
        "a": true,
        "explain": "Step 4 secures the gown at the waist; step 5 puts on gloves."
      }
    ],
    "mcq": [
      {
        "q": "The candidate has put on a gown and secured it at the waist. What does the sheet say to do next?",
        "choices": [
          "Removes the gown",
          "Puts on gloves",
          "Unfastens the neck opening",
          "Disposes of the gown"
        ],
        "a": 1,
        "explain": "Step 4 is securing the gown, step 5 is putting on gloves, and step 6 is overlapping cuffs."
      },
      {
        "q": "When taking off the PPE, which must be completed before the gown is unfastened?",
        "choices": [
          "The candidate washes hands",
          "The gown is turned inward",
          "The gown is disposed of",
          "Both gloves are removed and disposed of"
        ],
        "a": 3,
        "explain": "Steps 10 and 11 say 'After removing gloves' for unfastening and removing the gown. Hand washing is last (step 14)."
      }
    ]
  },
  {
    "num": 9,
    "name": "Dresses client with affected (weak) right arm",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Asks which shirt he/she would like to wear and dresses him/her in shirt of choice",
        "short": "Ask which shirt, dress in choice",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Letting the client choose respects their independence and dignity, even when they need help dressing."
      },
      {
        "n": 4,
        "text": "Avoids overexposure of client by ensuring client’s chest is covered",
        "short": "Keep client's chest covered",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "A bare chest is exposed and embarrassing. Keeping the client covered throughout protects dignity and keeps them warm."
      },
      {
        "n": 5,
        "text": "Removes gown from the left (unaffected) side first, then removes gown from the right (affected/weak) side",
        "short": "Remove gown from unaffected side first",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Removing from the strong side first lets you slide the gown off the weak arm with less pulling and strain on that arm."
      },
      {
        "n": 6,
        "text": "Before dressing client, disposes of gown into soiled linen container",
        "short": "Put gown in soiled linen before dressing",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "A used gown is dirty, so it goes in the soiled linen container before you handle the clean shirt."
      },
      {
        "n": 7,
        "text": "Assists to put the right (affected/weak) arm through the right sleeve of the shirt before placing garment on left (unaffected) arm",
        "short": "Weak arm into sleeve first",
        "critical": true,
        "kind": "seq",
        "g": 6,
        "why": "A weak arm moves less easily, so it goes into the sleeve first while there is slack. Doing it after the strong arm can twist or strain the joint. This is a critical element."
      },
      {
        "n": 8,
        "text": "While putting on shirt, moves body gently and naturally, avoiding force and over-extension of limbs and joints",
        "short": "Move body gently and naturally",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Joints and limbs can be hurt by force or by pushing past their natural range, especially if the client is weak or has pain. Smooth, natural movements protect the client from injury."
      },
      {
        "n": 9,
        "text": "Finishes with clothing in place",
        "short": "Finish with clothing in place",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "A shirt that is straight and comfortable avoids bunching and pressure on skin."
      },
      {
        "n": 10,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      },
      {
        "n": 11,
        "text": "After completing skill, washes hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "The weak (right) arm goes through its sleeve before the garment is placed on the left (unaffected) arm.",
        "a": true,
        "explain": "Step 7 is bold (critical)."
      },
      {
        "s": "The gown is removed from the affected (weak) side first.",
        "a": false,
        "explain": "Step 5 says remove gown from the left (unaffected) side first."
      },
      {
        "s": "The gown is placed in the soiled linen container before the client is dressed.",
        "a": true,
        "explain": "Step 6: 'Before dressing client, disposes of gown into soiled linen container'."
      }
    ],
    "mcq": [
      {
        "q": "The client's right arm is weak. Which sequence follows the sheet?",
        "choices": [
          "Remove gown from the left side first, dispose of the gown in soiled linen, put the right arm through the right sleeve, then place the shirt on the left arm",
          "Remove gown from the right side first, put the left arm through the sleeve, then the right arm",
          "Put the left arm through the left sleeve first, then the right arm, then dispose of the gown",
          "Dispose of the gown after the shirt is completely on"
        ],
        "a": 0,
        "explain": "Steps 5, 6, and 7: unaffected side off first, gown to soiled linen before dressing, weak arm in first."
      },
      {
        "q": "While the gown is off, what does the sheet say about the client's chest?",
        "choices": [
          "It may stay uncovered until the shirt is on",
          "Only the lower body needs to be covered",
          "The candidate avoids overexposure by ensuring the chest is covered",
          "Privacy from the curtain is enough, so no covering is needed"
        ],
        "a": 2,
        "explain": "Step 4: 'Avoids overexposure of client by ensuring client's chest is covered'."
      }
    ]
  },
  {
    "num": 10,
    "name": "Feeds client who cannot feed self",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure to client, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Before feeding, looks at name card on tray and asks client to state name",
        "short": "Check name card, ask client's name",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Checking the name card against what the client says makes sure the right person gets the right meal. This matters because of diet orders and allergies."
      },
      {
        "n": 3,
        "text": "Before feeding client, client is in an upright sitting position (75-90 degrees)",
        "short": "Client upright 75-90 degrees",
        "critical": true,
        "kind": "seq",
        "g": 2,
        "why": "Sitting upright lets food go down the right way and lowers the risk of choking. This is a critical element because aspiration can be life-threatening."
      },
      {
        "n": 4,
        "text": "Places tray where the food can be easily seen by client",
        "short": "Place tray in client's view",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "When clients can see their food, they are more interested in eating and feel in control."
      },
      {
        "n": 5,
        "text": "Candidate cleans client’s hands before beginning feeding",
        "short": "Clean client's hands",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Hands that touch food and mouth should be clean. Doing it first respects hygiene before the meal starts."
      },
      {
        "n": 6,
        "text": "Candidate sits in a chair facing client during feeding",
        "short": "Sit in chair facing client",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Sitting at eye level is calmer and safer than standing over the client. It also keeps the spoon at a comfortable angle so they can swallow safely."
      },
      {
        "n": 7,
        "text": "Tells client what foods and beverage are on tray",
        "short": "Tell client what foods are on tray",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Clients who cannot see well or are confused need to know what they are eating, which helps appetite and dignity."
      },
      {
        "n": 8,
        "text": "Asks client what he/she would like to eat first",
        "short": "Ask what to eat first",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Letting the client choose keeps them in control and respects their preferences."
      },
      {
        "n": 9,
        "text": "Using spoon, offers client one bite of each type of food on tray, telling client the content of each spoonful",
        "short": "Offer one spoonful of each food",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Offering each food and naming it keeps the meal varied and lets the client understand what is in each spoonful."
      },
      {
        "n": 10,
        "text": "Offers beverage at least once during meal",
        "short": "Offer beverage at least once",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Drinks help swallowing and prevent dehydration. Offering during the meal, not just at the end, helps the client take enough fluid."
      },
      {
        "n": 11,
        "text": "Candidate asks client if they are ready for next bite of food or sip of beverage",
        "short": "Ask readiness before each bite or sip",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Asking before each bite avoids rushing or overloading the mouth, which reduces choking risk."
      },
      {
        "n": 12,
        "text": "At end of meal, candidate cleans client’s mouth and hands",
        "short": "Clean mouth and hands at end",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "Wiping leftover food keeps the client comfortable and protects their skin."
      },
      {
        "n": 13,
        "text": "Removes food tray",
        "short": "Remove food tray",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Clearing the tray tidies the space and removes spoiled-food smells."
      },
      {
        "n": 14,
        "text": "Leaves client in upright sitting position (75-90 degrees) with signaling device within client’s reach",
        "short": "Leave upright with signaling device in reach",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Staying upright after eating helps food settle and lowers aspiration risk. The call device lets the client reach you."
      },
      {
        "n": 15,
        "text": "After completing skill, washes hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [
      {
        "q": "What is the minimum angle, in degrees, for the client's upright sitting position?",
        "answer": 75,
        "unit": "degrees",
        "wrong": [
          30,
          45,
          60
        ],
        "explain": "Steps 3 and 14 say upright sitting position (75-90 degrees); the minimum is 75."
      },
      {
        "q": "At minimum, how many times must the candidate offer a beverage during the meal?",
        "answer": 1,
        "unit": "time",
        "wrong": [
          2,
          3,
          4
        ],
        "explain": "Step 10: 'Offers beverage at least once during meal'."
      }
    ],
    "tf": [
      {
        "s": "Having the client in an upright sitting position (75-90 degrees) before feeding is a critical element.",
        "a": true,
        "explain": "Step 3 is bold (critical)."
      },
      {
        "s": "The candidate stands beside the bed during feeding.",
        "a": false,
        "explain": "Step 6: candidate sits in a chair facing client during feeding."
      },
      {
        "s": "The candidate looks at the name card on the tray and asks the client to state their name before feeding.",
        "a": true,
        "explain": "Step 2 says 'Before feeding, looks at name card on tray and asks client to state name'."
      }
    ],
    "mcq": [
      {
        "q": "Which order is correct at the end of the meal?",
        "choices": [
          "Remove the tray, clean mouth and hands, wash hands, then leave client upright",
          "Wash hands, clean mouth and hands, remove the tray, then leave client upright",
          "Leave client upright, wash hands, clean mouth and hands, then remove the tray",
          "Clean mouth and hands, remove the tray, leave client upright with signaling device in reach, then wash hands"
        ],
        "a": 3,
        "explain": "Steps 12-15: cleans mouth and hands, removes tray, leaves client upright with signaling device, then washes hands."
      },
      {
        "q": "A client is reclined at about 45 degrees at mealtime. What does the sheet require before feeding begins?",
        "choices": [
          "Begin feeding slowly, then raise the bed halfway through",
          "Position the client upright, 75-90 degrees",
          "Keep the client at 45 degrees for comfort",
          "Lower the bed to the low position"
        ],
        "a": 1,
        "explain": "Step 3 (critical) requires an upright sitting position (75-90 degrees) before feeding."
      }
    ]
  },
  {
    "num": 11,
    "name": "Gives modified bed bath (face and one arm, hand and underarm)",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Removes gown and places directly in soiled linen container while ensuring client’s chest and lower body is covered",
        "short": "Remove gown into soiled linen, keep covered",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The used gown is dirty, so it goes right into the soiled linen container. Covering the chest and lower body protects the client's dignity and warmth."
      },
      {
        "n": 4,
        "text": "Before washing, checks water temperature for safety and comfort and asks client to verify comfort of water",
        "short": "Check water temperature, client verifies",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Water that is too hot can burn skin, and clients may not feel or tell you it is too hot. Checking it and having the client confirm keeps them safe and comfortable."
      },
      {
        "n": 5,
        "text": "Puts on clean gloves before washing client.",
        "short": "Put on gloves before washing",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Gloves protect you from skin, fluids, and germs during washing."
      },
      {
        "n": 6,
        "text": "Beginning with eyes, washes eyes with wet washcloth (no soap), using a different area of the washcloth for each stroke, washing inner aspect to outer aspect then proceeds to wash face",
        "short": "Wash eyes inner to outer, then face",
        "critical": true,
        "kind": "seq",
        "g": 5,
        "why": "Eyes are cleaned first with plain water and a fresh part of the cloth for each stroke so germs are not moved from one eye or area to another. Going inner to outer carries debris away from the tear duct. This is a critical element."
      },
      {
        "n": 7,
        "text": "Dries face with dry cloth towel/washcloth",
        "short": "Dry face",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "Drying the face keeps skin from chapping and the client comfortable."
      },
      {
        "n": 8,
        "text": "Exposes one arm and places cloth towel underneath arm",
        "short": "Expose one arm, towel underneath",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Showing only one arm keeps the rest of the body covered, and the towel keeps the bed dry."
      },
      {
        "n": 9,
        "text": "Applies soap to wet washcloth",
        "short": "Apply soap to wet washcloth",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Soap goes onto the cloth, not directly onto skin, so it spreads evenly."
      },
      {
        "n": 10,
        "text": "Washes fingers (including fingernails), hand, arm, and underarm keeping rest of body covered",
        "short": "Wash fingers, hand, arm, underarm",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Washing the whole arm, hand, and fingers (including nails) removes dirt and germs, and keeping the rest of the body covered protects dignity."
      },
      {
        "n": 11,
        "text": "Rinses and dries fingers, hand, arm, and underarm",
        "short": "Rinse and dry arm",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "Leftover soap can irritate skin, and damp skin can break down."
      },
      {
        "n": 12,
        "text": "Moves body gently and naturally, avoiding force and over-extension of limbs and joints",
        "short": "Move body gently and naturally",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Joints and limbs can be hurt by force or by pushing past their natural range, especially if the client is weak or has pain. Smooth, natural movements protect the client from injury."
      },
      {
        "n": 13,
        "text": "Puts clean gown on client",
        "short": "Put clean gown on client",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "A clean gown restores comfort and dignity after the bath."
      },
      {
        "n": 14,
        "text": "Empties, rinses, and dries basin",
        "short": "Empty, rinse, dry basin",
        "critical": false,
        "kind": "seq",
        "g": 12,
        "why": "A basin that is emptied, rinsed, and dried is ready for the next person and does not leave germs or standing water behind."
      },
      {
        "n": 15,
        "text": "Places basin in designated dirty supply area",
        "short": "Basin to dirty supply area",
        "critical": false,
        "kind": "seq",
        "g": 13,
        "why": "Used basins and linens are contaminated. Putting them in the right place keeps germs away from clean supplies."
      },
      {
        "n": 16,
        "text": "Disposes of linen into soiled linen container",
        "short": "Dispose of linen in soiled container",
        "critical": false,
        "kind": "seq",
        "g": 14,
        "why": "Used linen carries germs, so it goes straight into the soiled linen container instead of lying around where it could spread them."
      },
      {
        "n": 17,
        "text": "Avoids contact between candidate clothing and used linens",
        "short": "Avoid clothing contact with used linens",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Used linens are dirty and your clothing can carry germs from room to room if they touch. Keeping them apart protects you and your next client."
      },
      {
        "n": 18,
        "text": "Removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves, wash hands",
        "critical": false,
        "kind": "seq",
        "g": 15,
        "why": "The outside of used gloves is contaminated. Removing them without touching that surface and washing hands right after keeps germs from spreading to you, the room, or the next client."
      },
      {
        "n": 19,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 16,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "When washing the eyes, the candidate uses no soap and a different area of the washcloth for each stroke, going inner to outer; this is a critical element.",
        "a": true,
        "explain": "Step 6 is bold (critical) and states exactly this."
      },
      {
        "s": "The eyes are washed from the outer aspect to the inner aspect.",
        "a": false,
        "explain": "Step 6 says inner aspect to outer aspect."
      },
      {
        "s": "Before washing, the candidate checks water temperature and asks the client to verify comfort.",
        "a": true,
        "explain": "Step 4 says exactly this."
      }
    ],
    "mcq": [
      {
        "q": "The candidate has washed the eyes and face. What does the sheet say comes next?",
        "choices": [
          "Applies soap to a wet washcloth",
          "Washes fingers, hand, arm, and underarm",
          "Dries face with dry cloth towel/washcloth",
          "Puts a clean gown on the client"
        ],
        "a": 2,
        "explain": "Step 6 is washing eyes then face, and step 7 is drying the face. Soap, arm washing, and gown come later."
      },
      {
        "q": "Which describes how the candidate washes the client's eyes?",
        "choices": [
          "With a wet washcloth and no soap, a different area of the washcloth for each stroke, inner aspect to outer aspect",
          "With soapy washcloth, outer to inner",
          "With a wet washcloth and no soap, using the same area for each stroke",
          "With a dry cloth, inner to outer"
        ],
        "a": 0,
        "explain": "Step 6 (critical): wet washcloth (no soap), different area for each stroke, inner aspect to outer aspect."
      }
    ]
  },
  {
    "num": 13,
    "name": "Measures and records urinary output",
    "measurement": true,
    "steps": [
      {
        "n": 1,
        "text": "Puts on clean gloves before handling bedpan",
        "short": "Put on gloves before handling bedpan",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Urine is a body fluid that can carry germs, so gloves protect you before you touch the bedpan."
      },
      {
        "n": 2,
        "text": "Pours the contents of the bedpan into measuring container without spilling or splashing urine outside of container",
        "short": "Pour into measuring container without spilling",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Spilling or splashing spreads germs and can make the measurement wrong because some urine is lost."
      },
      {
        "n": 3,
        "text": "Rinses bedpan and pours rinse into toilet",
        "short": "Rinse bedpan, pour rinse into toilet",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Rinsing leaves the bedpan cleaner, and the rinse water goes into the toilet instead of the sink or floor."
      },
      {
        "n": 4,
        "text": "Measures the amount of urine at eye level with container on flat surface (if between measurement lines, round up to nearest 25 ml/cc)",
        "short": "Measure at eye level on flat surface",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Reading at eye level on a flat surface avoids a slanted view that makes the amount look higher or lower. Rounding up to the nearest 25 ml/cc is the sheet's rule when between lines."
      },
      {
        "n": 5,
        "text": "After measuring urine, empties contents of measuring container into toilet",
        "short": "Empty measuring container into toilet",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Only after the amount has been read can the urine safely be flushed away."
      },
      {
        "n": 6,
        "text": "Rinses measuring container and pours rinse into toilet",
        "short": "Rinse measuring container, rinse into toilet",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "The container is reused, so rinsing it keeps it clean for the next measurement."
      },
      {
        "n": 7,
        "text": "Before recording output, removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves, wash hands before recording",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Dirty gloves and hands should not touch the paper or chart. Washing first keeps the record clean and stops spread."
      },
      {
        "n": 8,
        "text": "Records contents of container within plus or minus 25 ml/cc of evaluator’s reading",
        "short": "Record within 25 ml/cc",
        "critical": true,
        "kind": "seq",
        "g": 8,
        "why": "The output goes in the client's record and can guide treatment. This is a critical element because the number has to match the true reading closely."
      }
    ],
    "facts": [
      {
        "q": "To the nearest how many ml/cc is the amount rounded up when the level is between measurement lines?",
        "answer": 25,
        "unit": "ml/cc",
        "wrong": [
          5,
          10,
          50
        ],
        "explain": "Step 4: 'round up to nearest 25 ml/cc'."
      },
      {
        "q": "Within how many ml/cc (plus or minus) of the evaluator's reading must the recorded amount be?",
        "answer": 25,
        "unit": "ml/cc",
        "wrong": [
          10,
          20,
          50
        ],
        "explain": "Step 8: 'within plus or minus 25 ml/cc of evaluator's reading'."
      }
    ],
    "tf": [
      {
        "s": "The candidate measures the urine at eye level with the container on a flat surface.",
        "a": true,
        "explain": "Step 4 says exactly this."
      },
      {
        "s": "If the level falls between measurement lines, the candidate rounds down to the nearest 25 ml/cc.",
        "a": false,
        "explain": "Step 4 says round up to nearest 25 ml/cc."
      },
      {
        "s": "Gloves are removed and hands washed before the output is recorded.",
        "a": true,
        "explain": "Step 7: 'Before recording output, removes and disposes of gloves... and washes hands'."
      }
    ],
    "mcq": [
      {
        "q": "The candidate has just measured the amount of urine. What does the sheet say to do next?",
        "choices": [
          "Empties the contents of the measuring container into the toilet",
          "Records the amount immediately with gloves on",
          "Rinses the bedpan",
          "Washes hands and removes gloves"
        ],
        "a": 0,
        "explain": "Step 4 is measuring, step 5 is emptying the measuring container into the toilet. Recording is step 8, after gloves are off (step 7)."
      },
      {
        "q": "The evaluator's reading is 450 ml. Which recorded amount meets the critical element?",
        "choices": [
          "400 ml",
          "480 ml",
          "470 ml",
          "500 ml"
        ],
        "a": 2,
        "explain": "Plus or minus 25 ml gives 425 to 475. Only 470 is inside."
      }
    ]
  },
  {
    "num": 14,
    "name": "Measures and records weight of ambulatory client",
    "measurement": true,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Client has non-skid shoes/footwear on before walking to scale",
        "short": "Non-skid shoes before walking to scale",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Slippery footwear can cause a fall on the way to the scale. Non-skid shoes give the client grip."
      },
      {
        "n": 3,
        "text": "Before client steps on scale, candidate sets scale to zero",
        "short": "Set scale to zero before stepping on",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "If the scale does not start at zero, the weight will be off by whatever it started at."
      },
      {
        "n": 4,
        "text": "Asks client to step on center of scale and obtains client’s weight",
        "short": "Client steps on center, obtain weight",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Standing in the center spreads weight evenly so the reading is steady and accurate."
      },
      {
        "n": 5,
        "text": "Asks client to step off scale",
        "short": "Client steps off scale",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "The client steps off after the reading so they are not left standing longer than needed, and so the scale is ready to be read and cleared."
      },
      {
        "n": 6,
        "text": "Before recording, washes hands",
        "short": "Wash hands before recording",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Your hands are washed before you handle the paper or chart so germs from the client or equipment do not spread onto records and the next person who touches them."
      },
      {
        "n": 7,
        "text": "Records weight based on indicator on scale. Weight is within plus or minus 2 lbs of evaluator’s reading (If weight recorded in kg weight is within plus or minus 0.9 kg of evaluator’s reading)",
        "short": "Record weight within 2 lbs (0.9 kg)",
        "critical": true,
        "kind": "seq",
        "g": 6,
        "why": "Weight guides doses and treatment, so the number has to be accurate. This is a critical element."
      }
    ],
    "facts": [
      {
        "q": "Within how many pounds (plus or minus) of the evaluator's reading must the recorded weight be?",
        "answer": 2,
        "unit": "lbs",
        "wrong": [
          1,
          3,
          5
        ],
        "explain": "Step 7: 'within plus or minus 2 lbs of evaluator's reading'."
      },
      {
        "q": "If the weight is recorded in kilograms, within how many kg (plus or minus) of the evaluator's reading must it be?",
        "answer": 0.9,
        "unit": "kg",
        "wrong": [
          0.5,
          1,
          2
        ],
        "explain": "Step 7: 'within plus or minus 0.9 kg of evaluator's reading'."
      }
    ],
    "tf": [
      {
        "s": "The candidate sets the scale to zero before the client steps on it.",
        "a": true,
        "explain": "Step 3: 'Before client steps on scale, candidate sets scale to zero'."
      },
      {
        "s": "A weight recorded in kilograms must be within plus or minus 2 kg of the evaluator's reading.",
        "a": false,
        "explain": "Step 7 gives plus or minus 0.9 kg for kg (2 lbs is for pounds)."
      },
      {
        "s": "Hands are washed before the weight is recorded.",
        "a": true,
        "explain": "Step 6: 'Before recording, washes hands'."
      }
    ],
    "mcq": [
      {
        "q": "Which must be done before the client steps onto the scale?",
        "choices": [
          "The candidate washes hands",
          "The candidate records the weight",
          "The client is asked to step off the scale",
          "The candidate sets the scale to zero"
        ],
        "a": 3,
        "explain": "Step 3 says to set scale to zero before client steps on. Washing hands and recording come after the weight is obtained."
      },
      {
        "q": "The evaluator reads 70.0 kg and the candidate records in kilograms. Which recorded weight meets the critical element?",
        "choices": [
          "71.0 kg",
          "70.6 kg",
          "69.0 kg",
          "72.0 kg"
        ],
        "a": 1,
        "explain": "Plus or minus 0.9 kg gives 69.1 to 70.9. Only 70.6 is inside."
      }
    ]
  },
  {
    "num": 15,
    "name": "Performs modified passive range of motion (PROM) for one knee and one ankle",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Ensures that client is supine in bed and instructs client to inform candidate if pain is experienced during exercise",
        "short": "Client supine, tell to report pain",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Lying flat gives a stable base for moving the leg. Telling the client to say if it hurts lets you stop before causing injury."
      },
      {
        "n": 4,
        "text": "While supporting the leg at knee and ankle, bends the knee and then returns leg to client’s normal position (flexion/extension) (AT LEAST 3 TIMES unless pain is verbalized). Moves joints gently, slowly and smoothly through the range of motion, discontinuing exercise if client verbalizes pain.",
        "short": "Knee flexion/extension at least 3 times",
        "critical": true,
        "kind": "seq",
        "g": 4,
        "why": "Bending and straightening the knee keeps the joint moving and can prevent stiffness. Supporting the leg at the knee and ankle and stopping at pain protects the joint. This is a critical element."
      },
      {
        "n": 5,
        "text": "While supporting the foot and ankle close to the bed, pushes/pulls foot toward head (dorsiflexion), and pushes/pulls foot down, toes point down (plantar flexion) (AT LEAST 3 TIMES unless pain is verbalized). Moves joints gently, slowly and smoothly through the range of motion, discontinuing exercise if client verbalizes pain.",
        "short": "Ankle dorsiflexion/plantar flexion at least 3 times",
        "critical": true,
        "kind": "seq",
        "g": 5,
        "why": "Moving the foot up and down keeps the ankle flexible. Supporting the foot and ankle and stopping if pain is voiced prevents injury. This is a critical element."
      },
      {
        "n": 6,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      },
      {
        "n": 7,
        "text": "After completing skill, washes hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [
      {
        "q": "At minimum, how many times is each movement repeated unless pain is verbalized?",
        "answer": 3,
        "unit": "times",
        "wrong": [
          1,
          2,
          5
        ],
        "explain": "Steps 4 and 5: '(AT LEAST 3 TIMES unless pain is verbalized)'."
      }
    ],
    "tf": [
      {
        "s": "Both the knee exercise and the ankle exercise are critical elements.",
        "a": true,
        "explain": "Steps 4 and 5 are bold (critical)."
      },
      {
        "s": "The candidate must finish all 3 repetitions even if the client says it hurts.",
        "a": false,
        "explain": "Steps 4 and 5 say 3 times 'unless pain is verbalized', and to discontinue exercise if client verbalizes pain."
      },
      {
        "s": "The client is supine and told to inform the candidate of pain before the exercises begin.",
        "a": true,
        "explain": "Step 3 comes before steps 4 and 5."
      }
    ],
    "mcq": [
      {
        "q": "Which ending order is correct?",
        "choices": [
          "Wash hands, then signaling device within reach and bed low",
          "Signaling device, then ankle exercise, then wash hands",
          "Ankle exercise, then signaling device within reach and bed low, then wash hands",
          "Wash hands, then ankle exercise, then signaling device"
        ],
        "a": 2,
        "explain": "Steps 5-7: ankle movement, signaling device and low bed, then 'After completing skill, washes hands'."
      },
      {
        "q": "During knee flexion the client says 'ow, that hurts' on the second repetition. What does the sheet require?",
        "choices": [
          "Discontinue the exercise",
          "Finish the third repetition, then stop",
          "Move faster so it is over sooner",
          "Switch to the ankle exercise without telling the client"
        ],
        "a": 0,
        "explain": "Step 4: 'discontinuing exercise if client verbalizes pain'."
      }
    ]
  },
  {
    "num": 16,
    "name": "Performs modified passive range of motion (PROM) for one shoulder",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Instructs client to inform candidate if pain experienced during exercise",
        "short": "Tell client to report pain",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The client knows their body best, so asking them to speak up lets you stop before causing harm."
      },
      {
        "n": 4,
        "text": "While supporting arm at the elbow and at the wrist, raises client’s straightened arm from side position upward toward head to ear level and returns arm down to side of body (flexion/extension) (AT LEAST 3 TIMES unless pain is verbalized). Moves joint gently, slowly and smoothly through the range of motion, discontinuing exercise if client verbalizes pain.",
        "short": "Shoulder flexion/extension at least 3 times",
        "critical": true,
        "kind": "seq",
        "g": 4,
        "why": "Raising the arm to ear level and lowering it keeps the shoulder moving and prevents stiffness. Supporting the elbow and wrist and stopping at pain protects the joint. This is a critical element."
      },
      {
        "n": 5,
        "text": "While supporting arm at the elbow and at the wrist, moves client’s straightened arm away from the side of body to shoulder level and returns to side of body (abduction/adduction) (AT LEAST 3 TIMES unless pain is verbalized). Moves joint gently, slowly and smoothly through the range of motion, discontinuing exercise if client verbalizes pain.",
        "short": "Shoulder abduction/adduction at least 3 times",
        "critical": true,
        "kind": "seq",
        "g": 5,
        "why": "Moving the arm out to the side to shoulder level and back works the shoulder in a different direction. Supporting it and stopping at pain keeps it safe. This is a critical element."
      },
      {
        "n": 6,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      },
      {
        "n": 7,
        "text": "After completing skill, washes hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [
      {
        "q": "At minimum, how many times is each shoulder movement repeated unless pain is verbalized?",
        "answer": 3,
        "unit": "times",
        "wrong": [
          1,
          2,
          5
        ],
        "explain": "Steps 4 and 5: '(AT LEAST 3 TIMES unless pain is verbalized)'."
      }
    ],
    "tf": [
      {
        "s": "In flexion/extension the candidate raises the straightened arm from the side upward toward the head to ear level.",
        "a": true,
        "explain": "Step 4 describes exactly this."
      },
      {
        "s": "In abduction/adduction the arm is moved away from the side of the body up to ear level.",
        "a": false,
        "explain": "Step 5 says to shoulder level; ear level is for flexion/extension (step 4)."
      },
      {
        "s": "Each shoulder movement is repeated at least 5 times unless pain is verbalized.",
        "a": false,
        "explain": "Steps 4 and 5 say at least 3 times."
      }
    ],
    "mcq": [
      {
        "q": "Which must be done before the candidate begins moving the client's arm through the exercises?",
        "choices": [
          "Raises the signaling device within reach",
          "Instructs the client to inform the candidate if pain is experienced",
          "Washes hands to finish",
          "Moves the arm to shoulder level"
        ],
        "a": 1,
        "explain": "Step 3 comes before the movements in steps 4 and 5."
      },
      {
        "q": "The candidate raises the straightened arm from the side toward the head. To what level, and what is the movement called?",
        "choices": [
          "Shoulder level (flexion/extension)",
          "Ear level (abduction/adduction)",
          "Shoulder level (abduction/adduction)",
          "Ear level (flexion/extension)"
        ],
        "a": 3,
        "explain": "Step 4: to ear level, flexion/extension. Step 5 is shoulder level, abduction/adduction."
      }
    ]
  },
  {
    "num": 17,
    "name": "Positions on side",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Before turning, lowers head of bed",
        "short": "Lower head of bed before turning",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A flat bed is easier and safer to turn someone on, and it avoids sliding the client."
      },
      {
        "n": 4,
        "text": "Raises side rail on side to which body will be turned",
        "short": "Raise side rail on turn side",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "The rail gives the client something to hold and prevents rolling off the bed on the side they are turned toward."
      },
      {
        "n": 5,
        "text": "Candidate assists client to slowly roll onto side toward raised side rail",
        "short": "Roll client slowly toward raised rail",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Rolling slowly avoids pulling or jarring the body, and turning toward the rail puts the client against a safe barrier."
      },
      {
        "n": 6,
        "text": "Places or adjusts pillow under head for support",
        "short": "Place or adjust pillow under head",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "A pillow keeps the head and neck aligned and comfortable."
      },
      {
        "n": 7,
        "text": "Candidate repositions arm and shoulder so that client is not lying on arm",
        "short": "Reposition arm and shoulder",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Lying on an arm can pinch nerves and cut off circulation. Moving it keeps the client comfortable and safe."
      },
      {
        "n": 8,
        "text": "Supports top arm with supportive device",
        "short": "Support top arm",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Support keeps the top arm from hanging and pulling on the shoulder."
      },
      {
        "n": 9,
        "text": "Places supportive device behind client’s back",
        "short": "Support device behind back",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "A support behind the back helps the client stay in position and keeps them from rolling back."
      },
      {
        "n": 10,
        "text": "Places supportive device between legs with top knee flexed; knee and ankle supported",
        "short": "Support device between legs, knee flexed",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "Padding between knees and ankles stops them rubbing together, which can cause pressure sores and discomfort."
      },
      {
        "n": 11,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      },
      {
        "n": 12,
        "text": "After completing skill, washes hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 12,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "The candidate lowers the head of the bed before turning the client.",
        "a": true,
        "explain": "Step 3: 'Before turning, lowers head of bed'."
      },
      {
        "s": "The side rail that is raised is on the side away from which the client will be turned.",
        "a": false,
        "explain": "Step 4: raises side rail on side to which body will be turned."
      },
      {
        "s": "The client is rolled slowly onto the side toward the raised side rail.",
        "a": true,
        "explain": "Step 5 says exactly this."
      }
    ],
    "mcq": [
      {
        "q": "Which must be done before the candidate assists the client to roll onto the side?",
        "choices": [
          "Lowers the head of bed",
          "Supports the top arm with a supportive device",
          "Places a supportive device behind the client's back",
          "Washes hands to finish the skill"
        ],
        "a": 0,
        "explain": "Step 3 (lower head of bed) comes before step 5 (rolling). The supports and hand washing come after."
      },
      {
        "q": "Which side rail does the candidate raise?",
        "choices": [
          "The one on the side the client's back will face",
          "Neither, until after the client has been rolled",
          "The one on the side to which the body will be turned",
          "Only the rail at the foot of the bed"
        ],
        "a": 2,
        "explain": "Step 4 says to raise the side rail on the side to which body will be turned, before the roll in step 5."
      }
    ]
  },
  {
    "num": 18,
    "name": "Provides catheter care for female",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Before washing, checks water temperature for safety and comfort and asks client to verify comfort of water",
        "short": "Check water temperature, client verifies",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Water that is too hot can burn skin, and clients may not feel or tell you it is too hot. Checking it and having the client confirm keeps them safe and comfortable."
      },
      {
        "n": 4,
        "text": "Puts on clean gloves before washing",
        "short": "Put on gloves before washing",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Gloves protect you from body fluids and germs during washing."
      },
      {
        "n": 5,
        "text": "Places linen protector under perineal area including buttocks before washing",
        "short": "Place linen protector under perineal area",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The protector keeps the bed dry and clean, which lowers infection risk and saves the client from lying on wet linen."
      },
      {
        "n": 6,
        "text": "Exposes area surrounding catheter (only exposing client between hip and knee)",
        "short": "Expose area around catheter, hip to knee",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Only the area you are working on is uncovered, which protects dignity and warmth."
      },
      {
        "n": 7,
        "text": "Applies soap to wet washcloth",
        "short": "Apply soap to wet washcloth",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Soap on the cloth spreads evenly and keeps it from being dropped on the client."
      },
      {
        "n": 8,
        "text": "While holding catheter at meatus without tugging, cleans at least four inches of catheter from meatus, moving in only one direction, away from meatus, using a clean area of the washcloth for each stroke",
        "short": "Clean 4 inches of catheter, one direction",
        "critical": true,
        "kind": "seq",
        "g": 6,
        "why": "Moving away from the body carries germs away from the urinary opening, so they are not pushed toward the bladder. Holding the catheter at the meatus keeps it from tugging, which hurts. This is a critical element."
      },
      {
        "n": 9,
        "text": "While holding catheter at meatus without tugging, using a clean washcloth, rinses at least four inches of catheter from meatus, moving only in one direction, away from meatus, using a clean area of the washcloth for each stroke",
        "short": "Rinse 4 inches with clean washcloth",
        "critical": true,
        "kind": "seq",
        "g": 7,
        "why": "Rinsing removes soap that can irritate skin. A clean washcloth and one direction keep germs moving away from the body. This is a critical element."
      },
      {
        "n": 10,
        "text": "While holding catheter at meatus without tugging, dries at least four inches of catheter moving away from meatus using a dry cloth towel/washcloth",
        "short": "Dry catheter with dry towel",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "A dry cloth wiped away from the meatus removes moisture that germs like to grow in."
      },
      {
        "n": 11,
        "text": "Empties, rinses, and dries basin",
        "short": "Empty, rinse, dry basin",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "A basin that is emptied, rinsed, and dried is ready for the next person and does not leave germs or standing water behind."
      },
      {
        "n": 12,
        "text": "Places basin in designated dirty supply area",
        "short": "Basin to dirty supply area",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "Used basins and linens are contaminated. Putting them in the right place keeps germs away from clean supplies."
      },
      {
        "n": 13,
        "text": "Disposes of used linen into soiled linen container and disposes of linen protector appropriately",
        "short": "Dispose of linen and linen protector",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "Used linen carries germs, so it goes straight into the soiled linen container instead of lying around where it could spread them."
      },
      {
        "n": 14,
        "text": "Avoids contact between candidate clothing and used linen",
        "short": "Avoid clothing contact with used linen",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Used linens are dirty and your clothing can carry germs from room to room if they touch. Keeping them apart protects you and your next client."
      },
      {
        "n": 15,
        "text": "Removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves, wash hands",
        "critical": false,
        "kind": "seq",
        "g": 12,
        "why": "The outside of used gloves is contaminated. Removing them without touching that surface and washing hands right after keeps germs from spreading to you, the room, or the next client."
      },
      {
        "n": 16,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 13,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      }
    ],
    "facts": [
      {
        "q": "At least how many inches of catheter are cleaned, rinsed, and dried, starting at the meatus?",
        "answer": 4,
        "unit": "inches",
        "wrong": [
          2,
          3,
          6
        ],
        "explain": "Steps 8, 9, and 10 each say 'at least four inches of catheter'."
      }
    ],
    "tf": [
      {
        "s": "Cleaning at least four inches of catheter, moving in only one direction away from the meatus, is a critical element.",
        "a": true,
        "explain": "Step 8 is bold (critical)."
      },
      {
        "s": "The candidate cleans the catheter by moving toward the meatus.",
        "a": false,
        "explain": "Steps 8-10 say moving away from the meatus."
      },
      {
        "s": "The candidate checks water temperature and asks the client to verify comfort before washing.",
        "a": true,
        "explain": "Step 3 says exactly this."
      }
    ],
    "mcq": [
      {
        "q": "Which order is correct for caring for the catheter itself?",
        "choices": [
          "Clean the catheter, apply soap, dry, then rinse",
          "Apply soap, rinse, clean, then dry",
          "Dry the catheter, apply soap, clean, then rinse",
          "Apply soap to washcloth, clean catheter, rinse with a clean washcloth, then dry with a dry cloth towel"
        ],
        "a": 3,
        "explain": "Steps 7-10: soap on washcloth, clean, rinse with a clean washcloth, dry."
      },
      {
        "q": "Which technique matches the critical element for cleaning the catheter?",
        "choices": [
          "Hold the tubing at the bag end, wipe back and forth",
          "Hold catheter at meatus without tugging, move in one direction away from the meatus, clean area of washcloth for each stroke",
          "Hold at the meatus, move toward the meatus, reuse the same area of washcloth",
          "Pull gently on the catheter while wiping in any direction"
        ],
        "a": 1,
        "explain": "Step 8 requires holding at the meatus without tugging, one direction away from the meatus, and a clean area of the washcloth for each stroke."
      }
    ]
  },
  {
    "num": 19,
    "name": "Provides foot care on one foot",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Before washing, checks water temperature for safety and comfort and asks client to verify comfort of water",
        "short": "Check water temperature, client verifies",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Water that is too hot can burn skin, and clients may not feel or tell you it is too hot. Checking it and having the client confirm keeps them safe and comfortable."
      },
      {
        "n": 4,
        "text": "Basin is in a comfortable position for client and on protective barrier",
        "short": "Basin comfortable, on protective barrier",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A comfortable basin position keeps the client from straining. The barrier protects the bed or floor from water."
      },
      {
        "n": 5,
        "text": "Puts on clean gloves before washing foot",
        "short": "Put on gloves before washing foot",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Feet can carry germs and skin problems, so gloves protect you."
      },
      {
        "n": 6,
        "text": "Client’s bare foot is placed into the water",
        "short": "Place bare foot in water",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "The foot soaks to loosen dirt and soften skin before washing."
      },
      {
        "n": 7,
        "text": "Applies soap to wet washcloth",
        "short": "Apply soap to wet washcloth",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Soap goes onto the washcloth so you can spread it evenly across the foot."
      },
      {
        "n": 8,
        "text": "Lifts foot from water and washes foot (including between the toes)",
        "short": "Lift foot, wash including between toes",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "Between the toes is where moisture and germs hide, so skipping it leaves germs and can cause infections."
      },
      {
        "n": 9,
        "text": "Foot is rinsed (including between the toes)",
        "short": "Rinse foot including between toes",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Leftover soap can dry and irritate skin, especially between toes."
      },
      {
        "n": 10,
        "text": "Dries foot (including between the toes) with dry cloth towel/washcloth",
        "short": "Dry foot including between toes",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Damp skin, especially between toes, can crack or grow fungus, so it must be dried well."
      },
      {
        "n": 11,
        "text": "Applies lotion to top and bottom of foot (excluding between the toes) removing excess with a towel/washcloth",
        "short": "Apply lotion, not between toes",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Lotion softens dry skin, but between toes it traps moisture that helps germs grow. Removing excess keeps the skin from being slippery."
      },
      {
        "n": 12,
        "text": "Supports foot and ankle during procedure",
        "short": "Support foot and ankle",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Supporting the foot and ankle the whole time prevents strain and keeps the client from feeling unsteady or in pain."
      },
      {
        "n": 13,
        "text": "Empties, rinses, and dries basin",
        "short": "Empty, rinse, dry basin",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "A basin that is emptied, rinsed, and dried is ready for the next person and does not leave germs or standing water behind."
      },
      {
        "n": 14,
        "text": "Places basin in designated dirty supply area",
        "short": "Basin to dirty supply area",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "Used basins and linens are contaminated. Putting them in the right place keeps germs away from clean supplies."
      },
      {
        "n": 15,
        "text": "Disposes of used linen into soiled linen container",
        "short": "Dispose of used linen",
        "critical": false,
        "kind": "seq",
        "g": 12,
        "why": "Used linen carries germs, so it goes straight into the soiled linen container instead of lying around where it could spread them."
      },
      {
        "n": 16,
        "text": "Removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves, wash hands",
        "critical": false,
        "kind": "seq",
        "g": 13,
        "why": "The outside of used gloves is contaminated. Removing them without touching that surface and washing hands right after keeps germs from spreading to you, the room, or the next client."
      },
      {
        "n": 17,
        "text": "Signaling device is within reach",
        "short": "Signaling device within reach",
        "critical": false,
        "kind": "seq",
        "g": 14,
        "why": "The client has to be able to call you if they need help once you leave. A call device they cannot reach is no help in an emergency."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "Lotion is applied to the top and bottom of the foot but not between the toes.",
        "a": true,
        "explain": "Step 11 says 'excluding between the toes'."
      },
      {
        "s": "The candidate removes gloves before drying the foot.",
        "a": false,
        "explain": "Step 10 is drying the foot; gloves are removed in step 16."
      },
      {
        "s": "The candidate puts on gloves before the client's bare foot is placed into the water.",
        "a": true,
        "explain": "Step 5 (gloves before washing foot) comes before step 6 (foot placed into water)."
      }
    ],
    "mcq": [
      {
        "q": "Which of these must be done before the client's bare foot goes into the water?",
        "choices": [
          "Applies lotion to the foot",
          "Dries the foot between the toes",
          "Checks water temperature and asks the client to verify comfort",
          "Empties and rinses the basin"
        ],
        "a": 2,
        "explain": "Step 3 is 'Before washing, checks water temperature'; step 6 places the foot in the water. Lotion, drying, and basin emptying come later."
      },
      {
        "q": "How does the candidate apply lotion?",
        "choices": [
          "To top and bottom of foot, excluding between the toes, removing excess with a towel/washcloth",
          "To top and bottom of foot including between the toes",
          "To the top of the foot only, leaving the excess on",
          "Between the toes only, with no towel"
        ],
        "a": 0,
        "explain": "Step 11 gives this method."
      }
    ]
  },
  {
    "num": 20,
    "name": "Provides mouth care",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Before providing mouth care, client is in upright sitting position (75-90 degrees)",
        "short": "Client upright 75-90 degrees",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Sitting up makes it easier to swallow and lowers the chance of choking on water or toothpaste."
      },
      {
        "n": 4,
        "text": "Puts on clean gloves before cleaning mouth",
        "short": "Put on gloves before cleaning mouth",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The mouth has saliva and germs, so gloves protect you."
      },
      {
        "n": 5,
        "text": "Places cloth towel across chest before providing mouth care",
        "short": "Towel across chest",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The towel keeps water and toothpaste off the client's gown and skin."
      },
      {
        "n": 6,
        "text": "Secures cup of water and moistens toothbrush",
        "short": "Secure cup of water, moisten toothbrush",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "A moist toothbrush is gentler on the gums and helps spread toothpaste."
      },
      {
        "n": 7,
        "text": "Before cleaning mouth, applies toothpaste to moistened toothbrush",
        "short": "Apply toothpaste to moistened brush",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Toothpaste goes onto the already wet brush so it is ready to clean."
      },
      {
        "n": 8,
        "text": "Cleans mouth (including tongue and all surfaces of teeth), using gentle motions",
        "short": "Clean mouth with gentle motions",
        "critical": true,
        "kind": "seq",
        "g": 6,
        "why": "Teeth, gums, and tongue all hold germs and food. Gentle motions protect the gums from injury. This is a critical element."
      },
      {
        "n": 9,
        "text": "Maintains clean technique with placement of toothbrush",
        "short": "Maintain clean technique with toothbrush",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Putting the toothbrush down only on clean surfaces keeps germs from moving into the client's mouth."
      },
      {
        "n": 10,
        "text": "Candidate holds emesis basin to chin while client rinses mouth",
        "short": "Hold emesis basin while client rinses",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "The basin catches the water and saliva so the client does not have to get up or spill on themselves."
      },
      {
        "n": 11,
        "text": "Candidate wipes mouth and removes clothing protector",
        "short": "Wipe mouth, remove clothing protector",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "A clean, dry mouth is comfortable, and removing the protector finishes the care."
      },
      {
        "n": 12,
        "text": "Disposes of used linen into soiled linen container",
        "short": "Dispose of used linen",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Used linen carries germs, so it goes straight into the soiled linen container instead of lying around where it could spread them."
      },
      {
        "n": 13,
        "text": "Rinses toothbrush and empties, rinses, and dries basin",
        "short": "Rinse toothbrush, empty and clean basin",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "The brush and basin are reused, so cleaning them stops germ buildup."
      },
      {
        "n": 14,
        "text": "Removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves, wash hands",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "The outside of used gloves is contaminated. Removing them without touching that surface and washing hands right after keeps germs from spreading to you, the room, or the next client."
      },
      {
        "n": 15,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 12,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      }
    ],
    "facts": [
      {
        "q": "What is the minimum angle, in degrees, for the client's upright sitting position before mouth care?",
        "answer": 75,
        "unit": "degrees",
        "wrong": [
          30,
          45,
          60
        ],
        "explain": "Step 3: 'upright sitting position (75-90 degrees)'."
      }
    ],
    "tf": [
      {
        "s": "The client is in an upright sitting position (75-90 degrees) before mouth care is provided.",
        "a": true,
        "explain": "Step 3 says exactly this."
      },
      {
        "s": "Toothpaste is applied to the toothbrush before the toothbrush is moistened.",
        "a": false,
        "explain": "Step 6 moistens the toothbrush; step 7 applies toothpaste to the moistened toothbrush."
      },
      {
        "s": "Cleaning the mouth, including the tongue and all surfaces of the teeth, with gentle motions is a critical element.",
        "a": true,
        "explain": "Step 8 is bold (critical)."
      }
    ],
    "mcq": [
      {
        "q": "Which is the correct way to prepare the toothbrush?",
        "choices": [
          "Apply toothpaste first, then moisten the brush",
          "Secure cup of water and moisten the brush, then apply toothpaste to the moistened brush",
          "Apply toothpaste and skip moistening",
          "Moisten the brush after cleaning the mouth"
        ],
        "a": 1,
        "explain": "Steps 6 and 7: secure cup and moisten toothbrush, then apply toothpaste to the moistened toothbrush before cleaning mouth."
      },
      {
        "q": "The client has just rinsed their mouth into the emesis basin. What does the sheet say to do next?",
        "choices": [
          "Removes gloves and washes hands",
          "Rinses the toothbrush and cleans the basin",
          "Raises the client to a sitting position",
          "Wipes the mouth and removes the clothing protector"
        ],
        "a": 3,
        "explain": "Step 10 is holding the basin during the rinse and step 11 is wiping the mouth and removing the clothing protector."
      }
    ]
  },
  {
    "num": 21,
    "name": "Provides perineal care (peri-care) for female",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Before washing, checks water temperature for safety and comfort and asks client to verify comfort of water",
        "short": "Check water temperature, client verifies",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Water that is too hot can burn skin, and clients may not feel or tell you it is too hot. Checking it and having the client confirm keeps them safe and comfortable."
      },
      {
        "n": 4,
        "text": "Puts on clean gloves before washing perineal area",
        "short": "Put on gloves before washing",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Gloves protect you from body fluids and germs during washing."
      },
      {
        "n": 5,
        "text": "Places pad/ linen protector under perineal area including buttocks before washing",
        "short": "Place pad or linen protector under client",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The pad keeps the bed dry and clean, which prevents skin breakdown and infection."
      },
      {
        "n": 6,
        "text": "Exposes perineal area (only exposing between hips and knees)",
        "short": "Expose perineal area, hips to knees",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Only the area being washed is uncovered, which protects dignity and warmth."
      },
      {
        "n": 7,
        "text": "Applies soap to wet washcloth",
        "short": "Apply soap to wet washcloth",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Soap on the cloth spreads evenly and avoids putting soap directly on sensitive skin."
      },
      {
        "n": 8,
        "text": "Washes genital area, moving from front to back, while using a clean area of the washcloth for each stroke",
        "short": "Wash genital area front to back",
        "critical": true,
        "kind": "seq",
        "g": 6,
        "why": "Moving front to back keeps germs from the rectal area away from the urinary opening, which prevents urinary tract infections. Using a clean area for each stroke avoids spreading germs back. This is a critical element."
      },
      {
        "n": 9,
        "text": "Using clean washcloth, rinses soap from genital area, moving from front to back, while using a clean area of the washcloth for each stroke",
        "short": "Rinse genital area front to back",
        "critical": true,
        "kind": "seq",
        "g": 7,
        "why": "Rinsing removes soap that can irritate. Front to back and a clean area for each stroke keep germs moving away from the urinary opening. This is a critical element."
      },
      {
        "n": 10,
        "text": "Dries genital area moving from front to back with dry cloth towel/washcloth",
        "short": "Dry genital area front to back",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Dry skin is less likely to break down or grow germs, and front to back keeps germs away from the urinary opening."
      },
      {
        "n": 11,
        "text": "After washing genital area, turns to side, then washes rectal area moving from front to back using a clean area of washcloth for each stroke.",
        "short": "Turn to side, wash rectal area",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "The rectal area is the dirtiest, so it is cleaned last and moving front to back with a clean area each stroke does not carry germs forward."
      },
      {
        "n": 12,
        "text": "Using clean washcloth, rinses soap from rectal area, moving from front to back, while using a clean area of the washcloth for each stroke",
        "short": "Rinse rectal area front to back",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "Rinsing removes soap and germs. Clean areas of washcloth and front to back direction keep the dirtier area from contaminating clean skin."
      },
      {
        "n": 13,
        "text": "Dries rectal area moving from front to back with dry cloth towel/washcloth",
        "short": "Dry rectal area front to back",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "Dry skin heals and resists infection better than damp skin."
      },
      {
        "n": 14,
        "text": "Repositions client",
        "short": "Reposition client",
        "critical": false,
        "kind": "seq",
        "g": 12,
        "why": "After washing, the client is returned to a comfortable, safe position."
      },
      {
        "n": 15,
        "text": "Empties, rinses, and dries basin",
        "short": "Empty, rinse, dry basin",
        "critical": false,
        "kind": "seq",
        "g": 13,
        "why": "A basin that is emptied, rinsed, and dried is ready for the next person and does not leave germs or standing water behind."
      },
      {
        "n": 16,
        "text": "Places basin in designated dirty supply area",
        "short": "Basin to dirty supply area",
        "critical": false,
        "kind": "seq",
        "g": 14,
        "why": "Used basins and linens are contaminated. Putting them in the right place keeps germs away from clean supplies."
      },
      {
        "n": 17,
        "text": "Disposes of used linen into soiled linen container and disposes of linen protector appropriately",
        "short": "Dispose of linen and linen protector",
        "critical": false,
        "kind": "seq",
        "g": 15,
        "why": "Used linen carries germs, so it goes straight into the soiled linen container instead of lying around where it could spread them."
      },
      {
        "n": 18,
        "text": "Avoids contact between candidate clothing and used linen",
        "short": "Avoid clothing contact with used linen",
        "critical": false,
        "kind": "throughout",
        "g": null,
        "why": "Used linens are dirty and your clothing can carry germs from room to room if they touch. Keeping them apart protects you and your next client."
      },
      {
        "n": 19,
        "text": "Removes and disposes of gloves (without contaminating self) into waste container and washes hands",
        "short": "Remove gloves, wash hands",
        "critical": false,
        "kind": "seq",
        "g": 16,
        "why": "The outside of used gloves is contaminated. Removing them without touching that surface and washing hands right after keeps germs from spreading to you, the room, or the next client."
      },
      {
        "n": 20,
        "text": "Signaling device is within reach and bed is in low position",
        "short": "Signaling device within reach, bed low",
        "critical": false,
        "kind": "seq",
        "g": 17,
        "why": "The client has to be able to call you after you walk away, and a low bed means a fall hurts less if they try to get up alone. It leaves the room safe when you leave."
      }
    ],
    "facts": [],
    "tf": [
      {
        "s": "Washing the genital area from front to back, using a clean area of the washcloth for each stroke, is a critical element.",
        "a": true,
        "explain": "Step 8 is bold (critical)."
      },
      {
        "s": "The rectal area is washed before the genital area is washed.",
        "a": false,
        "explain": "Step 11 says 'After washing genital area, turns to side, then washes rectal area'."
      },
      {
        "s": "The candidate repositions the client after drying the rectal area and before emptying the basin.",
        "a": true,
        "explain": "Steps 13, 14, and 15 are in that order."
      }
    ],
    "mcq": [
      {
        "q": "The candidate has dried the rectal area. What does the sheet say comes next?",
        "choices": [
          "Repositions client",
          "Empties, rinses, and dries basin",
          "Disposes of used linen",
          "Removes gloves and washes hands"
        ],
        "a": 0,
        "explain": "Step 13 is drying the rectal area and step 14 is repositioning the client. The other choices come later."
      },
      {
        "q": "Which technique does the sheet require when washing and rinsing the genital area?",
        "choices": [
          "Moving from back to front, using the same area",
          "Moving from front to back, using the same area of washcloth",
          "Moving from front to back, using a clean area of the washcloth for each stroke",
          "Moving side to side, using a clean area of the washcloth"
        ],
        "a": 2,
        "explain": "Steps 8 and 9 (critical) both say front to back with a clean area of the washcloth for each stroke."
      }
    ]
  },
  {
    "num": 22,
    "name": "Transfers from bed to wheelchair using transfer belt",
    "measurement": false,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Privacy is provided with a curtain, screen, or door",
        "short": "Provide privacy",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "Personal care exposes the body, so privacy protects the client's dignity. Closing the curtain, screen, or door first means no one walks in partway through."
      },
      {
        "n": 3,
        "text": "Before assisting to stand, wheelchair is positioned alongside of bed, at head of bed facing foot or foot of bed facing head",
        "short": "Position wheelchair alongside bed",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Placing the chair right next to the bed makes the pivot short, so the client does not have to take extra steps."
      },
      {
        "n": 4,
        "text": "Before assisting to stand, footrests are folded up or removed",
        "short": "Fold up or remove footrests",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Footrests in the way are a trip hazard when the client turns to sit."
      },
      {
        "n": 5,
        "text": "Before assisting to stand, locks wheels on wheelchair",
        "short": "Lock wheelchair wheels",
        "critical": true,
        "kind": "seq",
        "g": 3,
        "why": "A chair that rolls when the client sits is a serious fall risk. Locked wheels hold it still. This is a critical element."
      },
      {
        "n": 6,
        "text": "Before assisting to stand, bed is at a safe level",
        "short": "Bed at safe level",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A bed at the right height lets the client put feet flat on the floor and stand without dropping or climbing."
      },
      {
        "n": 7,
        "text": "Before assisting to stand, checks and/or locks bed wheels",
        "short": "Check or lock bed wheels",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A bed that rolls while the client pushes against it can make them fall."
      },
      {
        "n": 8,
        "text": "Before assisting to stand, client is assisted to a sitting position with feet flat on the floor",
        "short": "Client sitting with feet flat on floor",
        "critical": true,
        "kind": "seq",
        "g": 3,
        "why": "Feet flat on the floor give a stable base to stand from. This is a critical element because standing without a base risks a fall."
      },
      {
        "n": 9,
        "text": "Before assisting to stand, client is wearing shoes",
        "short": "Client wearing shoes",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "Shoes protect feet and give grip on the floor during the stand and pivot."
      },
      {
        "n": 10,
        "text": "Before assisting to stand, applies transfer belt securely at the waist over clothing/gown",
        "short": "Apply transfer belt at waist",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "The belt gives you a secure handle at the client's center so you can support them without pulling on their arms."
      },
      {
        "n": 11,
        "text": "Before assisting to stand, provides instructions to enable client to assist in transfer including prearranged signal to alert when to begin standing",
        "short": "Give instructions and signal",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "When the client knows what to do and when, they can help and the move is smoother and safer."
      },
      {
        "n": 12,
        "text": "Stands facing client positioning self to ensure safety of candidate and client during transfer. Counts to three (or says other prearranged signal) to alert client to begin standing",
        "short": "Stand facing client, count to three",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Positioning yourself for safety and counting together means you both move at the same moment."
      },
      {
        "n": 13,
        "text": "On signal, gradually assists client to stand by grasping transfer belt on both sides with an upward grasp (candidates hands are in upward position) and maintaining stability of client’s legs by standing knee to knee, or toe to toe with the client",
        "short": "Assist to stand on signal",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "Standing on the agreed signal with a firm upward grasp and legs blocked keeps the client from buckling."
      },
      {
        "n": 14,
        "text": "Assists client to turn to stand in front of wheelchair with back of client’s legs against wheelchair",
        "short": "Turn client to stand at wheelchair",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "The back of the client's legs touching the chair tells them where it is, so they can sit safely."
      },
      {
        "n": 15,
        "text": "Lowers client into wheelchair",
        "short": "Lower client into wheelchair",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Lowering slowly prevents a hard drop that could injure the client."
      },
      {
        "n": 16,
        "text": "Positions client with hips touching back of wheelchair and transfer belt is removed",
        "short": "Hips against chair back, remove belt",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Hips back in the seat give the client a stable position. The belt is removed only once they are safely seated."
      },
      {
        "n": 17,
        "text": "Positions feet on footrests",
        "short": "Position feet on footrests",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "Feet on footrests keep them from dragging on the floor when the chair moves."
      },
      {
        "n": 18,
        "text": "Signaling device is within reach",
        "short": "Signaling device within reach",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "The client has to be able to call you if they need help once you leave. A call device they cannot reach is no help in an emergency."
      },
      {
        "n": 19,
        "text": "After completing skill, washes hands",
        "short": "Wash hands",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "Washing hands at the very end removes germs you picked up during the task, so you do not carry them to the next person or yourself."
      }
    ],
    "facts": [
      {
        "q": "The candidate counts to what number (or says another prearranged signal) to alert the client to begin standing?",
        "answer": 3,
        "unit": "count",
        "wrong": [
          2,
          5,
          10
        ],
        "explain": "Step 12: 'Counts to three (or says other prearranged signal)'."
      }
    ],
    "tf": [
      {
        "s": "Locking the wheels on the wheelchair before assisting to stand is a critical element.",
        "a": true,
        "explain": "Step 5 is bold (critical)."
      },
      {
        "s": "Footrests are folded up or removed after the client has been lowered into the wheelchair.",
        "a": false,
        "explain": "Step 4 says 'Before assisting to stand, footrests are folded up or removed'."
      },
      {
        "s": "The transfer belt is removed after the client is lowered into the wheelchair.",
        "a": true,
        "explain": "Step 15 lowers the client; step 16 positions the client and removes the belt."
      }
    ],
    "mcq": [
      {
        "q": "Which must be completed before the candidate assists the client to stand?",
        "choices": [
          "Client is lowered into the wheelchair",
          "Feet are positioned on footrests",
          "Transfer belt is removed",
          "Wheelchair wheels are locked"
        ],
        "a": 3,
        "explain": "Step 5 says 'Before assisting to stand, locks wheels on wheelchair'. The other choices happen after the stand."
      },
      {
        "q": "Which action is a critical element in this skill?",
        "choices": [
          "Positioning feet on the footrests",
          "Assisting the client to a sitting position with feet flat on the floor before standing",
          "Making sure the client is wearing shoes",
          "Folding up or removing the footrests"
        ],
        "a": 1,
        "explain": "Steps 5 and 8 are bold (critical): locking wheelchair wheels and sitting with feet flat on the floor. Shoes, footrests, and feet on footrests are not bold."
      }
    ]
  },
  {
    "num": 23,
    "name": "Measures and records manual blood pressure",
    "measurement": true,
    "steps": [
      {
        "n": 1,
        "text": "Explains procedure, speaking clearly, slowly, and directly, maintaining face-to-face contact whenever possible",
        "short": "Explain procedure",
        "critical": false,
        "kind": "seq",
        "g": 1,
        "why": "Telling the client what is about to happen, slowly and face to face, helps them relax and cooperate. It also lets you confirm they understood before you touch them."
      },
      {
        "n": 2,
        "text": "Before using stethoscope, wipes bell/diaphragm and earpieces of stethoscope with alcohol",
        "short": "Wipe stethoscope with alcohol",
        "critical": false,
        "kind": "seq",
        "g": 2,
        "why": "The earpieces and bell touch skin and ears of many people, so wiping with alcohol removes germs before use."
      },
      {
        "n": 3,
        "text": "Client’s arm is positioned with palm up and upper arm is exposed",
        "short": "Position arm palm up, upper arm exposed",
        "critical": false,
        "kind": "seq",
        "g": 3,
        "why": "A bare upper arm lets you place the cuff correctly, and palm up exposes the inner arm where the artery is."
      },
      {
        "n": 4,
        "text": "Feels for brachial artery on inner aspect of arm, at bend of elbow",
        "short": "Feel for brachial artery",
        "critical": false,
        "kind": "seq",
        "g": 4,
        "why": "Finding the pulse tells you where to put the stethoscope so you can hear the sounds clearly."
      },
      {
        "n": 5,
        "text": "Places blood pressure cuff snugly on client’s upper arm, with sensor/arrow over brachial artery site",
        "short": "Place cuff snugly on upper arm",
        "critical": false,
        "kind": "seq",
        "g": 5,
        "why": "The cuff has to sit snugly with the sensor over the artery, or the reading will be wrong."
      },
      {
        "n": 6,
        "text": "Earpieces of stethoscope are in ears and bell/diaphragm is over brachial artery site",
        "short": "Earpieces in ears, bell over artery",
        "critical": false,
        "kind": "seq",
        "g": 6,
        "why": "Sounds can only be heard when the earpieces are in and the bell is on the artery."
      },
      {
        "n": 7,
        "text": "Candidate inflates cuff between 160mm Hg to 180 mm Hg. If beat heard immediately upon cuff deflation, completely deflate cuff. Re-inflate cuff to no more than 200 mm Hg",
        "short": "Inflate cuff to 160-180 mm Hg",
        "critical": false,
        "kind": "seq",
        "g": 7,
        "why": "Inflating high enough closes off the artery so you can hear the first sound as it opens. If you hear a beat right away, you inflate again higher, but never above 200 because too much pressure hurts the client."
      },
      {
        "n": 8,
        "text": "Deflates cuff slowly and notes the first sound (systolic reading), and last sound (diastolic reading) (If rounding needed, measurements are rounded UP to the nearest 2 mm of mercury)",
        "short": "Deflate slowly, note systolic and diastolic",
        "critical": false,
        "kind": "seq",
        "g": 8,
        "why": "Slow deflation lets you catch the exact first and last sounds. Rounding up to the nearest 2 mm of mercury is the sheet's rule."
      },
      {
        "n": 9,
        "text": "Removes cuff",
        "short": "Remove cuff",
        "critical": false,
        "kind": "seq",
        "g": 9,
        "why": "The cuff is taken off so the arm is no longer squeezed and the client is comfortable."
      },
      {
        "n": 10,
        "text": "Signaling device is within reach",
        "short": "Signaling device within reach",
        "critical": false,
        "kind": "seq",
        "g": 10,
        "why": "The client has to be able to call you if they need help once you leave. A call device they cannot reach is no help in an emergency."
      },
      {
        "n": 11,
        "text": "Before recording, washes hands",
        "short": "Wash hands before recording",
        "critical": false,
        "kind": "seq",
        "g": 11,
        "why": "Your hands are washed before you handle the paper or chart so germs from the client or equipment do not spread onto records and the next person who touches them."
      },
      {
        "n": 12,
        "text": "After obtaining reading using BP cuff and stethoscope, records both systolic and diastolic pressures each within plus or minus 8 mm of evaluator’s reading",
        "short": "Record both pressures within 8 mm",
        "critical": true,
        "kind": "seq",
        "g": 12,
        "why": "Blood pressure guides decisions about the client's care, so the numbers must match the true reading. This is a critical element."
      }
    ],
    "facts": [
      {
        "q": "What is the minimum pressure, in mm Hg, to which the cuff is first inflated?",
        "answer": 160,
        "unit": "mm Hg",
        "wrong": [
          140,
          150,
          170
        ],
        "explain": "Step 7: 'inflates cuff between 160mm Hg to 180 mm Hg'."
      },
      {
        "q": "If a beat is heard immediately on deflation, the cuff is re-inflated to no more than how many mm Hg?",
        "answer": 200,
        "unit": "mm Hg",
        "wrong": [
          180,
          220,
          250
        ],
        "explain": "Step 7: 'Re-inflate cuff to no more than 200 mm Hg'."
      },
      {
        "q": "To the nearest how many mm of mercury are readings rounded UP when rounding is needed?",
        "answer": 2,
        "unit": "mm",
        "wrong": [
          1,
          4,
          5
        ],
        "explain": "Step 8: 'rounded UP to the nearest 2 mm of mercury'."
      },
      {
        "q": "Within how many mm (plus or minus) of the evaluator's reading must each recorded pressure be?",
        "answer": 8,
        "unit": "mm",
        "wrong": [
          2,
          4,
          6
        ],
        "explain": "Step 12: 'each within plus or minus 8 mm of evaluator's reading'."
      }
    ],
    "tf": [
      {
        "s": "Measurements are rounded UP to the nearest 2 mm of mercury if rounding is needed.",
        "a": true,
        "explain": "Step 8 says this."
      },
      {
        "s": "The candidate wipes the stethoscope with alcohol after placing the earpieces in the ears.",
        "a": false,
        "explain": "Step 2 says 'Before using stethoscope, wipes...' and the earpieces go in the ears in step 6."
      },
      {
        "s": "Recording both systolic and diastolic pressures within plus or minus 8 mm of the evaluator's reading is a critical element.",
        "a": true,
        "explain": "Step 12 is bold (critical)."
      }
    ],
    "mcq": [
      {
        "q": "Which must the candidate do before the stethoscope earpieces go in the ears?",
        "choices": [
          "Records both pressures",
          "Removes the cuff",
          "Wipes bell/diaphragm and earpieces with alcohol",
          "Washes hands"
        ],
        "a": 2,
        "explain": "Step 2 comes before step 6. The other choices come after the measurement."
      },
      {
        "q": "The candidate inflates to 170 mm Hg and hears a beat immediately upon cuff deflation. What does the sheet say?",
        "choices": [
          "Completely deflate cuff, then re-inflate to no more than 200 mm Hg",
          "Keep deflating slowly and note the readings anyway",
          "Inflate to 250 mm Hg",
          "Remove the cuff and record 170"
        ],
        "a": 0,
        "explain": "Step 7: if a beat is heard immediately upon deflation, completely deflate the cuff and re-inflate to no more than 200 mm Hg."
      }
    ]
  }
];
  if (typeof module!=='undefined') module.exports = root.NNAAP_SKILLS;
})(typeof window!=='undefined'?window:globalThis);
