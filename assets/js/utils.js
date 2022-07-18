/* jshint -W119, -W104 */
var randNum = Math.floor(Math.random() * 119);

function getPeriodicElements(cb) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://periodic-table-elements-info.herokuapp.com/elements");
    xhr.send();
    
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
            getData(JSON.parse(this.responseText));
        }
    };
}

function generateRandomNumbers() {
    var difficultyNum = localStorage.getItem("difficulty");
    var numberArray = [];
    do {
        numberArray.push(randNum);
    }
    while (numberArray.length < difficultyNum);

    //shuffling aligrithm taken from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
    const shuffledArray = numberArray.sort((a, b) => 0.5 - Math.random());
    return shuffledArray; 
}

function setDifficulty(difficulty){
    //set local storage and set grid into correct number of columns
    if (difficulty == "easy" || difficulty == undefined) {
        localStorage.setItem("difficulty", 12);
        $("#grid-div").css("grid-template-columns","repeat(3, 1fr)");
    }

    else if (difficulty == "medium") {
        localStorage.setItem("difficulty", 16);
        $("#grid-div").css("grid-template-columns","repeat(4, 1fr)");
    }

    else if (difficulty == "hard") {
        localStorage.setItem("difficulty", 20);
        $("#grid-div").css("grid-template-columns", "repeat(5, 1fr)");
    }
    playGame();
}

function shuffleGridDeck() {
    var gridDiv = document.getElementById("grid-div");
    for (let i = gridDiv.children.length; i >= 0; i--) {
        gridDiv.appendChild(gridDiv.children[Math.random() * i | 0]);
    }
}