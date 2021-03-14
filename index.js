console.log("Walk to the park with Byron the poodle");console.log("Throw the frisbee for Byron the poodle");
console.log("Walk home with Byron the poodle");
console.log("Unleash Byron the poodle"); 

// console.log("Wake Byron the poodle");
function wakeDog(dog, breed) {
    return `Wake ${dog} the ${breed}`
}

// console.log("Leash Byron the poodle");
function leashDog(dog, breed) {
    return `Leash ${dog} the ${breed}`
}

function walkToPark(dog, breed) {
    return `Walk to the park with ${dog} the ${breed}`
}

function throwFrisbee(dog, breed) {
   return `Throw the frisbee for ${dog} the ${breed}`
}

function walkHome(dog, breed) {
    return `Walk home with ${dog} the ${breed}`
}


function unleashDog(dog, breed) {
    return `Unleash ${dog} the ${breed}`
}




const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {

    return routine.map(dogFunction => dogFunction(dogName, dogBreed))
    
    //iterate over ROUTINE
    // routine.forEach(functionName => functionName(dog, breed));


    //stackoverflow:
    //array.forEach(item => console.log(item));
}

