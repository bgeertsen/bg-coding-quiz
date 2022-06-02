var mainDiv = document.querySelector("main");
var startDiv = document.querySelector("#start-info");
var startBtn = document.querySelector("#start-btn");
var timerText = document.querySelector("#timer")
var timer = 75;
var isDone = false;

var savedScores = [];

var question1Div = document.createElement("div");
var questionPrompt = document.createElement("h2");
var questionAnswers = document.createElement("ol");
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");
var rightOrWrong = document.createElement("p")

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

var countdown = function() {
    if (timer > 0 && !isDone){
        timer--;
        timerText.innerText = "Time: " + timer;
    }
    if (timer === 0) {
        allDone();
    }
}

var question1 = function() {
    questionPrompt.innerText = "Question #1?";
    answer1.innerHTML = "<button class=answer-btn>1. Answer 1</button>"
    answer2.innerHTML = "<button class=answer-btn>1. Answer 2</button>"
    answer3.innerHTML = "<button class=answer-btn>1. Answer 3</button>"
    answer4.innerHTML = "<button class=answer-btn>1. Answer 4</button>"

    mainDiv.appendChild(question1Div);
    question1Div.append(questionPrompt, questionAnswers);
    questionAnswers.append(answer1, answer2, answer3, answer4);

    answer1.addEventListener("click", function(){
        rightOrWrong.innerText = "Correct!";
        question1Div.append(rightOrWrong);
        setTimeout(question2, 1000)
    });

    answer2.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });

    answer3.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });

    answer4.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });
}

var question2 = function() {
    rightOrWrong.remove();
    questionPrompt.innerText = "Question 2"
    answer1.innerHTML = "<button class=answer-btn>2. Answer 1</button>"
    answer2.innerHTML = "<button class=answer-btn>2. Answer 2</button>"
    answer3.innerHTML = "<button class=answer-btn>2. Answer 3</button>"
    answer4.innerHTML = "<button class=answer-btn>2. Answer 4</button>"

    answer1.addEventListener("click", function(){
        rightOrWrong.innerText = "Correct!";
        question1Div.append(rightOrWrong);
        setTimeout(question3, 1000)
    });

    answer2.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });

    answer3.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });

    answer4.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });
}

var question3 = function() {
    rightOrWrong.remove();
    questionPrompt.innerText = "Question 3"
    answer1.innerHTML = "<button class=answer-btn>3. Answer 1</button>"
    answer2.innerHTML = "<button class=answer-btn>3. Answer 2</button>"
    answer3.innerHTML = "<button class=answer-btn>3. Answer 3</button>"
    answer4.innerHTML = "<button class=answer-btn>3. Answer 4</button>"

    answer1.addEventListener("click", function(){
        rightOrWrong.innerText = "Correct!";
        question1Div.append(rightOrWrong);
        setTimeout(question4, 1000)
    });

    answer2.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });

    answer3.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });

    answer4.addEventListener("click", function(){
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });
}

var question4 = function() {
    rightOrWrong.remove();
    questionPrompt.innerText = "Question 4"
    answer1.innerHTML = "<button class=answer-btn>4. Answer 1</button>"
    answer2.innerHTML = "<button class=answer-btn>4. Answer 2</button>"
    answer3.innerHTML = "<button class=answer-btn>4. Answer 3</button>"
    answer4.innerHTML = "<button class=answer-btn>4. Answer 4</button>"

    answer1.addEventListener("click", function(){
        isDone = true;
        rightOrWrong.innerText = "Correct!";
        question1Div.append(rightOrWrong);
        setTimeout(allDone, 1000)
    });

    answer2.addEventListener("click", function(){
        isDone = true;
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });

    answer3.addEventListener("click", function(){
        isDone = true;
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });

    answer4.addEventListener("click", function(){
        isDone = true;
        rightOrWrong.innerText = "Sorry that's incorrect!";
        timer = timer - 10;
        question1Div.append(rightOrWrong);
    });
}

var allDone = function() {
    questionAnswers.remove();
    questionPrompt.innerText = "ALL DONE!";

    var currentScore = document.createElement("h3");
    currentScore.innerText = "Your final score is " + timer + ".";

    var scoreSaver = document.createElement("p");
    scoreSaver.innerHTML = "Enter your initials: <textarea id='scoreInitials' maxlength='10'></textarea><input id='submit' type='submit'>"

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
        location.href = "leaderboard.html";
    })

    clearInterval();
}

