$(document).ready(function () {
    var randomNumberArray = [];
    var data;

    resetGame();
});

$(document)

function playGame() {
    
    //get number of items from local storage
    var difficulty = setDifficulty();
    var randomNumberArray = generateRandomNumbers();

    getPeriodicElements(getData(element => {

        //Iterate through grid and add number of div cards
        randomNumberArray.forEach(number => {

            var div = document.createElement("div");
            div.classList += "element";
            div.addEventListener("click", checkCard);
            
            var atomicNumber = document.createElement("p1");
            atomicNumber.classList += "atomic-number";
            atomicNumber.textContent = element[number].atomicNumber;

            var h1 = document.createElement("h1");
            h1.textContent = element[number].symbol;
            h1.classList += "atomic-symbol";

            var atomicName = document.createElement("p1");
            var atomicNamesub = document.createElement("p1");
            atomicName.classList += "atomic-name";
            atomicName.textContent = element[number].name;
            atomicNamesub.classList += "atomic-name";
            
            var dotIndex = element[number].atomicMass.indexOf('.', 4);
            atomicNamesub.textContent = element[number].atomicMass.toString().substring(0,dotIndex+2);

            var elements = [atomicNumber, h1, atomicName, atomicNamesub];
            elements.forEach(element => {
                div.append(element);
            });
            $("#grid-div").append(div);
        
        });
    }));
}

function getData(data)
{
    return data;
}

function resetGame() {

    localStorage.clear();

}

function checkCard(event) {

    if (localStorage.getItem("currentCard") == null)
    {
        localStorage.setItem("currentCard", event.currentTarget.firstChild.textContent);
    }
    
    if (event.currentTarget.firstChild.textContent == localStorage.getItem("currentCard"))
    {
        event.currentTarget.classList += "show";
    }

    else {
        event.currentTarget.classList += "hide";
    }


}

function setDifficulty(difficulty) {
    //collect grid and unhide
    var grid = $("#grid-div");
    grid.removeClass("hidden");
    

    //set local storage and set grid into correct number of columns
    if (difficulty == "easy" || difficulty == undefined) {
        localStorage.setItem("difficulty", 12);
    }

    else if (difficulty == "medium") {
        localStorage.setItem("difficulty", 16);
        grid.css("grid-template-columns", "repeat(4, 1fr)");
    }

    else if (difficulty == "hard") {
        localStorage.setItem("difficulty", 20);
        grid.css("grid-template-columns", "repeat(5, 1fr)");
    }
}

function generateRandomNumbers() {
    var number = localStorage.getItem("difficulty");
    var numberArray = [];
    do {
        var randNum = Math.floor(Math.random() * 119);
        numberArray.push(randNum);
        numberArray.push(randNum);    
    }
    while (numberArray.length < number);

    //shuffling aligrithm taken from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
    const shuffledArray = numberArray.sort((a, b) => 0.5 - Math.random());
    return shuffledArray; 


}

document.addEventListener("DOMContentLoaded", function (event) {
    
    window.addEventListener('click', function (event) {
        var modal = this.document.getElementById("exampleModalCenter");

        var target = event.target;

        if (target.classList.contains("btn")) {
            console.log(target);
            switch (event.target) {
                case "easyButton": // Easy mode clicked
                    modal.className += "hidden";
                    setDifficulty("easy");
                    modal.classList.remove("show");
                    break;
    
                case "mediumButton": // Medium Mode clicked
                    modal.className += "hidden";
                    setDifficulty("medium");
                    break;
            
                case "hardButton": // Hard Mode clicked
                    modal.className += "hidden";
                    setDifficulty("hard");
                    break;
            }
        }
    });
    
    
    window.addEventListener( 'keydown', function ( event ) {
        switch (event.key) {
    
            case "Enter": // Shift
                event.preventDefault();
                var modal = this.document.getElementById("exampleModalCenter");
                modal.ariaHidden = false;
                modal.classList += "show";
                break;
    
            case "Escape": // Esc
                event.preventDefault();
                this.localStorage.clear();
                this.location.reload();
                break;
        }
    });

    window.addEventListener( 'keydown', function ( event ) {
        if (event.key == " " && this.localStorage.getItem("difficulty") == null)
        {
            event.repeat = 1;
            event.preventDefault();
            if (this.document.getElementById("welcome-div") != null) {
                this.document.getElementById("welcome-div").remove();
            }
            playGame();
        }
    } );
 });




