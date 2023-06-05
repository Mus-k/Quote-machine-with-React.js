import React from 'react'

export const Quote=({quote, handleNewQuote})=>{

    return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <h2 id='author'>{quote.author}</h2>
      
      <div class='actions'>
        <button
          id='new-quote'
          class='button'
        onClick={handleNewQuote}>
        
        New Quote
        </button>
        
        <a href='twitter.com/intent/tweet'
          id='tweet-quote'
          target="_blank">
          
          Tweet
        </a>
      </div>
      </div>)
    
    }
    
