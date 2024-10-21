//Discount1
let totalAmount = 100;

if (totalAmount > 100) {
    discount = totalAmount * 0.20;
    finalAmount = totalAmount - discount;

    console.log("You qualify for a 20% discount. Your final amount is " + finalAmount);
} else {
    console.log("Sorry, you do not qualiy for any discounts. Your total amount is 90");
}

//Discount2
let totalamount = 100;

if (totalAmount >= 50 && totalAmount <= 100) {
    discount = totalAmount * 0.1;
    finalAmount = totalAmount - discount;
    
    console.log("You qualify for a 10% discount. Your final amount is " + finalAmount);
} else {
    console.log("No discount applied. Your total amount is " + finalAmount)
}

//Discount3
let total_amount = 100;

if (totalAmount < 50) {
    console.log("No discount amount is " + finalAmount)
} else {
    console.log("Discount amount is " + finalAmount)
}