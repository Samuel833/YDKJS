//Conditionals
//loops

//while loop
numofCustomers = 0;
while(numofCustomers > 0) {//As long as this condtions keeps returning true
  //Execute the line of code in the curly braces{Known as the loop block}
  //Each time the loop block executes it is known as iteration
  console.log("How may I help you?");
  numofCustomers -= 1;
}

//do while loop
do {
  console.log("How may I help you?");
  numofCustomers -= 1;
} while (numofCustomers > 0);

/*
The only practical difference between these loops is whether the conditional is tested before the first iteration (while) or after the first iteration (do..while).

In either form, if the conditional tests as false, the next iteration will not run. That means if the condition is initially false, a while loop will never run, but a do..while loop will run just the first time.
*/

//Break statement in stopping loop
let i = 0;
while(true){
  console.log("hey");
  if (i <= 9){
    console.log( i );
    i = i + 1;
    if(i = 8){
      console.log("I am 8")
      break;
    }
  }
  //time to stop the loop
  else {
    break;
    }
}
//Alternative if the  condition isn't true, called an else clause
const ACCESSORY_PRICE = 9.99;

let bankBalance =  302.123;
var amount = 99.99;

amount *= 2;

// can we afford the extra purchase?
if ( amount < bankBalance ) {
  console.log( "I'll take the accessory!" );
  amount = amount + ACCESSORY_PRICE;
  }
  // otherwise:
else {
console.log( "No, thanks." );
}

//The for loop has three clauses:
//The initialization clause -- let i = 2
//The conditional test clause -- i <= 9
//The update clause -- i = i + 1 or i++
// for (let i = 2; i <= 9; i ++){
//   console.log (i);
// }

// function whatIsTheName(){
//   console.log(
//   Ajala = ["Ade", "Ade Tiger"]
//   );
// }

// let user = prompt("What is your name?")
// function yourName(name){
//   console.log(name.toUpperCase() + " my guy.")
//   return ("My name is " + String(name) + ".");
// }
// let student = yourName(user);
// // yourName(user);
// whatIsTheName();
// console.log (student + " I am a student");

// //Program to calculate the total price of phone purchase;
//Keep purchasing phones until you run out of money in your bank account;
//You will also buy accesssories for each phone as long as purchase amoount is below menta spending threshold
//After calculating purchase amount, add in the tax then print out the calculated purchase amount, properly formatted
//Finally check the amount against your bank account balance to see if you can afford it or not

const taxRate = 0.008;
const phonePrice = 99.99;
const accessoryPrice = 9.99;
const spendingThreshold = 200;
let amountSpent = 0;

let bankAccountBalance = prompt("How much do you have in your bank account?")
while(amountSpent < bankAccountBalance){
  amountSpent += phonePrice;
  console.log(amountSpent + " At this ");
  if( amountSpent < spendingThreshold){
    console.log("I will take the ACCESSORY")
    amountSpent += accessoryPrice;
    console.log(amountSpent + " here")
  }
}

function calcTax(amountSpent){
  return amountSpent * taxRate
}
function formatPrice(amountSpent){
  return `$${amountSpent.toFixed(2)}`
}
console.log(amountSpent);
amountSpent += calcTax(amountSpent)

console.log(`Your purchase: ${formatPrice(amountSpent)}`)
if(amountSpent > bankAccountBalance){
  console.log("You can't afford this purchase")
}

// if (phonePrice > bankAccountBalance){
//   bankAccountBalance -= phonePrice;

// }
// function calcTax(){
  
// }
// function formatPrice()
//SOLUTION
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = 303.91;
var amount = 0;
function calculateTax(amount) {
return amount * TAX_RATE;
}
function formatAmount(amount) {
return "$" + amount.toFixed( 2 );
}
// keep buying phones while you still have money
while (amount < bank_balance) {
// buy a new phone!
amount = amount + PHONE_PRICE;
// can we afford the accessory?
if (amount < SPENDING_THRESHOLD) {
amount = amount + ACCESSORY_PRICE;
}
}
// don't forget to pay the government, too
amount = amount + calculateTax( amount );
console.log(
"Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76
// can you actually afford this purchase?
if (amount > bank_balance) {
console.log(
"You can't afford this purchase. :("
);
}
// You can't afford this purchase. :(