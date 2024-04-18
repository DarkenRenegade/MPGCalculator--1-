/**
 * Checks if form data is valid
 * @return--s {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */

window.onload = function () {
    document.getElementById("calculate").onclick = displayResults;
    document.getElementById("clear").onclick = clearEntries;
    //TODO: Add a function to Miles Driven and Gallons of gas used to clear out the inputs
    //      They can clear out both textboxes or just the textbox that triggers the double click event
    document.getElementById("miles_driven").addEventListener('dblclick', function () {
        this.value = '';
    });
    document.getElementById("gallons_used").addEventListener('dblclick', function () {
        this.value = '';
    });
}

function isValid() {
    //function should validate form entries
    //and return true or false corresponding to validity
    let isValid = true;
    resetAllSpans();

    let milesTextBox = getTextBox("miles_driven");
    let milesDriven = milesTextBox.value;
    //alert("milesDriven="+milesDriven);
    let isMilesDrivenValid = isNumbersOnly(milesDriven);
    if (isMilesDrivenValid == false) {
        let milesSpan = milesTextBox.nextElementSibling;
        milesSpan.textContent = "Error! The input for miles must be a number only!";
        isValid = false;
    }
    let gallonsTextBox = getTextBox("gallons_used");
    let gallonsUsed = gallonsTextBox.value;
    let isGallonsValid = isNumbersOnly(gallonsUsed);
    if (isGallonsValid == false) {
        let gallonsSpan = gallonsTextBox.nextElementSibling;
        gallonsSpan.textContent = "Error! The input for gallons must be a number only!";
        isValid = false;
    }

    return isValid;
    //display error messages if inputs are invalid
}

/**
 * This function will reset all <span> elements
 * in a <form> tag to have the text of "*".
 */
function resetAllSpans() {
    let allSpans = document.querySelectorAll("form > span");

    // Loop through all <span>
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = allSpans[i];
        currSpan.textContent = "*";
    }
}

/**
 * These functions will help display an error message.
 */
function getTextBox(id) {
    return document.getElementById(id);
}

function isNumbersOnly(str) {
    return /^\d+$/.test(str);
}

/** 
 * This function should be called when the calculate button is clicked
*/
function main() {
    // check if data is valid
    // if data is valid
    // calculate MPG
    // display results
}

/**
 * Displays given MPG on the form
 * @param {string|number} milesPerGallon String or number containing the miles per gallon
 */
function displayResults(milesPerGallon) {
    //display the MPG result in a textbox 
    let mpg = calculateMPG();
    let mpgTextbox = document.getElementById("mpg");
    mpgTextbox.value = mpg;
}

/**
 * Calculates miles per gallon
  *@param {string|number} milesDriven The number of miles driven
  *@param {string|number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDriven, gallonsUsed) {
    //calculate MPG
    if (isValid()) {
        let milesTextBox = getTextBox("miles_driven");
        let milesDriven = milesTextBox.value;
        let gallonsTextBox = getTextBox("gallons_used");
        let gallonsUsed = gallonsTextBox.value;
        let mpg = milesDriven / gallonsUsed;
        //return the MPG as a number
        return mpg;
    }

}

// Create a function that Clears all the form textboxes

// When the "Clear Entries" button is clicked, the user inputs will be cleared.
//document.getElementById("calculate").onclick = displayResults();


function clearEntries() {
    resetAllSpans();
    document.getElementById("miles_driven").value = "";
    document.getElementById("gallons_used").value = "";
    document.getElementById("mpg").value = "";
}