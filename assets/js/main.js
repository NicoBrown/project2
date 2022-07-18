/* jshint -W119, -W104 */
var randomNumberArray = [];
var data;
var faceUpCards = [];
faceUpCards.length = 2;
score = 0;

function playGame() {
    randomNumberArray = generateRandomNumbers();

    getPeriodicElements(getData((element) => {
        var difficultysetting = localStorage.getItem("difficulty");
        var difficulty = (difficultysetting == null ? 12 : difficultysetting);

        //Iterate through grid and add number of div cards
        for (let i = 0; i < difficulty/ 2; i++) {
            var index = randomNumberArray[i];

            var div = document.createElement("div");
            div.classList.add("faceDown");
            div.classList.add("card");
            div.addEventListener("click", checkCard);
            div.dataset.type = element[index].atomicNumber;

            var atomicNumber = document.createElement("p1");
            atomicNumber.classList.add("atomic-number");
            atomicNumber.textContent = element[index].atomicNumber;

            var h1 = document.createElement("h1");
            h1.textContent = element[index].symbol;
            h1.classList.add("atomic-symbol");

            var atomicName = document.createElement("p1");
            var atomicNamesub = document.createElement("p1");
            atomicName.classList.add("atomic-name");
            atomicName.textContent = element[index].name;
            atomicNamesub.classList.add("atomic-name");

            var dotIndex = element[index].atomicMass.indexOf(".", 4);
            atomicNamesub.textContent = element[index].atomicMass
                .toString()
                .substring(0, dotIndex + 2);

            var elements = [atomicNumber, h1, atomicName, atomicNamesub];
            elements.forEach((element) => {
                element.classList.add("hidden");
                div.append(element);
            });

            // div cloned after html is added from api data
            var divClone = div.cloneNode(true);
            divClone.addEventListener("click", checkCard);

            $("#grid-div").append(div);
            $("#grid-div").append(divClone);
        }
        //shuffle grid deck
        shuffleGridDeck();
    })
    );
}

function getData(data){
    return data;
}

function checkCard() {
    cardClick(this);

    /*
    length has to be three because I have some prototype
    functions that are showing up as enumerable
    */
    if (faceUpCards.length > 3)
    {
        //if the current card type equals the previous card type add match
        if (this.dataset.type == faceUpCards[1].dataset.type) {
            for (let i = 2; i > 0; i--) {
                var element = faceUpCards.shift();
                element.classList.remove("faceUp");
                element.classList.add("match");
            }
            score += 1;
        }
        else {
            disableCards(true);

            setTimeout(function () {
                for (var i = 2; i > 0; i--) {
                    let element = faceUpCards.shift();
                    element.classList.remove("faceUp");
                    element.classList.add("faceDown");
                    let div = Array.from(element.children);
                    div.forEach((element) => {
                        element.classList.add("hidden");
                    });
                }
                disableCards(false);
            }, 1000);
        }
    }
    if (score == (localStorage.getItem("difficulty")/2)) {
        document.getElementById("gameDiv").remove();
        document.getElementById("modal").classList.remove("hidden");
        var elements = document.getElementsByClassName("footer-text");
        elements[0].remove();
    }
}

function disableCards(toggle) {
    var cardElements = document.getElementsByClassName("card");
    var elements = Array.from(cardElements);
    if (toggle) {
            elements.forEach((element) => {
                element.classList.add("event-disabled");
            });
    }
    else {
        elements.forEach((element) => {
            element.classList.remove("event-disabled");
        });
    }
}

function cardClick(element)
{
    element.classList.remove("faceDown");
    element.classList.add("faceUp","event-disabled");

    //get children of element and make them visible
    let childArray = Array.from(element.children);
    childArray.forEach((child) => {
        child.classList.remove("hidden");
    });
    faceUpCards.unshift(element);
}

document.addEventListener("DOMContentLoaded", function (event) {

    window.addEventListener("click", function (event) {
        var welcomeDiv = this.document.getElementById("welcome-div");
        var target = event.target;

        if (target.classList.contains("btn")) {
            if (welcomeDiv !== null) {
                welcomeDiv.remove();
            }
            switch (event.target.id) {
                case "easyButton": //Easy mode clicked
                    setDifficulty("easy");
                    break;

                case "mediumButton": //Medium Mode clicked
                    setDifficulty("medium");
                    break;

                case "hardButton": //Hard Mode clicked
                    setDifficulty("hard");
                    break;
                case "playbtn":
                    this.location.reload();
                    break;
            }
        }
    });

    window.addEventListener( "keydown", function ( event ) {
        if (event.key == "Enter")
        {
            this.location.reload();
        }
    });
 });