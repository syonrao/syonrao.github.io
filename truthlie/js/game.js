let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let age = document.getElementById("age").value
    greetParagraph.innerHTML = "Greetings " + age + "year old" + fname + "" + lname + "!"
}

function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ",you are wrong. stupid";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ",you are wrong. stupid";
    }
    else {
        triviaAnswer.innerHTML = fname + ",you are wrong. stupid";
    }
}


