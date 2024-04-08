import React, { useEffect, useState } from "react";
import './quote.css'

function QuoteGenerateApp() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quoteHistory, setQuoteHistory] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const newQuote = data[randomIndex].text;
        const newAuthor = data[randomIndex].author || "Unknown";
        setQuote(newQuote);
        setAuthor(newAuthor);
        setQuoteHistory(prevHistory => [{ quote: newQuote, author: newAuthor }, ...prevHistory]);
      })
      .catch(error => console.error('Error fetching quote:', error));
  };

  const handleNewQuote = () => {
    fetchQuote();
  }

  return (
    <div className="App">
        {/* <h1>Random Quote Generator</h1> */}
      <div className="quote-container">
        <blockquote className="quote-text">
          <p>"{quote}"</p>
          <cite>- {author}</cite>
        </blockquote>
        <button className="new-quote-button" onClick={handleNewQuote}>New Quote</button>
      </div>
      <div className="quote-history">
        <h2>Quote History</h2>
        <ul>
          {quoteHistory.map((item, index) => (
            <li key={index}>
              <blockquote>
                <p>"{item.quote}"</p>
                <cite>- {item.author}</cite>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuoteGenerateApp;
