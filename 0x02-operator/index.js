//initial price of the goods
let initialPrice = 100;

//caculation of the final price with the discount and tax
let discount = initialPrice * 0.1;
let finalPrice = initialPrice - discount;
let tax = finalPrice * 0.03;
let totelPrice = finalPrice + tax;

console.log("The initial Terminal in goods is " + "$" + initialPrice + " and the final price after discount is " + "$" + finalPrice )

//temperature in celsius
let celsius = 25;

//caculation of fahrenhit temperature
let fahrenhit = (celsius * 9/5) + 32;

console.log("The temperature is " + celsius + " equivalent to " + fahrenhit)

//circle-area
let radius = 7;
let area = radius * radius;
let cicumference = 2 * radius

console.log("The circle has a radius of, " + radius + ", and area of " + area + ", and a circumference of " + cicumference)

//interest caculatoin
let principal = 100;
let rate = 5;
let time = 3;
let simpleinterest = (principal * rate * time) / 100;

console.log("Principal amount:, " + principal + " ,Rate of interes: " + rate + " ,Time in years: " + time + " ,Simple interest" + simpleinterest)

//Fuel Efficiency caculation
let distanceDrive = 300;
let fuelEfficiency = 25;
let gallonsUsed = distanceDrive / fuelEfficiency;

console.log("You have driven " + distanceDrive + " miles and used " + gallonsUsed)

//Monthly Savings
let monthlySaving = 200;
let months = 12;
let totalSaved = monthlySaving * months;

console.log("After " + months + " months of saving " + monthlySaving + " each months, you have saved a total of " + totalSaved)

//Convert Height to Centimeters
let feet = 30.48;
let inch = 2.54;
let heightFeet = 5;
let heightinches = 8;
let totalHeight = (heightFeet * feet) + (heightinches * inch)

console.log("Your height is " + totalHeight + " centimeters.")