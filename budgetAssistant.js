// Budgeting Assistant

let startupName = "BrightStart Tech";
let initialCapital = 50000;
let monthlyRevenue = 20000;
let monthlyExpenses = 15000;

let netCashFlow = monthlyRevenue - monthlyExpenses;
let currentBalance = initialCapital + netCashFlow;
let isProfitable = netCashFlow > 0;

console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + isProfitable);
