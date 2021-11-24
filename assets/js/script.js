let modalBtn = document.getElementById("save-name")
let modal = document.querySelector(".character-modal")
let closeBtn = document.querySelector(".close")

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
            console.log("response ok");
            console.log(data);
            })
        }
    });
};

var getClasses = function() {
    var classesUrl = "https://www.dnd5eapi.co/api/classes";
    fetch(classesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                console.log("response ok");
                console.log(data);
            })
        }
    });
};

var getRaces = function() {
    var racesUrl = "https://www.dnd5eapi.co/api/races/";
    fetch(racesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                console.log("response ok");
                console.log(data);
            })
        }
    });
}
    

getAlignments();
getClasses();
getRaces();

//Save Functions

//Randomizer