// For loop assinment instructions
// Initial value
let counter = 0;


// Function creates new element everytime it is called
function addValue(){
    // Selects the container to add element too
    let container = document.getElementById("display");

    // Create a new element
    let newElement = document.createElement("h6");
    // Adds to new element with shorthand if statement
    newElement.textContent = `Number ${counter}` + " is " + (counter % 2 == 0 ? "Even" : "Odd"); 
    // Adds to DOM
    container.appendChild(newElement); 

    counter++;
}

// Runs the function 10 times as per assignment parameters
for (let i = 0; i <= 10; i++){
    addValue();
}


// My num assignment instructions
let myNum;
// Loops until loopCounter is equal to myNum
do{
    myNum = parseInt(prompt("Enter a number between 5 and 20"));
    myNum = Number(myNum);
    if (isNaN(myNum) || myNum < 5 || myNum > 20){
        alert("Please enter a number");
    }

} while (isNaN(myNum) || myNum < 5 || myNum > 20);

let loopCounter = 1;

// Do-while loop to display numbers from 1 to myNum
do{
    console.log(loopCounter);
    loopCounter++;
} while (loopCounter <= myNum);


// Store items in array assignment instructions
let myArray = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Prints items in array to id arrary tag in html
function displayArray(){
    document.getElementById("array").innerHTML = "";
    myArray.forEach(element => {
        document.getElementById("array").innerHTML += element + ", ";
    });
}
displayArray();
