// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Self Evaluation",
        "main":    "<p></p>",
        "results": "<p style='font-size:20px'><a href='index.html'><u>Click here</u></a> to go to simulation</p>",
        "level1":  "Good! You can move on to the simulator right away",
        "level2":  "Make sure to get that one right the next time",
        "level3":  "You did well, but there is still scope of improvement. We suggest another reading of basics before going to simulator",
        "level4":  "May be it is better you improve your understanding a little more before moving on to the simulator",
        "level5":  "We think you should go through the theory once more before using the simulator" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following exists for a slider in slider crank mechanism?",
            "a": [
                {"option": "linear acceleration",      "correct": true},
                {"option": "tangential acceleration",     "correct": false},
                {"option": "centripetal acceleration",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : linear acceleration</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the centripetal acceleration of a crank rotating with constant angular velocity",
            "a": [
                {"option": "r&omega;<sup>2</sup>",               "correct": true},
                {"option": "0",   "correct": false},
                {"option": "1rad/s<sup>2</sup>",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : r&omega;<sup>2</sup></p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the tangential acceleration of a 1cm crank rotating with constant angular velocity &omega;",
            "a": [
                {"option": "0",               "correct": true},
                {"option": "&omega;<sup>2</sup>",   "correct": false},
                {"option": "1rad/s<sup>2</sup>",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 0</p>" // no comma here
        },
        { // Question 4
            "q": "What is the tangential acceleration of a 10cm crank rotating with constant angular acceleration of 2rad/s<sup>2</sup>",
            "a": [
                {"option": "20cm/s<sup>2</sup>",    "correct": true},
                {"option": "10cm/s<sup>2</sup>",     "correct": false},
                {"option": "5cm/s<sup>2</sup> to the axis of slider",      "correct": false},
              {"option": "None of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 20cm/s<sup>2</sup> </p>"  // no comma here
        },
        { // Question 5 
            "q": "Crank starts from rest and rotates with a constant angular acceleration of 2rad/s<sup>2</sup>. What will be its angular velocity after 5seconds ",
            "a": [
                {"option": "10rad/s",    "correct": true},
                {"option": "0",     "correct": false},
		 {"option": "2rad/s",  "correct": false},
                {"option": "5rad/s",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 10rad/s </p>"  // no comma here
        }   // no comma here
    ]
};
