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
        for (var i = 0; i < randomNumberArray.length/2; i++) {

            var div = document.createElement("div");
            div.classList += "element faceDown";
            div.addEventListener("click", checkCard);
            div.id = "div-" + i;

            var atomicNumber = document.createElement("p1");
            atomicNumber.classList += "atomic-number";
            atomicNumber.textContent = element[i].atomicNumber;

            var h1 = document.createElement("h1");
            h1.textContent = element[i].symbol;
            h1.classList += "atomic-symbol";

            var atomicName = document.createElement("p1");
            var atomicNamesub = document.createElement("p1");
            atomicName.classList += "atomic-name";
            atomicName.textContent = element[i].name;
            atomicNamesub.classList += "atomic-name";
            
            var dotIndex = element[i].atomicMass.indexOf('.', 4);
            atomicNamesub.textContent = element[i].atomicMass.toString().substring(0,dotIndex+2);

            var elements = [atomicNumber, h1, atomicName, atomicNamesub];
            elements.forEach(element => {
                element.classList += " hidden";
                div.append(element);
            });
            var divClone = div.cloneNode(true);
            divClone.id = "div-" + i + "-copy";

            $("#grid-div").append(div);
            $("#grid-div").append(divClone);
        };

        //shuffle grid deck
        var gridDiv = document.getElementById('grid-div');
        for (var i = gridDiv.children.length; i >= 0; i--) {
            gridDiv.appendChild(gridDiv.children[Math.random() * i | 0]);
        }
    }));
}

function getData(data)
{
    return data;
}

function resetGame() {

    localStorage.clear();

}

function checkCard() {
    //set current target to currentCard
    localStorage.setItem("currentCardValue", this.firstChild.textContent);
    localStorage.setItem("currentCardId", this.id);
    this.classList.remove("faceDown");
    this.classList += " turnOver faceUp";

    //get children of element and make them visible
    let childArray = Array.from(this.children);
    childArray.forEach(child => {
        child.classList.remove("hidden");
    });

    if (localStorage.getItem("previousCardId") == null) {
        return;
    }

    //if the current card equals the previous card aand the Is's are not the same add faceup
    else if (this.firstChild.textContent == localStorage.getItem("previousCardValue") &&
        this.id != localStorage.getItem("previousCardId"))
    {
        this.classList += " faceUp";
    }
    else
    {
        setTimeout("", 1000);
        localStorage.setItem("previousCardValue", this.firstChild.textContent);
        localStorage.setItem("previousCardId", this.id);

        var unmatchedPair = [this, $("#"+localStorage.getItem("previousCardId"))] ;

        unmatchedPair.forEach(element => {
            element.classList.remove("faceUp");
            element.classList.remove("turnOver");
            element.classList.add("faceDown");
            let elementChildArray = Array.from(this.children);
            elementChildArray.forEach(child => {
                child.classList.add("hidden");
            });

        });

        // this.children.classList.remove(" hidden");
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
    var difficultyNum = localStorage.getItem("difficulty");
    var numberArray = [];
    do {
        var randNum = Math.floor(Math.random() * 119);
        numberArray.push(randNum);   
    }
    while (numberArray.length < difficultyNum);

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
                    modal.className += " hidden";
                    setDifficulty("easy");
                    modal.classList.remove("show");
                    break;
    
                case "mediumButton": // Medium Mode clicked
                    modal.className += " hidden";
                    setDifficulty("medium");
                    break;
            
                case "hardButton": // Hard Mode clicked
                    modal.className += " hidden";
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
                modal.classList += " show";
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
            this.localStorage.clear();
            if (this.document.getElementById("welcome-div") != null) {
                this.document.getElementById("welcome-div").remove();
            }
            playGame();
        }
    } );
 });




