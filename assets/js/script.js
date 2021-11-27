//modal variables
var modal = document.getElementById("name-modal");
var btn = document.getElementById("click-here");
var span = document.getElementsByClassName("close") [0];

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

//modal functions
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

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