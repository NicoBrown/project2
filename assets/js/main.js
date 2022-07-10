$(document).ready(function () {
    var randomNumberArray = [];

});

function playGame() {
    
    //get number of items from local storage
    var difficulty = setDifficulty();
    // //console.log(localStorage);
    // getPeriodicElements(function (cb) {
    //     console.log(cb);
    // });

    //Iterate through grid and add number of div cards
    for (var i = 0; i < difficulty; i++) {
        var div = document.createElement("div");
        div.classList += "element";
        
        var atomicNumber = document.createElement("p1");
        atomicNumber.classList += "atomic-number";

        var h1 = document.createElement("h1");

        var AtomicName = document.createElement("p1");
        var AtomicNamesub = document.createElement("p1");
        AtomicName.classList += "atomic-name";
        AtomicNamesub.classList += "atomic-name";

        var elements = [atomicNumber, h1, AtomicName, AtomicNamesub];
        elements.forEach(element => {
            div.append(element);
        });
        $("#grid-div").append(div);  
    }
}

function resetGame() {

    localStorage.clear();

}

function setDifficulty(difficulty) {
    //collect grid and unhide
    var grid = $("#grid-div");
    grid.removeClass("hidden");

    //set local storage and set grid into correct number of columns
    if (difficulty == "easy" || difficulty == null) {
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

    for (var i = 0; i < number; i++){
        numberArray.push(Math.floor(Math.random() * number));
    }

    if (i == number) {
        return numberArray; 
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    
    window.addEventListener( 'onClick', function ( event ) {
        var modal = this.document.getElementById("modal");

        if (event.target.classList.includes("btn")) {
            switch (event.target) {
                case "easyButton": // Easy mode clicked
                    modal.className += "hidden";
                    setDifficulty("easy");
                    break;
    
                case "medButton": // Medium Mode clicked
                    modal.className += "hidden";
                    setDifficulty("medium");
                    break;
            
                case "hardButton": // Hard Mode clicked
                    modal.className += "hidden";
                    setDifficulty("hard");
                    break;
            }
        }

        else if (event.target.classList.includes("card")) {
            event.target.classList += "turnOver"
        }
    } );
    
    
    window.addEventListener( 'keydown', function ( event ) {
        switch (event.key) {
    
            case "Enter": // Shift
                event.preventDefault();
                
                //TODO: openmodal
                
                break;
    
            case "Escape": // Esc
                event.preventDefault();
                this.localStorage.clear();
                this.location.reload();
                break;
        }
    });

    window.addEventListener( 'keydown', function ( event ) {
        if (event.key == " ")
        {
            event.preventDefault();
            if (this.document.getElementById("welcome-div") != null) {
                this.document.getElementById("welcome-div").remove();
            }
            playGame();
        }
    } );
 });




