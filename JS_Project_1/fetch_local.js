function newQuote(){
    // Display random quote using Math.random form apiQuotes array
    // Math.floor - gives the random less than given number
    // console.log(localQuotes)
const quote=localQuotes[Math.floor(Math.random()* localQuotes.length)];
console.log(quote);

}
newQuote();