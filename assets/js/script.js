// assign important elements to variables

var mainDiv = document.querySelector("main");
var startDiv = document.querySelector("#start-info");
var startBtn = document.querySelector("#start-btn");
var timerText = document.querySelector("#timer")
var timer = 75;
var isDone = false;
var answer = false;

// empty array to save scores too
var savedScores = [];

// creates the elements that make up the quizz
var question1Div = document.createElement("div");
var questionPrompt = document.createElement("h2");
var questionAnswers = document.createElement("ol");
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");
var rightOrWrong = document.createElement("p")

// function that displays whether the question was answered right or wrong. subtracts time if the answer was incorrect
let rightOrWrongFunction = function() {
    if (answer) {
        rightOrWrong.innerText = "Correct!"
        question1Div.append(rightOrWrong);

    } else if (!answer) {
        rightOrWrong.innerText = "Sorry that's incorrect!"
        question1Div.append(rightOrWrong);
        timer = timer - 10;
    }
}

question1Div.setAttribute("id", "questions-container")
questionAnswers.setAttribute("id", "answers");

timerText.innerText = "Time: " + timer;
startBtn.addEventListener("click", function(){
        quiz();
});



var quiz = function()  {
    
    startDiv.remove()
    setInterval(countdown, 1000)
    question1();
}

// basic timer function
var countdown = function() {
    if (timer > 0 && !isDone){
        timer--;
        timerText.innerText = "Time: " + timer;
    }
    if (timer === 0) {
        timesOut();
    }
}

// functions to add to event listneres. Had to use named functions for each question so that they could be removed
// had to remove each listner at the start of each question otherwise the time penalty could stay attached to a button even on a correct answer ! ! !
let question1RightAnswer = function() {
    answer = true;
    rightOrWrongFunction();
    setTimeout(question2, 1000)
}

let question1WrongAnswer = function() {
    answer = false;
    rightOrWrongFunction();
}


// each question function changes the text of the prompt and each possible answer
// also removes and attaches unique listeners to prevent scoring bug
var question1 = function() {
    questionPrompt.innerText = "What is the main difference between let and const?";
    answer1.innerHTML = "<button class=answer-btn>Let can be reassigned, const cannot be reassigned</button>"
    answer2.innerHTML = "<button class=answer-btn>Let cannot be reassigned, const can be reassigned</button>"
    answer3.innerHTML = "<button class=answer-btn>There is no difference, both can be reassigned</button>"
    answer4.innerHTML = "<button class=answer-btn>There is no difference, neither can be reassigned</button>"

    mainDiv.appendChild(question1Div);
    question1Div.append(questionPrompt, questionAnswers);
    questionAnswers.append(answer1, answer2, answer3, answer4);

    answer1.addEventListener("click", question1RightAnswer);

    answer2.addEventListener("click", question1WrongAnswer);

    answer3.addEventListener("click", question1WrongAnswer);

    answer4.addEventListener("click", question1WrongAnswer);
}

let question2RightAnswer = function() {
    answer = true;
    rightOrWrongFunction();
    setTimeout(question3, 1000)
}

let question2WrongAnswer = function() {
    answer = false;
    rightOrWrongFunction();
}

var question2 = function() {
    rightOrWrong.remove();
    answer1.removeEventListener("click", question1RightAnswer);
    answer2.removeEventListener("click", question1WrongAnswer);
    answer3.removeEventListener("click", question1WrongAnswer);
    answer4.removeEventListener("click", question1WrongAnswer);
    questionPrompt.innerText = "For strict equality comparisons, we should use:"
    answer1.innerHTML = "<button class=answer-btn>=</button>"
    answer2.innerHTML = "<button class=answer-btn>==</button>"
    answer3.innerHTML = "<button class=answer-btn>===</button>"
    answer4.innerHTML = "<button class=answer-btn>====</button>"

    answer1.addEventListener("click", question2WrongAnswer);

    answer2.addEventListener("click", question2WrongAnswer);

    answer3.addEventListener("click", question2RightAnswer);

    answer4.addEventListener("click", question2WrongAnswer);
}

