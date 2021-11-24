let modalBtn = document.getElementById("save-name")
let modal = document.querySelector(".character-modal")
let closeBtn = document.querySelector(".close")
// let characters = [data.results[0].name, data.results[1].name, data.results[2].name]


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
                console.log(data.results[0].name); 
                let characters = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[6].name]
                console.log(characters); 
                console.log(data.results); 
                
            })
        }
    });

}              
            
    


var getClasses = function() {
    var classesUrl = "https://www.dnd5eapi.co/api/classes";
    fetch(classesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                
            })
        }
    });
};

var getRaces = function() {
    var racesUrl = "https://www.dnd5eapi.co/api/races/";
    fetch(racesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                
            })
        }
    })
};
    

getAlignments();
getClasses();
getRaces();

//Save Functions

//Randomizer