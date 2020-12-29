'use strict';
var Name = prompt("What's your name?").toLowerCase();
alert("Welcome " + Name);
confirm("Please answer with y/n");

var Qus1 = prompt("my age is 30? y/n");
if (Qus1.toLowerCase() === "y") {

    alert("too far!");
} else {

    alert("thats right");
}

var Qus2 = prompt("im a smoker? y/n");
if (Qus2.toLowerCase() === "n") {

    alert("i wish that!");
} else {

    alert(" thats right unfortuntly");
}

var Qus3 = prompt("im a php developer? y/n");
if (Qus3.toLowerCase() === "y") {

    alert("You are right!");
} else {

    alert("actuly yes");
}

var Qus4 = prompt("im a jordanian? y/n");
if (Qus4.toLowerCase() === "y") {

    alert("You are right!");
} else {

    alert("oops thats not right");
}

var Qus5 = prompt("i like camping? y/n");
if (Qus5.toLowerCase() === "y") {

    alert("You are right!");
} else {

    alert("Not correct :(");
}

alert("Thank you " + Name); 