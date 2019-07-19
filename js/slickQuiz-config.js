// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
   "info": {
        "name":    "NASA Glenn Apollo Quiz",
        "main":    "<p>Think you're an Apollo expert? Test your knowledge of Apollo here</p>",
        "results": "<h5>Congratulations!</h5><p>Head to the table on your right to get a poster.</p>",
        "level1":  "Ready for space",
        "level2":  "Oh so close",
        "level3":  "You'll get it next time",
        "level4":  "Might want to try again",
        "level5":  "Still in astronaut training" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What was the name of the Apollo 11 lunar module?",
            "a": [
                {"option": "Eagle",      "correct": true},
                {"option": "Saturn V",     "correct": false},
                {"option": "Columbia",      "correct": false},
                {"option": "Intrepid",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Carrying Neil Armstrong and Edwin “Buzz” Aldrin, Eagle was the first crewed vehicle to land on the Moon.</p>",
            "incorrect": "<p><span>The correct answer was Eagle</span> Carrying Neil Armstrong and Edwin “Buzz” Aldrin, Eagle was the first crewed vehicle to land on the Moon.</p>" // no comma here
        },
       { // Question 2 - Multiple Choice, Single True Answer
            "q": "What was the name of the Apollo 11 recovery ship?",
            "a": [
                {"option": "USS Ticonderoga",      "correct": false},
                {"option": "USS Randolph",     "correct": false},
                {"option": "USS Valley Forge",      "correct": false},
                {"option": "USS Hornet",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The USS Hornet stationed itself 1,200 miles southwest of Honolulu to await either an aborted launch or a successful splashdown.</p>",
            "incorrect": "<p><span>The correct answer was USS Hornet</span> The USS Hornet stationed itself 1,200 miles southwest of Honolulu to await either an aborted launch or a successful splashdown.</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Single True Answer
            "q": "What contribution did NASA Glenn make to the Apollo program?",
            "a": [
                {"option": "Microgravity experiments to test the Lunar Module’s propulsion system",      "correct": false},
                {"option": "Wind tunnel testing on the Saturn rocket booster engines",     "correct": false},
                {"option": "Propulsion development that made the rockets possible",      "correct": false},
                {"option": "All of the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span>Research advancements made at NASA Glenn, then known as Lewis Research Center, enabled the Apollo program and are vital to the Artemis program of today.</p>",
            "incorrect": "<p><span>The correct answer was all of the above</span>Research advancements made at NASA Glenn, then known as Lewis Research Center, enabled the Apollo program and are vital to the Artemis program of today.</p>" // no comma here
        },
       { // Question 4 - Multiple Choice, Single True Answer
            "q": "Which facility at Glenn helped solve the problem of restarting the Service Module’s propulsion system?",
            "a": [
                {"option": "10x10 Wind Tunnel",      "correct": false},
                {"option": "Zero-Gravity Facility",     "correct": true},
                {"option": "Icing Research Tunnel",      "correct": false},
                {"option": "Space Power Facility",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span>The Zero-Gravity Facility at NASA Glenn is one of two drop towers on the site. The facility gives researchers a near weightless environment for 5.18 seconds.</p>",
            "incorrect": "<p><span>The correct answer was the Zero-Gravity Facility</span>The Zero-Gravity Facility at NASA Glenn is one of two drop towers on the site. The facility gives researchers a near weightless environment for 5.18 seconds.</p>" // no comma here
        },
       { // Question 5 - Multiple Choice, Single True Answer
            "q": "Who was an integral part of NASA’s beginning and named the Apollo mission Apollo?",
            "a": [
                {"option": "George Low",      "correct": false},
                {"option": "Thomas Paine",     "correct": false},
                {"option": "George Lewis",      "correct": false},
                {"option": "Abe Silverstein",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span>Abe Silverstein served as Lewis Research Center’s Associate Director before moving to headquarters. He was key in planning the Apollo, Ranger, Mariner, Surveyor and Voyager missions.</p>",
            "incorrect": "<p><span>The correct answer was Abe Silverstein</span>Abe Silverstein served as Lewis Research Center’s Associate Director before moving to headquarters. He was key in planning the Apollo, Ranger, Mariner, Surveyor and Voyager missions.</p>" // no comma here
        },
       { // Question 6 - Multiple Choice, Single True Answer
            "q": "Who is Artemis?",
            "a": [
                {"option": "The twin sister of Apollo",      "correct": false},
                {"option": "The goddess of the Moon in Greek mythology",     "correct": false},
                {"option": "NASA's program to send the first woman and next man to the Moon by 2024",      "correct": false},
                {"option": "All of the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span>Artemis is NASA’s path forward to return the Moon and establish a sustainable human presence on the lunar surface.</p>",
            "incorrect": "<p><span>The correct answer was all of the above</span>Artemis is NASA’s path forward to return the Moon and establish a sustainable human presence on the lunar surface.</p>" // no comma here
        },
       { // Question 7 - Multiple Choice, Single True Answer
            "q": "What is the Gateway?",
            "a": [
                {"option": "A powerful, advanced rocket",      "correct": false},
                {"option": "The home and office for astronauts in space",     "correct": true},
                {"option": "A spacecraft to take astronauts into deep space",      "correct": false},
                {"option": "The rover that will explore the lunar surface",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span>Orion, the spacecraft taking astronauts there, will dock at the Gateway as it orbits around the Moon.</p>",
            "incorrect": "<p><span>The correct answer was the home and office for astronuats in space</span>Orion, the spacecraft taking astronauts there, will dock at the Gateway as it orbits around the Moon.</p>" // no comma here
        },
       { // Question 8 - Multiple Choice, Single True Answer
            "q": "How much will the Space Launch System rocket weigh?",
            "a": [
                {"option": "99,000 pounds",      "correct": false},
                {"option": "875,000 pounds",     "correct": false},
                {"option": "5.75 million pounds",      "correct": true},
                {"option": "9.25 million pounds",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span>The initial design will be able to send 57,000 pounds to the Moon, is 322 feet tall and can produce 8.8 million pounds of thrust at liftoff.</p>",
            "incorrect": "<p><span>The correct answer was 5.75 million pounds</span>The initial design will be able to send 57,000 pounds to the Moon, is 322 feet tall and can produce 8.8 million pounds of thrust at liftoff.</p>" // no comma here
        } // no comma
    ]
};
