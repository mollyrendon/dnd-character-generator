//modal variables
var modal = document.getElementById("name-modal");
var btn = document.getElementById("click-here");
var span = document.getElementsByClassName("close") [0];
var saveBtn = document.getElementById("save-btn");

// trait variables
let btnAlignment = document.getElementById("alignment-btn");
let btnClass = document.getElementById("class-btn");
let btnRace = document.getElementById("race-btn");

let resultAlignment = document.getElementById("align-input");
let resultClass = document.getElementById("class-input");
let resultRace = document.getElementById("race-input");

var characterContainerEl = document.querySelector("#generated-character");
var alignInputElement = document.createElement("h3");
var classInputElement = document.createElement("h3");
var raceInputElement = document.createElement("h3");
var nameInputElement = document.createElement("h3");

//Get Fetch Request
var getAlignments = function() {
    var alignmentsUrl = "https://www.dnd5eapi.co/api/alignments/";
    fetch(alignmentsUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let alignment = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name]
                console.log(alignment); 



            
                btnAlignment.addEventListener("click", function() {
                    var getRollAll = function() {
                        var diceRoll = "https://roll.diceapi.com/json/d8"
                        fetch(diceRoll).then(function(response){
                            if(response.ok) {
                                response.json().then(function(data){
                                    let allDice = data.dice[0].value -1
                                    characterAlignment = alignment[allDice]; 
                                    resultAlignment.innerText = characterAlignment;
                                    console.log(allDice);
                                    console.log(characterAlignment);
                                return characterAlignment;
                                }) 
                            }
                        });
                    }


                    getRollAll(); 

                })
            })
        }
    });

}              



var getClasses = function() {
    var classesUrl = "https://www.dnd5eapi.co/api/classes";
    fetch(classesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let classes = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name, data.results[9].name, data.results[10].name, data.results[11].name]
                console.log(classes);


                btnClass.addEventListener("click", function() {
                    var getRollAll = function() {
                        var diceRoll = "https://roll.diceapi.com/json/d11"
                        fetch(diceRoll).then(function(response){
                            if(response.ok) {
                                response.json().then(function(data){
                                    let allDice = data.dice[0].value -1
                                    characterClass = classes[allDice]; 
                                    resultClass.innerText = characterClass;
                                    console.log(allDice);
                                    console.log(characterClass);
                                return;
                                }) 
                            }
                        });
                    }

                    getRollAll(); 

                })
            })
        }
    });
}

var getRaces = function() {
    var racesUrl = "https://www.dnd5eapi.co/api/races/";
    fetch(racesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let race = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name]
                console.log(race);

                btnRace.addEventListener("click", function() {
                    var getRollAll = function() {
                        var diceRoll = "https://roll.diceapi.com/json/d9"
                        fetch(diceRoll).then(function(response){
                            if(response.ok) {
                                response.json().then(function(data){
                                    let allDice = data.dice[0].value - 1
                                    characterRace = race[allDice]; 
                                    resultRace.innerText = characterRace;
                                    console.log(allDice);
                                    console.log(characterRace);
                                return;
                                }) 
                            }
                        });
                    }


                    getRollAll(); 

                })
            })
        }
    })
};

//modal functions
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

saveBtn.addEventListener("click", function() {
    modal.style.display = "none";
    window.location.reload();
});


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



document.getElementById("save-btn").addEventListener("click", function() {
    var characterName = document.getElementById("characternameinput").value;
    console.log(JSON.stringify(characterName));
    localStorage.setItem("characternameinput",JSON.stringify(characterName));

    var characterClass1 = document.getElementById("class-input").value;
    console.log(JSON.stringify(characterClass1));
    localStorage.setItem("class-input",JSON.stringify(characterClass1));

    var characterRace1 = document.getElementById("race-input").value;
    console.log(JSON.stringify(characterRace1));
    localStorage.setItem("race-input",JSON.stringify(characterRace1));

    var characterAlignment1 = document.getElementById("align-input").value;
    console.log(JSON.stringify(characterAlignment1));
    localStorage.setItem("align-input",JSON.stringify(characterAlignment1));
})

var displayCharacter = function () {
    var alignInput = JSON.parse(localStorage.getItem("align-input"));
    var classInput = JSON.parse(localStorage.getItem("class-input"));
    var raceInput = JSON.parse(localStorage.getItem("race-input"));
    var nameInput = JSON.parse(localStorage.getItem("characternameinput"));
    
    alignInputElement.textContent = alignInput
    classInputElement.textContent = classInput
    raceInputElement.textContent = raceInput
    nameInputElement.textContent = nameInput

    characterContainerEl.appendChild(alignInputElement)
    characterContainerEl.appendChild(classInputElement)
    characterContainerEl.appendChild(raceInputElement)
    characterContainerEl.appendChild(nameInputElement)
};




getAlignments();
getClasses();
getRaces();
displayCharacter();



//Randomizer

//Local Storage