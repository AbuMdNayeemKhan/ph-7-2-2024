let ticketPrice = 120;
let tickeSale = 10;
let securityCost = 500;
let stufLunch = 50 * 8;
function calculateMoney(ticketSale){
    
    if(ticketSale <= 0){
        return "Invalid Number";
    } else {
        let totalEarn = ticketPrice * tickeSale;
        let totalCost = securityCost + stufLunch;
        let totalProfit = totalEarn - totalCost;
        return totalProfit;
    }
}

console.log(calculateMoney(tickeSale));