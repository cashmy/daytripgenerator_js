// ----- Arrays ----- //
// At a later iteration/refactor - rtv data from a database of options
let destinationArray = ['Chicago', 'Milwaukee', 'Madison', 'Racine'];
let restaurantArray = ['Chit Chat', 'Jose Blue Sombrero', 'Mama Sushi', 'Charlie\'s Steak House'];
let transportationArray = ['Walk', 'Car', 'Limo', 'Commuter Train', 'Uber', 'Lyft'];
let entertainmentArray = ['the Movies', 'a Dance Club', 'a Sports Bar', 'the Theater', 'a Museum', 'the Symphony'];

// ----- Random Array-Element Selector ---- //
function rndArrayElemSelector(someArray, arrayLength) {
    let index = Math.floor(Math.random() * arrayLength)
    return someArray[index];
}

// ----- Initial Selection ----- //
function initialSelection() {
    let resultsArray = [];
    resultsArray[0] = rndArrayElemSelector(destinationArray, destinationArray.length);
    resultsArray[1] = rndArrayElemSelector(transportationArray, transportationArray.length);
    resultsArray[2] = rndArrayElemSelector(restaurantArray, restaurantArray.length);
    resultsArray[3] = rndArrayElemSelector(entertainmentArray, entertainmentArray.length);
    return resultsArray;
}

// ----- Display Generated Results ----- //
function displayDayTripResults(someArray) {
    // Build display string
    let resultString = "========== Day Trip Results =========="
    resultString += "\nYou will be going to: " + someArray[0];
    resultString += "\nand will arrive there by: " + someArray[1] +".";
    resultString += "\nFirst you will dine at: " + someArray[2];
    resultString += "\nand then you can enjoy further entertainment at: " + someArray[3] + ".";
    console.log(resultString)
}

// ----- Check for changes -----
// Because each array can have a variation in length. I choose to be simple (and somewhat repetitive) with this section
// Later refactoring can be examined for a more streamlined (looping process) [when those concepts are introduced]
function checkForChanges(someArray) {
    let changeRequest = prompt("Do you wish to make changes? (y/n)");
    if (changeRequest === 'y') {
        // Destination
        let answer = prompt("Do you wish to change " + someArray[0] + "? (y/n)")
        if (answer === 'y') {
            someArray[0] = rndArrayElemSelector(destinationArray, destinationArray.length);
        }
        // Transportation
        answer = prompt("Do you wish to change " + someArray[1] + "? (y/n)")
        if (answer === 'y') {
            someArray[1] = rndArrayElemSelector(transportationArray, transportationArray.length);
        }
        // Restaurant Dining
        answer = prompt("Do you wish to change " + someArray[2] + "? (y/n)")
        if (answer === 'y') {
            someArray[2] = rndArrayElemSelector(restaurantArray, restaurantArray.length);
        }
        // Entertainment
        answer = prompt("Do you wish to change " + someArray[3] + "? (y/n)")
        if (answer === 'y') {
            someArray[3] = rndArrayElemSelector(entertainmentArray, entertainmentArray.length);
        }
        return true;
    } else {
        console.log("\nEnjoy your Trip!");
        return false;
    }
}

// ----- Cycle through change requests until user is satisfied -----
function cycleCheckRequest(someArray) {
    let changeNeeded = true;
    while (changeNeeded) {
        changeNeeded = checkForChanges(someArray);
        displayDayTripResults(someArray);
    }
}

let dayTripResults = initialSelection();
displayDayTripResults(dayTripResults);
cycleCheckRequest(dayTripResults);
