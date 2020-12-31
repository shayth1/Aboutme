'use strict';
welcomingMessage();

function welcomingMessage() {
    var Name = prompt("What's your name?").toLowerCase();
    alert("Welcome " + Name);
    confirm("answer with y/n");
}


var score = 0;

function correct() {
    alert('Correct!');
    score++;
}

function notCorrect() {
    alert('Not Correct!');
}

function mainFunction(userInput) {
    if (userInput.toLowerCase() === 'y') {
        correct();
    } else {
        notCorrect();
    }
}

function mainFunctionTwo(userInputn) {
    if (userInputn.toLowerCase() === 'n') {
        correct();
    } else {
        notCorrect();
    }
}


var Qus1 = prompt("my age is 30? y/n");
mainFunctionTwo(Qus1);


var Qus2 = prompt("im a smoker? y/n");
mainFunctionTwo(Qus2);

var Qus3 = prompt("im a php developer? y/n");
mainFunction(Qus3);

var Qus4 = prompt("im a jordanian? y/n");
mainFunction(Qus4);


var Qus5 = prompt("i like camping? y/n");
mainFunction(Qus5);

alert("oops thats not right");


function guess() {
    var lucky = 100;
    for (var attempt = 1; attempt <= 4; attempt++) {
        var Qus6 = prompt('guess my lucky number note that you have only 4 attempts');
        if (parseInt(Qus6) === lucky) {
            alert("You are right");
            score++;
            correct();
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
}

guess();

function qusSeven() {
    var family = ["saif", "zaid", "ahmad", "raad"];
    for (var tryy = 1; tryy <= 6; tryy++) {
        var Qus7 = prompt('try to guess a name for one of my male family?').toLowerCase();
        var mname;
        for (var hent = 0; hent < family.length; hent++) {
            if (family[hent] === Qus7) {
                mname = true;
                break;
            } else { mname = false; }
        }
        if (mname) {
            correct();
            break;
        } else {
            notCorrect();
        }
        if (tryy === 6) {
            var shayth = 'my family male are: ';
            for (var x = 0; x < family.length; x++) {
                shayth = shayth + ', ' + family[x];
            }
            alert(shayth);
        }
    }

}
qusSeven();
alert("Your Score of 7 is " + score);
alert("Thank you " + Name); 