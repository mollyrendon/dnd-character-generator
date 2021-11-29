//modal variables
var modal = document.getElementById("name-modal");
var btn = document.getElementById("click-here");
var span = document.getElementsByClassName("close") [0];
<<<<<<< .merge_file_a26556

=======
let modalBtn = document.getElementById("save-name")
let closeBtn = document.querySelector(".close")

let btnAlignment = document.getElementById("alignment-btn");
let btnClass = document.getElementById("class-btn");
let btnRace = document.getElementById("race-btn");

let resultAlignment = document.getElementById("align-input");
let resultClass = document.getElementById("class-input");
let resultRace = document.getElementById("race-input");

//let characterAlignment;
//let characterClass;
//let characterRace;



>>>>>>> .merge_file_a30592
//Get Repo Function

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
                        var diceRoll = "http://roll.diceapi.com/json/d8"
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
                        var diceRoll = "http://roll.diceapi.com/json/d11"
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
                        var diceRoll = "http://roll.diceapi.com/json/d9"
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

<<<<<<< .merge_file_a26556
//modal functions
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

=======
>>>>>>> .merge_file_a30592
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("save-btn").addEventListener("click", function() {
    var characterName = document.getElementById("characternameinput").value;
    console.log(JSON.stringify(characterName));
    localStorage.setItem("characternameinput",JSON.stringify(characterName));
})



getAlignments();
getClasses();
getRaces();



//Randomizer

//Local Storage