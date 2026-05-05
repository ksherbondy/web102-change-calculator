// Write your JavaScript here
//document.getElementById("calculate-change").addEventListener("click", calcChange);
function findCents(cents) {
    let remainingCents = cents;
    const denominations = [25,10,5,1];
    let results = [];
    for (let coin of denominations) {
        results.push(Math.floor(remainingCents / coin));
        remainingCents %= coin;
    }
    return results;
}

function findDollars(dollars) {
    let remainingDollars = dollars;
    const denominations = [20,10,5,2,1];
    let results = [];
    for (let bill of denominations) {
        results.push(Math.floor(remainingDollars / dollars));
        remainingDollars %= dollars;
    }
    return results;
}

function displayResults(dollars, cents, dollarsArray, centArray) {
    const centIds = ["quarters-output", "dimes-output", "nickels-output", "pennies-output"];
    const dollarIds = ["twenties-output", "tens-output", "fives-output", "twos-output", "ones-output"];
    document.getElementById("dollars-output").textContent = dollars;
    document.getElementById("cents-output").textContent = cents;
    for(let i = 0; i < centIds.length; i++) {
        document.getElementById(centIds[i]).textContent = centArray[i];
    }
    for(let i = 0; i < dollarIds.length; i++) {
        document.getElementById(dollarIds[i]).textContent = dollarsArray[i];
    }
    
}

function handleClickEvent(e) {
    const due = Number(document.getElementById("amount-due").value);
    const received = Number(document.getElementById("amount-received").value);
    const totalChange = received - due;
    const dollars = Math.floor(totalChange);
    const cents = Math.round((totalChange - dollars) * 100);
    const dollarsArray = findDollars(dollars);
    const centArray = findCents(cents);
    displayResults(dollars, cents, dollarsArray, centArray);

}