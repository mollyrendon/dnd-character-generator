let modalBtn = document.getElementById("save-name")
let modal = document.querySelector(".character-modal")
let closeBtn = document.querySelector(".close")
let btnRandom = document.getElementById("alignment-btn"); 
let btnRandom2 = document.getElementById("class-btn"); 
let btnRandom3 = document.getElementById("race-btn"); 
let result = document.getElementById("align-input"); 
let result1 = document.getElementById("class-input"); 
let result2 = document.getElementById("race-input")
let characterClass; 
let characterRace;
let characterAlignment; 


// modalBtn.onclick = function(){
//     modal.style.display = "block"
// }

// closeBtn.onclick = function(){
// }

// window.onclick = function(e){
//     if(e.target==modal){
//         modal.style.display = "none"
//     }
// }
// //Get Repo Function


//Get Fetch Request
var getAlignments = function() {
    var alignmentsUrl = "https://www.dnd5eapi.co/api/alignments/";
    fetch(alignmentsUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let alignment = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name]
                console.log(alignment); 

                function getRandomAlignment(min, max) {
                    let step1 = max - min + 1; 
                    let step2 = Math.random() * step1; 
                    let result = Math.floor(step2) + min; 
            
                    return result;
                    
                }
            
                btnRandom.addEventListener("click", () => {
                    if (characterClass)
                        return; 

                    let index = getRandomAlignment(0, alignment.length-1); 
                     
                    characterClass = alignment[index]; 
                    result.innerText = characterClass;
                    
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

                function getRandomClasses(min, max) {
                    let step1 = max - min + 1; 
                    let step2 = Math.random() * step1; 
                    let result1 = Math.floor(step2) + min; 
            
                    return result1;
                    
                }
            
                btnRandom2.addEventListener("click", () => {
                    if (characterRace)
                        return; 

                    let index = getRandomClasses(0, classes.length-1); 
                     
                    characterRace = classes[index]; 
                    result1.innerText = characterRace;
                    
                })

            })
        }
    });
};

var getRaces = function() {
    var racesUrl = "https://www.dnd5eapi.co/api/races/";
    fetch(racesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let race = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name]
                console.log(race);

                function getRandomRaces(min, max) {
                    let step1 = max - min + 1; 
                    let step2 = Math.random() * step1; 
                    let result2 = Math.floor(step2) + min; 
            
                    return result2;
                    
                }
            
                btnRandom3.addEventListener("click", () => {
                    if (characterAlignment)
                        return; 

                    let index = getRandomRaces(0, race.length-1); 
                     
                    characterAlignment = race[index]; 
                    result2.innerText = characterAlignment;
                    
                })

            })
        }
    })
};
    
// var randomPerson = ""
// function generateCharacter() {
//     randomPerson = ([position], [character]); 
//         randomPerson = randomPerson[Math.floor(Math.random() * randomPerson.length)]; 
//         console.log(randomPerson); 

//         return randomPerson; 




getAlignments();
getClasses();
getRaces();



//Save Functions

//Randomizer