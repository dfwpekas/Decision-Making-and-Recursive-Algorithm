function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function checkLeapYear() {
    // Prompt the user to enter a year
    let year = prompt("Please enter a year:");

    // Convert the input to a number
    year = Number(year);

    // Check if the input is a valid number
    if (isNaN(year)) {
        alert("Please enter a valid year.");
        return;
    }

    // Determine if the year is a leap year
    if (isLeapYear(year)) {
        alert(year + " is a leap year.");
    } else {
        alert(year + " is not a leap year.");
    }
}

