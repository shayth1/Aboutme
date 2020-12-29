'use strict';
var Name = prompt("What's your name?").toLowerCase();
alert("Welcome " + Name);
confirm("answer with y/n");

// score:
var score = 0;

var Qus1 = prompt("my age is 30? y/n");
if (Qus1.toLowerCase() === "y") {

    alert("too far!");
} else {

    alert("thats right");
    score++;
}

var Qus2 = prompt("im a smoker? y/n");
if (Qus2.toLowerCase() === "n") {

    alert("i wish that");
} else {

    alert("thats right unfortuntly");
    score++;

}

var Qus3 = prompt("im a php developer? y/n");
if (Qus3.toLowerCase() === "y") {

    alert("You are right");
    score++;
} else {

    alert("actuly yes");
}

var Qus4 = prompt("im a jordanian? y/n");
if (Qus4.toLowerCase() === "y") {

    alert("You are right");
    score++;
} else {

    alert("oops thats not right");
}

var Qus5 = prompt("i like camping? y/n");
if (Qus5.toLowerCase() === "y") {

    alert("You are right");
    score++;
} else {

    alert("oops thats not right");
}
//family array:
// var family = ["saif","zaid","raad","ahmed"];
// var Qus6 = prompt("guess my lucky number note that you have only 4 attempts");
// if (Qus6 == lucky) {


var lucky = 100;
for (var attempt = 1; attempt <= 4; attempt++) {
    var Qus6 = prompt('guess my lucky number note that you have only 4 attempts');
    if (parseInt(Qus6) === lucky) {
        alert("You are right");

        score++;

        break;
    } else if (parseInt(Qus6) > lucky) {
        alert("too high");
        console.log("too high");

    } else if (parseInt(Qus6) < lucky) {
        alert('too low');

    } else {
        alert("lets try one more time");
    }
    if (attempt === 4) {
        alert("sorry all of your attempts have been exhausted my lucky number is  " + lucky);
    }
}

var family = ["saif", "zaid", "ahmad", "raad"];
for (tryy = 1; tryy <= 6; tryy++) {
    var Qus7 = prompt('try to guess a name for one of my male family?').toLowerCase();
    var mname;
    for (var hent = 0; hent < family.length; hent++) {
        if (family[hent] === Qus7) {
            mname = true;
            break;
        } else { mname = false; }
    }
    if (mname) {
        alert('yes he is one of them');
        score++;
        break;
    } else {
        alert('no he is not one of them');
    }
    if (tryy === 6) {
        var shayth = 'my family male are: ';
        for (var x = 0; x < family.length; x++) {
            shayth = shayth + ', ' + family[x];
        }
        alert(shayth);
    }
}


alert("Your Score of 7 is " + score);
alert("Thank you " + Name); 