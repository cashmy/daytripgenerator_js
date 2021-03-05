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

let dayTripResults = initialSelection();
displayDayTripResults(dayTripResults);
