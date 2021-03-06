// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<a href='../index.html'>click here</a> to go to list of Experiments",
        "level1":  "Excellent! You should try another Experiment.",
        "level2":  "That was nice. May be next time you'll get all of them right! Good Luck!",
        "level3":  "Give another try at the simulator. You should be able to pick up few more things this time.",
        "level4":  "Probably you need to build some more understanding about the topic.",
        "level5":  "May be you should spend some more time with the concepts." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "For a constant input angular velocity which of the following is true always?",
            "a": [
                {"option": "angular velocity of coupler is constant",      "correct": false},
                {"option": "angular velocity of output is constant",     "correct": false},
                {"option": "angular velocity of coupler and output are both constant",      "correct": false},
                {"option": "None of these",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : None of these</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select All
            "q": "For parallelogram linkage (length of input and output are same, length of coupler and fixed link are same) ?",
            "a": [
                {"option": "Input velocity = Output velocity ",           "correct": false},
                {"option": "Velocity of fixed link is zero",                  "correct": false},
                {"option": "Angular velocity of coupler is zero",  "correct": false},
                {"option": "All given statements are correct",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : All given statements are correct</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following has angular acceleration zero always?",
            "a": [
                {"option": "All of these",           "correct": true},
                {"option": "Input link with constant angular acceleration",                  "correct": false},
                {"option": "Output link in parallelogram linkage with constant input angular velocity",  "correct": false},
                {"option": "Coupler link in parallelogram linkage",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : All of these </p>" // no comma here
        },
        { // Question 4
            "q": "What is the velocity of point P shown in the figure. Given that AB=CD=PC, AD=BC, velocity of B = 10cm/s <br><img src='../images/exp2Q.jpg'/> ",
            "a": [
                {"option": "20cm/s",    "correct": true},
                {"option": "10cm/s",     "correct": false},
                {"option": "5cm/s",      "correct": false},
              {"option": "None of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : 20cm/s </p>"  // no comma here
        },
        { // Question 5 
            "q": "In a mechanism with input link 30cm and coupler 40cm, what is the magnitude of velocity of Output link at an instant when the coupler forms a right angle with the input link and both input and coupler are rotating at an angular speed of 1rad/s?",
            "a": [
                {"option": "50cm/s ",    "correct": true},
                {"option": " 10cm/s",     "correct": false},
		 {"option": "70cm/s",  "correct": false},
                {"option": " 35cm/s",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : 50cm/s </p>"  // no comma here
        } // no comma here
    ]
};
