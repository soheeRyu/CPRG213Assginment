/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let numDaysSelected = 0;
let totalCost = 0;

const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCostEl = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.

// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function onMondayButton(e) {
    e.preventDefault();

    mondayButton.classList.add('clicked');
    if (mondayButton.classList.contains('blue-hover')) {
        numDaysSelected++;
        mondayButton.classList.remove('blue-hover');
    } else {
        numDaysSelected = numDaysSelected++;
    }

    console.log('mon clicked');
}

function onTuesdayButton(e) {
    e.preventDefault();

    tuesdayButton.classList.add('clicked');
    if (tuesdayButton.classList.contains('blue-hover')) {
        numDaysSelected++;
        tuesdayButton.classList.remove('blue-hover');
    } else {
        numDaysSelected = numDaysSelected++;
    }

    console.log('tue clicked');
}

function onWednesdayButton(e) {
    e.preventDefault();

    wednesdayButton.classList.add('clicked');
    if (wednesdayButton.classList.contains('blue-hover')) {
        numDaysSelected++;
        wednesdayButton.classList.remove('blue-hover');
    } else {
        numDaysSelected = numDaysSelected++;
    }

    console.log('wed clicked');
}

function onThursdayButton(e) {
    e.preventDefault();

    thursdayButton.classList.add('clicked');
    if (thursdayButton.classList.contains('blue-hover')) {
        numDaysSelected++;
        thursdayButton.classList.remove('blue-hover');
    } else {
        numDaysSelected = numDaysSelected++;
    }

    console.log('thu clicked');
}

function onFridayButton(e) {
    e.preventDefault();

    fridayButton.classList.add('clicked');
    fridayButton.classList.add('clicked');
    if (fridayButton.classList.contains('blue-hover')) {
        numDaysSelected++;
        fridayButton.classList.remove('blue-hover');
    } else {
        numDaysSelected = numDaysSelected++;
    }

    console.log('fri clicked');
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearAll(e) {
    e.preventDefault();

    location.reload();
    console.log('clear button');
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function onHalfDayButton(e) {
    e.preventDefault();

    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');

    costPerDay = 20;
    totalCost = numDaysSelected * costPerDay;
    
    recalculate();
    
    console.log('half');
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function onFullDayButton(e) {
    e.preventDefault();
    
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');

    costPerDay = 35;
    totalCost =  numDaysSelected * costPerDay;

    recalculate();
       
    console.log('full');
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
  
    calculatedCostEl.textContent = totalCost.toFixed(0);
}

mondayButton.addEventListener('click',onMondayButton);
tuesdayButton.addEventListener('click',onTuesdayButton);
wednesdayButton.addEventListener('click',onWednesdayButton);
thursdayButton.addEventListener('click',onThursdayButton);
fridayButton.addEventListener('click',onFridayButton);

halfDayButton.onclick = onHalfDayButton;
fullDayButton.onclick = onFullDayButton;
clearButton.onclick = clearAll;
