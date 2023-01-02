import * as React from 'react';

import './App.css';

const lifeQuotes = [
  {
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The good you do today will often be forgotten tomorrow. Do good anyway.",
    author: "Mother Teresa"
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Life is what we make it, and the world is what we make of it.",
    author: "Anna Pavlova"
  },
  {
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The good you do today will often be forgotten tomorrow. Do good anyway.",
    author: "Mother Teresa"
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain"
  }
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id='quote-box'>
    <p id='text'>"{quote.text}"</p>
    <h2 id='author'>{quote.author}</h2>
    <div className='actions'>
      <button 
        id='new-quote'
        className='button'
        onClick={handleNewQuote}>
          New Quote
      </button>  
      <button className='button'>  
        <a href='https://twitter.com/intent/tweet' id='tweet-quote' target='_blank' rel="noreferrer">
          Tweet
        </a>
      </button>       
    </div>
  </div>
)

const getRandomIndex = () =>
  Math.round(Math.random() * ((lifeQuotes.length -1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(lifeQuotes[getRandomIndex()])

  const handleNewQuote = () => {
    setQuote(lifeQuotes[getRandomIndex()])
  }

  return (
    <div className="App">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
    </div>
  )
}

export default App;
