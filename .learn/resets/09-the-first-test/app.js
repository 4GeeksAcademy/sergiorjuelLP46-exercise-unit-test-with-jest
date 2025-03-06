const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let exchangeRates = {
    euroToDollar: 1.07,  // 1 euro = 1.07 dólares
    dollarToYen: 150.50, // 1 dólar = 150.50 yenes
    yenToPound: 0.0053   // 1 yen = 0.0053 libras
};


function fromEuroToDollar(euros) {
    return euros * exchangeRates.euroToDollar;
}


function fromDollarToYen(dollars) {
    return dollars * exchangeRates.dollarToYen;
}


function fromYenToPound(yens) {
    return yens * exchangeRates.yenToPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};