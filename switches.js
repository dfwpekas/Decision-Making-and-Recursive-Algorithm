// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// for Children (age <= 12): $10 , Teenagers (age 13-17): $15 , Adults (age >= 18): $20 .

function determineTicketPrice () {
    let age = prompt("Please enter your age: ");

    age = Number(age)

    let price = 0;
    switch (true) {
        case (age <= 12):
            price = 10;
            break;
        case (age >= 12 && age <= 17):
            price = 15;
            break;
        case (age >= 18):
            price = 20;
            break;
        default:
            case (age > 70):
            alert('Invalid age entered! ');
            return;
    }
     alert(`The Ticket Price for your age is $${price}`);
}



