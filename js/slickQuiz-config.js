// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
   "info": {
        "name":    "NASA Glenn Apollo Quiz",
        "main":    "<p>Think you're an Apollo expert? Test your knowledge of Apollo here</p>",
        "results": "<h5>Congratulations!</h5><p>Change this later to something that conveys they can pick up a poster.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
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
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following best represents your preferred breakfast?",
            "a": [
                {"option": "Bacon and eggs",               "correct": false},
                {"option": "Fruit, oatmeal, and yogurt",   "correct": true},
                {"option": "Leftover pizza",               "correct": false},
                {"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where are you right now? Select ALL that apply.",
            "a": [
                {"option": "Planet Earth",           "correct": true},
                {"option": "Pluto",                  "correct": false},
                {"option": "At a computing device",  "correct": true},
                {"option": "The Milky Way",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
