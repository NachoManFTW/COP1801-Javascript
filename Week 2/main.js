
// PI Value (10 Digits)
const piValue = 3.141592654;

// User variables
let fName;
let myFavNumber;
let myArea;
// Function to caluculate area
function area(piValue, myFavNumber) {
    let myArea = piValue * (myFavNumber * myFavNumber);
    return myArea;
}
// User input
fName = prompt("What is your name?");
myFavNumber = prompt("What is your favorite number?");
myArea = area(piValue, myFavNumber);

// Output
document.getElementById("fName").innerHTML = fName;
document.getElementById("myFavNumber").innerHTML = myFavNumber;
document.getElementById("myArea").innerHTML = myArea;




