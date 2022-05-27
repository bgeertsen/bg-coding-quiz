var mainDiv = document.querySelector("main");

var startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", function(){

        quiz();

        // leaderBoard();
    
});

var question1 = function() {
    var question1Div = document.createElement("div");
    var questionPrompt = document.createElement("h2");
    var q1Answers = document.createElement("ol");
    var answer1 = document.createElement("li");
    var answer2 = document.createElement("li");
    var answer3 = document.createElement("li");
    var answer4 = document.createElement("li");

    questionPrompt.innerText = "How do you do blah blah blah?";
    answer1.innerText = "A"
    answer2.innerText = "B"
    answer3.innerText = "C"
    answer4.innerText = "D"

    mainDiv.appendChild(question1Div);
    question1Div.append(questionPrompt, q1Answers, answer1, answer2, answer3, answer4);


}

var quiz = function()  {
    var startDiv = document.querySelector("#start-info");
    startDiv.remove()
    question1();
 
}