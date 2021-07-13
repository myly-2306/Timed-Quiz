// Quiz app - javascript psuedo code
// Known things
// - Welcome message
// - there's a start button
// - there's a timer (set to 100 seconds)
// - there's current score display (default: 0)
// - there's a link to view high scores
// How many questions - 5
// how many possible answers - 4
var questions = [
    {
      question: 'How can you get the total number of arguments passed to a function?',
      answers: ["Using args.length property.", "Using arguments.length property.", "Both of the above.", "None of the above."],
      correctAnswer: "Using arguments.length property."
    },
    {
      question: 'Which built-in method combines the text of two strings and returns a new string?',
      answers: ["append()", "concat()", "attach()", "None of the above."],
      correctAnswer: "concat()"
    },
    {
        question: 'Which of the following function of Boolean object returns the primitive value of the Bolean object?',
        answers: ["valueOf()", "toSource()", "toString()", "None of the above"],
        correctAnswer: "valueOf()"
    },
    {
        question: 'What of the following function of String object extracts a section of a string and retuirns a new string?',
        answers: ["slice()", "split()", "replace()", "search()"],
        correctAnswer: "slice()"
    },
    {
        question: 'Which of the following of String object return the calling string value converted to upper case?',
        answers: ["toLocalUpperCase()", "toString()", "toUpperCase()", "substring()"],
        correctAnswer: "toUpperCase()"
    },
]


  // If the user answers the question correctly, user gets 2 points
  // If the user answers the question incorrectly, deduct 5 seconds from the timer
  // After all the questions have been answered, prompt the user for initials to save score
  // If time runs out, prompt the user for initials to save score
  // If user answers a question inccorectly, you show the correct answer on the bottom and notify user that he/she picked the wrong answer.
  // Start Button
  // When user clicks on Start button, 
  //  - start the timer
//   setInterval(startTimer, 1000);
  
  var currentScore = 0;
  var currentQuestionIndex = 0;
  var highScores = [];
  var intervalId;
  var timeSec = document.getElementById("time-sec")
//   var startBtn = document.getElementById("startbtn");
  // Pure Funnctions - only perform things that the function is supposed
  // to do, nothing else

function startTimer () {
    var startBtn = document.getElementById("start-btn").addEventListener("click", function() {
        e.preventDefault();
        var timeLeft = 100;
        setInterval(function() {
            timeLeft--;
            timeSec.innerHTML = timeLeft + "seconds left!";
        })
        if (timeLeft <= 0) {
            // time is up, quiz ends, prompt user for initials
            // Stop the timer
            clearInterval(startBtn);
            // Define function for prompting for initials
            sendToInitials();
            } else { // if not, we subtract 1 second
            timeLeft--; // timeLeft = timeLeft - 1
            }
    },1000);
};







  // start the timer countdown
//   startBtn.addEventListener("click", function(event) {
//       event.preventDefault(); 

//         // function startTimer() {
         
//         timeLeft--;
//         timeSec.textContent = timeLeft + "seconds!";
//     // Goal: decrease the amount of time left
//     // is timer equal to 0 (time's up)
//         if (timeLeft <= 0) {
//         // time is up, quiz ends, prompt user for initials
//         // Stop the timer
//         clearInterval(startBtn);
//         // Define function for prompting for initials
//         sendToInitials();
//         } else { // if not, we subtract 1 second
//         timeLeft--; // timeLeft = timeLeft - 1
//         }
//     })
//   ;



  // READ localStorage.getItem(<KEY>)
  // SAVE localStorage.setItem(<KEY>, <VALUE>)
