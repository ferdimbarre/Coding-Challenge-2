// calculate the tip
let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20); 
console.log(`Tip for ${bill}: $${tip}`); // Output will show 15% tip for bills $50-$300 and 20% default

// output details
let totalValue = bill + tip; // creates functiom to express total value 
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${totalValue}`); // outputs expression 

// create a function and test it 
function calculateTip(bill) {
    let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20); // same as in the beginning but had to declare because different scope
    console.log(`Tip for ${bill}: $${tip}`) 
    return tip
} // output will be number (tip)
console.log(calculateTip);
console.log(calculateTip(100)); // output will be $15

//utilize arrays 
let billsTest1 = [275, 40, 430]
let tipsTest1 = billsTest1.map((bill)=>calculateTip(bill));
console.log(tipsTest1); // outputs will be 41.25, 8, 86

let billsTest2 = [125, 555, 44]
let tipsTest2 = billsTest2.map((bill)=>calculateTip(bill));
console.log(tipsTest2); // outputs will 18.75, 111, 8.8

let totals1 = billsTest1.map((bill)=>bill + calculateTip(bill)); 
console.log(totals1) // outputs will add tips to bill amounts in array 1

let totals2 = billsTest2.map((bill)=>bill + calculateTip(bill));
console.log(totals2) // outputs will add tips to bill amounts in array 2