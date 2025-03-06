const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}


function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD; 
    return euros * oneEuroIs.JPY;       
}


function fromYenToPound(yens) {
    let euros = yens / oneEuroIs.JPY; 
    return euros * oneEuroIs.GBP;     
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};