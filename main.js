// Constructor function for myDog
function myDog(name, breed, mySound, tvProgram) {
    this.name = name;
    this.breed = breed;
    this.mySound = mySound;
    this.tvProgram = tvProgram;
}
// Create a dog object
let myDoggo = new myDog("Atticus", "Welsh Corgi", "I'M FLUFFY, PET ME!!!!!", "Infinity Train");

// Show dog info at  tag
document.getElementById("myDogObject").innerHTML = `My dog's name is ${myDoggo.name}, he is a ${myDoggo.breed}. ${myDoggo.mySound} The TV show he's in is ${myDoggo.tvProgram}.`; 

    // Constructor function for myDogConst
    function myDogConst(name, breed, mySound, tvProgram, canTalk) {
        this.name = name;
        this.breed = breed;
        this.mySound = mySound;
        this.tvProgram = tvProgram;
        this.canTalk = canTalk;

        // Method used to display dog info
        this.myGreeting = function(){
            return `My dog's name is ${this.name}. He is a  ${this.breed}. ${this.mySound} The TV show he's in is ${this.tvProgram}. ${this.canTalk ? "I can talk!" : "I can't talk."}`;
        };     
        
    }

    // Creating the myDogConst object
    let myConstDog = new myDogConst("Atticus", "Welsh Corgi", "I'M FLUFFY, PET ME!!!!!", "Infinity Train", true);


    // Show dog info at  tag
    document.getElementById("myDogConstObject").innerHTML = myConstDog.myGreeting();