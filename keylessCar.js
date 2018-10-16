//Layered four functions to create a mean car that you can only drive if you're 16+

function turnTheKey () {
    key = prompt("Turn the car on by turning the key. (Type: 'turn key')");
    if (key === "turn key") {
        carTurnsOn ();
    }
}
function carTurnsOn () {
    var user = prompt("Car has turned on. Would you like to drive?");
    if (user === "yes") {
        checkDriverAge ();
    } else if (user === "no") {
       smartAss ();
    }
}
function smartAss() {
    prompt("Why are you here.");
    alert("You think I actually care.");
}
function checkDriverAge () {
    var age = prompt("Whoa whoa whoa, how old are you?");
    if(age > 16) {
        alert("You're old enough to drive, don't get a DUI!");
    } else if (age === 16) {
        alert("You've been driving less than a year, be careful now.");
    } else if (age < 16) {
        alert("Where are your parents you should not be driving!");
    }
}
turnTheKey();

