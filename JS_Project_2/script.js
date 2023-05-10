async function getQuote(){
// Solution to the error 1---------------------------
const proxyUrl='https://cors-anywhere.herokuapp.com/';
// -------------------------------------------------
const apiUrl='https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response=await fetch(proxyUrl+apiUrl);
        const data=await response.json();
        console.log(data);
    }catch(error){
        // Solution to error 2-----------------------
        getQuote();
        // ------------------------------------------
        console.log('Ooops,No quote',error)
    }
}


getQuote();



// Step 1: Run the project
// Got Error
// Access to fetch at 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json' (redirected from 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json') from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.


// Error 2

// Ooops,No quote SyntaxError: Bad escaped character in JSON at position 53