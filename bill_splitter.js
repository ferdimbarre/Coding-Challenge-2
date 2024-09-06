let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20); 
console.log(`Tip for ${bill}: $${tip}`); // Output will show 15% tip for bills $50-$300 and 20% default


