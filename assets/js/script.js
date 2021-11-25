let modalBtn = document.getElementById("save-name")
let modal = document.querySelector(".character-modal")
let closeBtn = document.querySelector(".close")
let btnRandom = document.querySelector("button"); 
let result = document.querySelector("h3"); 


modalBtn.onclick = function(){
    modal.style.display = "block"
}

closeBtn.onclick = function(){
}

window.onclick = function(e){
    if(e.target==modal){
        modal.style.display = "none"
    }
}
//Get Repo Function


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
                    let index = getRandomAlignment(0, alignment.length-1); 
                    result.innerText = alignment[index]; 
                })
            })
        }
    });

    // function getRandomAlignment(max, min) {
    //     let step1 = max + 1; 
    //     let step2 = Math.random() * step2; 
    //     let step3 = Math.floor(step2) + min; 

    //     return result;
    // }

    // btnRandom.addEventListener("click", () => {
    //     let index = getRandomAlignment(0, alignment.length-1); 
    //     result.innerText = alignment[index]; 
    // })

}              
 


var getClasses = function() {
    var classesUrl = "https://www.dnd5eapi.co/api/classes";
    fetch(classesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let classes = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name, data.results[9].name, data.results[10].name, data.results[11].name]
                console.log(classes);
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