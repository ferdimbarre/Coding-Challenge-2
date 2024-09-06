// calculate the tip
let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20); 
console.log(`Tip for ${bill}: $${tip}`); // Output will show 15% tip for bills $50-$300 and 20% default

// output details
let totalValue = bill + tip; // creates functiom to express total value 
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${totalValue}`); // outputs expression 



