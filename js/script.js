//creates an array of quotes object to hold data
var quotes = [
  {
    quote: 'Don\'t cry because it\'s over, smile because it happened. ',
    source: "Dr. Seuss",
    citation:"",
    year: ''
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: "Oscar Wilde",
    citation:"",
    year: ''
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    citation:"",
    year: ''
  },
  {
    quote: "So many books, so little time.",
    source: "Frank Zappa",
    citation:"",
    year: ''
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    source: "Bernard M. Baruch",
    citation:"",
    year: ''
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    citation:"",
    year: ''
  }
]

//fucntion that creates an ramdom number at Max of the number you pass in
function randomNum(max){
  return Math.floor(Math.random()*max);
}

//function return a randomQuote from quotes array
function getRandomQuote(){
  return quotes[randomNum(quotes.length)];
}

//function that prints selected quotes to the browser
function printQuote(){
  var selectedQuote = getRandomQuote();
  var quotesString = '<p class = "quote">' + selectedQuote.quote + '</p>';
  quotesString += '<p class = "source">' + selectedQuote.source;
  if(selectedQuote.citation !== '' && selectedQuote.citation !== undefined){
    quotesString += '<span class="citation">' + selectedQuote.citation + '</span>'
  }
  if(selectedQuote.year !== '' && selectedQuote.year !== undefined ){
    quotesString += '<span class="year">' + selectedQuote.year + '</span>'
  }
  quotesString += '</p>';
  document.getElementById('quote-box').innerHTML = quotesString;
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