let question3RightAnswer = function() {
    answer = true;
    rightOrWrongFunction();
    setTimeout(question4, 1000)
}

let question3WrongAnswer = function() {
    answer = false;
    rightOrWrongFunction();
}

var question3 = function() {
    rightOrWrong.remove();
    answer1.removeEventListener("click", question2WrongAnswer);
    answer2.removeEventListener("click", question2WrongAnswer);
    answer3.removeEventListener("click", question2RightAnswer);
    answer4.removeEventListener("click", question2WrongAnswer);
    questionPrompt.innerText = "Which is true about .innerText?"
    answer1.innerHTML = "<button class=answer-btn>A. .iinnerText changes the html inside the opening element tag</button>"
    answer2.innerHTML = "<button class=answer-btn>B. .innerText changes the text inbetween the opening and closing element tags</button>"
    answer3.innerHTML = "<button class=answer-btn>C. Both A and B</button>"
    answer4.innerHTML = "<button class=answer-btn>D. None of the above</button>"

    answer1.addEventListener("click", question3WrongAnswer);

    answer2.addEventListener("click", question3RightAnswer);

    answer3.addEventListener("click", question3WrongAnswer);

    answer4.addEventListener("click", question3WrongAnswer);
}

let question4RightAnswer = function() {
    answer = true;
    isDone = true;
    rightOrWrongFunction();
    setTimeout(allDone, 1000)
}

let question4WrongAnswer = function() {
    answer = false;
    rightOrWrongFunction();
}


var question4 = function() {
    rightOrWrong.remove();
    answer1.removeEventListener("click", question3WrongAnswer);
    answer2.removeEventListener("click", question3RightAnswer);
    answer3.removeEventListener("click", question3WrongAnswer);
    answer4.removeEventListener("click", question3WrongAnswer);
    questionPrompt.innerText = "Which is true about .innerHTML?"
    answer1.innerHTML = "<button class=answer-btn>You can use innerHTML to change both the text inside the element tags and between the element tags</button>"
    answer2.innerHTML = "<button class=answer-btn>innerHTML is the same as innerText</button>"
    answer3.innerHTML = "<button class=answer-btn>innerHTML is not real</button>"
    answer4.innerHTML = "<button class=answer-btn>none of the above</button>"

    answer1.addEventListener("click", question4RightAnswer);

    answer2.addEventListener("click", question4WrongAnswer);

    answer3.addEventListener("click", question4WrongAnswer);

    answer4.addEventListener("click", question4WrongAnswer);
}

// function that takes us to the ending page where we can save our score
var allDone = function() {
    questionAnswers.remove();
    questionPrompt.innerText = "ALL DONE!";

    var currentScore = document.createElement("h3");
    currentScore.innerText = "Your final score is " + timer + ".";

    var scoreSaver = document.createElement("p");
    scoreSaver.innerHTML = "Enter your initials: <input type='text' id='scoreInitials' maxlength='10'></input><input id='submit' type='submit'>"

    question1Div.append(currentScore, scoreSaver);

    var saveBtn = document.querySelector("#submit");
    var scoreInitials = document.querySelector("#scoreInitials");
    saveBtn.addEventListener("click", function() {
        var updatedScores = JSON.parse(localStorage.getItem("savedScores"));
        if(updatedScores == null){
            updatedScores = [];
        }
        updatedScores.push( {
                initials: scoreInitials.value,
                score: timer
            })
        window.localStorage.setItem("savedScores", JSON.stringify(updatedScores))
        location.href = "./assets/leaderboard.html";
    })

    clearInterval();
}

// landing page if the timer hits zero
let timesOut = function() {
    questionAnswers.remove();
    questionPrompt.innerText = "Sorry, the time ran out! Please try again."
}

