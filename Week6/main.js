// Constructor function for Dog
    function Dog(name, breed, mySound, tvProgram, canTalk) {
        this.name = name;
        this.breed = breed;
        this.mySound = mySound;
        this.tvProgram = tvProgram;
        this.canTalk = canTalk;

        // Method used to display dog info
        this.myGreeting = function(){
            return `My dog's name is ${this.name}. 
            He is a  ${this.breed}. The sound I make is "${this.mySound}". 
            The TV show he's in is ${this.tvProgram}. 
            ${this.canTalk ? "I can talk!" : "I can't talk."}`;
        };     
        
    }

// Create new Dog objects
let scooby = new Dog("Scooby-Doo", "Great Dane", "Raggy", "Scooby Doo", true);
let brian = new Dog("Brian Griffin", "Labrador Retriever", "Stewie", "Family Guy", true);
let pluto = new Dog("Pluto", "Mixed Breed", "Woof", "Mickey Mouse", false);

// Stores dog objects in map(Key is dog name, value is dog object)
let dogs = {
    "Scooby-Doo": scooby,
    "Brian Griffin": brian,
    "Pluto": pluto
}


// Display each dog's properties/attributes
for (let key in dogs){
        console.log(`${"key"}:`)
        for (let prop in dogs[key]){
            if (typeof dogs[key][prop] !== "function"){
                console.log(`${prop}: ${dogs[key][prop]}`);
            }
        }
    console.log(dogs[key].myGreeting()); // Display dog info
    console.log("-----------------------------");
}

// Function to display selected dog's info
function displayDogInfo(){
    let dogName = document.getElementById("dogSelect").value;
    let dogInfo = document.getElementById("dogInfo");
    dogInfo.textContent = dogs[dogName].myGreeting();
}