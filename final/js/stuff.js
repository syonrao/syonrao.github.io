let fname = "";
console.log("I am here")
function greet() {
    let greetParagraph = document.getElementById("greet");
    console.log(greetParagraph)
    fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    greetParagraph.innerHTML = "Reservation made for " + fname + lname + "!"
}