//   function startQuiz() {
//     // TODO: Read high scores from localStorage and store it in
//     // the highScores[] array
//     // Reset question index
//     currentQuestionIndex = 0;
//     // Reset timer
//     timeLeft = 100;
//     // - start the timer
//     intervalId = setInterval(startTimer, 1000);
//     //  - make sure current score is 0
//     currentScore = 0;
//     //  - show first question
//     showNextQuestion();
//   }

  var showCorrectAnswer = document.querySelector(".correct-answer");
  function displayCorrectAnswer() {
      showCorrectAnswer.style.visibility = "visible";
  }

  function showNextQuestion() {
    var currentQuestion;  
    var questionEl = document.querySelector('.question');
    var answerA_El = document.querySelector('.answer-a');
    var answerB_El = document.querySelector('.answer-b');
    var answerC_El = document.querySelector('.answer-c');
    var answerD_El = document.querySelector('.answer-d');
    
    // if the value of currentQuestionIndex is equal to the length of the "questions" array, then quiz is over.
    if (currentQuestionIndex === questions.length) {
      // Stop the timer
      clearInterval(intervalId);
      // Prompt for initials
      sendToInitials();
    } else {
      // get the next question object based on currentQuestionIndex value
      currentQuestion = questions[currentQuestionIndex];
      // <div class="question-container">
      //   <p class="question">What is 2+2?</p>
      //   <ul class="answers">
      //     <li class="answer-a">1</li>
      //     <li class="answer-b">15</li>
      //     <li class="answer-c">10</li>
      //     <li class="answer-d">4</li>
      //   </ul>
      // </div>
      // Retrieve the actual question
      questionEl.innerText = currentQuestion.question; // What is 2+2?
      // currentQuestion.answers
      // currentQuestion.correctAnswer
      // Iterate through the answers array and display each answer
    //   for (var i = 0; i < currentQuestion.answers.length; i++) {
    //   }
      answerA_El.innerText = currentQuestion.answers[0];
      answerB_El.innerText = currentQuestion.answers[1];  
      answerC_El.innerText = currentQuestion.answers[2];
      answerD_El.innerText = currentQuestion.answers[3];
      // Add a click event listener to each answer
      answerA_El.addEventListener('click', function(event) {
        var value = event.target.innerText
        if (value === currentQuestion.correctAnswer) {
          // add 2 points to currentScore
          currentScore = currentScore + 2;
          // or currentScore += 2;
        } else {
          // subtract 5 seconds from timeLeft
          timeLeft = timeLeft - 5;
          // show the correct answer
          displayCorrectAnswer();
        }
        // call showNextQuestion();
        showNextQuestion();
      }); 
      answerB_El.addEventListener('click', function(event) {
        var value = event.target.innerText
        if (value === currentQuestion.correctAnswer) {
          // add 2 points to currentScore
          currentScore = currentScore + 2;
        } else {
          // subtract 5 seconds from timeLeft
          timeLeft = timeLeft - 5;
          // show the correct answer
          displayCorrectAnswer();
        }
        //  call showNextQuestion();
        showNextQuestion();
      }); 
      answerC_El.addEventListener('click', function(event) {
        var value = event.target.innerText
        if (value === currentQuestion.correctAnswer) {
          // add 2 points to currentScore
          currentScore = currentScore + 2;
        } else {
          // subtract 5 seconds from timeLeft
          timeLeft = timeLeft - 5;
          // show the correct answer
          displayCorrectAnswer();
        }
          // call showNextQuestion();
        showNextQuestion();
      });
      answerD_El.addEventListener('click', function(event) {
        var value = event.target.innerText
        if (value === currentQuestion.correctAnswer) {
          // add 2 points to currentScore
          currentScore = currentScore + 2;
        } else {
          // subtract 5 seconds from timeLeft
          timeLeft = timeLeft - 5;
          // show the correct answer
          displayCorrectAnswer();
        }
          // call showNextQuestion();
        showNextQuestion();
      });
      // Update currentQuestionIndex by adding 1 to it
      currentQuestionIndex++;
    }
  }
  function sendToInitials() {
    // TODO: ask user to input iintiials
    var initials = '';
    // TODO: Retrieve currentScore
    var newScore = {
      userInitials: initials,
      userScore: currentScore
    }
    // Add initials and currentScore to highScores array
    highScores.push(newScore);
    // TODO: Save highScores to localStorage
  }
  






















