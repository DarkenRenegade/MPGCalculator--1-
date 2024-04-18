/**
 * Checks if form data is valid
 * @return--s {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */

window.onload = function () {
    //(document.getElementById("calculate") as HTMLButtonElement).onclick = displayResults;
    //(document.getElementById("clear") as HTMLButtonElement).onclick = clearEntries;
    let calculateBtn = document.getElementById("calculate") as HTMLButtonElement;
    calculateBtn.onclick = displayResults;
    let clearBtn = document.getElementById("clear") as HTMLButtonElement;
    clearBtn.onclick = clearEntries;


    //TODO: Add a function to Miles Driven and Gallons of gas used to clear out the inputs
    //      They can clear out both textboxes or just the textbox that triggers the double click event
    (document.getElementById("miles_driven") as HTMLInputElement).addEventListener('dblclick', function (this: HTMLInputElement) {
        this.value = '';
    });
    (document.getElementById("gallons_used") as HTMLInputElement).addEventListener('dblclick', function (this: HTMLInputElement) {
        this.value = '';
    });
}

function isValid(): boolean {
    //function should validate form entries
    //and return true or false corresponding to validity
    let isValid:boolean = true;
    resetAllSpans();

    let milesTextBox:HTMLInputElement = <HTMLInputElement>getTextBox("miles_driven");
    let milesDriven:number = parseInt(milesTextBox.value);
    //alert("milesDriven="+milesDriven);
    let isMilesDrivenValid:boolean = isNumbersOnly(milesDriven);
    if (isMilesDrivenValid == false) {
        let milesSpan:HTMLInputElement = <HTMLInputElement>milesTextBox.nextElementSibling;
        milesSpan.textContent = "Error! The input for miles must be a number only!";
        isValid = false;
    }
    let gallonsTextBox:HTMLInputElement = <HTMLInputElement>getTextBox("gallons_used");
    let gallonsUsed:number = parseInt(gallonsTextBox.value);
    let isGallonsValid:boolean = isNumbersOnly(gallonsUsed);
    if (isGallonsValid == false) {
        let gallonsSpan:HTMLInputElement = <HTMLInputElement>gallonsTextBox.nextElementSibling;
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
function resetAllSpans(): void {
    let allSpans:NodeListOf<HTMLElement> = document.querySelectorAll("form > span");

    // Loop through all <span>
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = allSpans[i];
        currSpan.textContent = "*";
    }
}

/**
 * These functions will help display an error message.
 */
function getTextBox(id:any): HTMLInputElement {
    return document.getElementById(id) as HTMLInputElement;
}

function isNumbersOnly(str:any): boolean {
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
function displayResults(): void {
    //display the MPG result in a textbox 
    let mpg: Number = calculateMPG();
    let mpgTextbox:HTMLInputElement = <HTMLInputElement>document.getElementById("mpg");
    mpgTextbox.value = mpg.toString();
}

/**
 * Calculates miles per gallon
  *@param {string|number} milesDriven The number of miles driven
  *@param {string|number} gallonsUsed The number of gallons used
 */
function calculateMPG(): number {
    let mpg:number = 0;
    //calculate MPG
    if (isValid()) {
        let milesTextBox:HTMLInputElement = <HTMLInputElement>getTextBox("miles_driven");
        let milesDriven:number = parseInt(milesTextBox.value);
        let gallonsTextBox:HTMLInputElement = <HTMLInputElement>getTextBox("gallons_used");
        let gallonsUsed:number = parseInt(gallonsTextBox.value);
        mpg = milesDriven / gallonsUsed;
        //return the MPG as a number
        // return mpg;
    }
    return mpg;
}

// Create a function that Clears all the form textboxes

// When the "Clear Entries" button is clicked, the user inputs will be cleared.
//document.getElementById("calculate").onclick = displayResults();


function clearEntries(): void {
    resetAllSpans();
    (<HTMLInputElement>document.getElementById("miles_driven")).value = "";
    (<HTMLInputElement>document.getElementById("gallons_used")).value = "";
    (<HTMLInputElement>document.getElementById("mpg")).value = "";
}