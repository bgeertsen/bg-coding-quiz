let scoreList = document.querySelector("#scoreList");
let score = document.createElement("li");

let savedScores = JSON.parse(localStorage.getItem("savedScores"))

console.log(savedScores);

let buildLeaderboard = function() {
    for (let i = 0; i < savedScores.length; i++) {
        let scoreLiEl = document.createElement("li");
        scoreLiEl.textContent = savedScores[i].initials + " - " + savedScores[i].score;
        scoreList.append(scoreLiEl)
    }
}

buildLeaderboard();