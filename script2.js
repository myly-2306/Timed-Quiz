
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

  var currentScore = 0;
  var currentQuestionIndex;
  var highScores = [];
  var intervalId;
  var timeSec = document.getElementById("time-sec");
  var timeLeft = 100;
  var showCorrectAnswer = document.querySelector(".correct-answer");
  var welcomeBox = document.querySelector('.welcome-box');
  var quizBox = document.querySelector('.quiz-box');
  var userScore = document.querySelector('.user-score');
  var resultBox = document.querySelector('.result-box');
  var userInitials = document.querySelector('#initials');
  var submitBtn = document.querySelector('.submit-btn');
  var initAndScore = document.querySelector('.init-score');
  var scoreBox = document.querySelector('.score-box');

  
  var startBtn = document.querySelector("#start-btn");
      startBtn.addEventListener("click", function(e) {
        startQuiz();
      });
    function startTimer () {
    intervalId = setInterval(function() {
      if (timeLeft <= 0) {
        // time is up, quiz ends, prompt user for initials
        // Stop the timer
        clearInterval(intervalId);
        // Define function for prompting for initials
        sendToInitials();
      } else {
        timeLeft--;
      }
      timeSec.innerText = timeLeft + " seconds left!";
    }, 1000);
  };

 
  function startQuiz() {
    welcomeBox.classList.add('hidden');
    // TODO: Read high scores from localStorage and store it in
    highScores = localStorage.getItem("userScore");
    // the highScores[] array
    // Reset question index
    currentQuestionIndex = 0;
    // Reset timer
    timeLeft = 100;
    //  - make sure current score is 0
    currentScore = 0;
    userScore.innerText = currentScore;
    // - start the timer
    startTimer();
    //  - show first question
    showNextQuestion();
    quizBox.classList.remove('hidden');
    // 
    
  }

  

  function showNextQuestion() {
    var currentQuestion;  
    var questionEl = document.querySelector('.question');
    var answerA_El = document.querySelector('.answer-a');
    var answerB_El = document.querySelector('.answer-b');
    var answerC_El = document.querySelector('.answer-c');
    var answerD_El = document.querySelector('.answer-d');
    
    // if the value of currentQuestionIndex is equal to the length of the "questions" array, then quiz is over.
    console.log(currentQuestionIndex, questions.length);
    if (currentQuestionIndex === questions.length) {
      // Stop the timer
      clearInterval(intervalId);
      // Prompt for initials
      sendToInitials();
    } else {
      // get the next question object based on currentQuestionIndex value
      currentQuestion = questions[currentQuestionIndex];
      // Retrieve the actual question
      questionEl.innerText = currentQuestion.question; // What is 2+2?
      // Iterate through the answers array and display each answer
    //   for (var i = 0; i < currentQuestion.answers.length; i++) {
    //   }
      answerA_El.innerText = currentQuestion.answers[0];
      answerB_El.innerText = currentQuestion.answers[1];  
      answerC_El.innerText = currentQuestion.answers[2];
      answerD_El.innerText = currentQuestion.answers[3];
      // Add a click event listener to each answer
      answerA_El.addEventListener('click', function(event) {
        var value = event.target.innerText;
        console.log('value: ', value);
        console.log('currentQuestion.correctAnswer: ', currentQuestion.correctAnswer);
        if (value === currentQuestion.correctAnswer) {
          // add 2 points to currentScore
          currentScore = currentScore + 2;
          userScore.innerText = currentScore;
          // or currentScore += 2;
          showCorrectAnswer.innerText = "Correct Answer: " + currentQuestion.correctAnswer;
        } else {
            // show the correct answer
          showCorrectAnswer.innerText = "Correct Answer: " + currentQuestion.correctAnswer;
          // subtract 5 seconds from timeLeft
          timeLeft = timeLeft - 5;
          
        };
        // call showNextQuestion();
        showNextQuestion();
      }); 
      answerB_El.addEventListener('click', function(event) {
        var value = event.target.innerText;
        console.log('value: ', value);
        console.log('currentQuestion.correctAnswer: ', currentQuestion.correctAnswer);
        if (value === currentQuestion.correctAnswer) {
            // add 2 points to currentScore
            currentScore = currentScore + 2;
            userScore.innerText = currentScore;
            // or currentScore += 2;
            showCorrectAnswer.innerText = "Correct Answer: " + currentQuestion.correctAnswer;
          } else {
            // subtract 5 seconds from timeLeft
            timeLeft = timeLeft - 5;
            // show the correct answer
            showCorrectAnswer.innerText = "Correct Answer: " + currentQuestion.correctAnswer;;
          }
          // call showNextQuestion();
          showNextQuestion();
      }); 
      answerC_El.addEventListener('click', function(event) {
        var value = event.target.innerText;
        console.log('value: ', value);
        console.log('currentQuestion.correctAnswer: ', currentQuestion.correctAnswer);
        if (value === currentQuestion.correctAnswer) {
            // add 2 points to currentScore
            currentScore = currentScore + 2;
            userScore.innerText = currentScore;
            // or currentScore += 2;
            showCorrectAnswer.innerText = "Correct Answer: " + currentQuestion.correctAnswer;
          } else {
            // subtract 5 seconds from timeLeft
            timeLeft = timeLeft - 5;
            // show the correct answer
            showCorrectAnswer.innerText = "Correct Answer: " + currentQuestion.correctAnswer;
          }
          // call showNextQuestion();
          showNextQuestion();
      });
      answerD_El.addEventListener('click', function(event) {
        var value = event.target.innerText;
        console.log('value: ', value);
        console.log('currentQuestion.correctAnswer: ', currentQuestion.correctAnswer);
        if (value === currentQuestion.correctAnswer) {
            // add 2 points to currentScore
            currentScore = currentScore + 2;
            userScore.innerText = currentScore;
            // or currentScore += 2;
            showCorrectAnswer.innerText = "Correct Answer: " + currentQuestion.correctAnswer;
          } else {
            // subtract 5 seconds from timeLeft
            timeLeft = timeLeft - 5;
            // show the correct answer
            showCorrectAnswer.innerText = "Correct Answer: " + currentQuestion.correctAnswer;
          }
          // call showNextQuestion();
          showNextQuestion();
      });
      // Update currentQuestionIndex by adding 1 to it
      currentQuestionIndex++;
    }
  }


function sendToInitials() {
    // ask user to input iintiials
    var initials = '';
    resultBox.classList.remove('hidden');
    // TODO: Retrieve currentScore
    var newScore = {
      userInitials: initials.value,
      userScore: currentScore.value,
    };
    // Add initials and currentScore to highScores array
    highScores.push(newScore);
    // TODO: Save highScores to localStorage
    localStorage.setItem("newScore", JSON.stringify(newScore));
    // click on submit button to get high Scores
    submitBtn.addEventListener("click", function(event) {
      event.preventDefault();
    
      var highScores = JSON.parse(localStorage.getItem("newScore"));
      initAndScore.innerText = highScores;
      scoreBox.classList.remove('hidden');
    
    });
      
  }
  

















