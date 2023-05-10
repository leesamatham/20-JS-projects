// Fetch data from API
// ===================================================
// UI and functions attachment
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote')
const loader=document.getElementById('loader');
let apiQuotes=[];

// Show loading div
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
// hide loading div
function hiding(){
    loader.hidden=true;
    quoteContainer.hidden=false;
}

// Get Quotes from API
async function getQuotes(){
    loading();
    // Target data url-API URL
    const apiUrl='https://type.fit/api/quotes';
    try{
    // Actual Code 
    // Get the data in to JSON string form API
    const response=await fetch(apiUrl);
    // Convert in to JSON Object
    apiQuotes=await response.json();
    console.log(apiQuotes);
    newQuote();
    }catch(error){
        // Catch Error here
    }
    hiding();
}

    // Backend code
function newQuote(){
    loading();
    // Display random quote using Math.random form apiQuotes array
    // Math.floor - gives the random less than given number
    const quote=apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    console.log(quote);
    // display on HTML page
    // check the quote length to determine styling
    if(quote.text.length>50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent=quote.text;
    // forntend variable =backend object
    // check if author field is black and replace with unknown
    if(!quote.author){
        authorText.textContent='Unknown';
    }else{
        authorText.textContent=quote.author;
    }
    hiding();
}


// Tweet a new quote from here to twitter
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    // open twitter in a new tab
    window.open(twitterUrl,'_blank');
}

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

getQuotes();
// loading();
// hiding();