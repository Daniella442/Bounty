import React, { useEffect, useState } from 'react';
import quotes from './quotes.json';

export default function MyCustomWidget() {
  const [quote, setQuote] = useState(null);
  const [quoteType, setQuoteType] = useState('default');

  useEffect(() => {
    fetchRandomQuote();
  }, [quoteType]);

  const fetchRandomQuote = () => {
    let availableQuotes = quotes.default;
    if (quoteType !== 'default' && quotes[quoteType]) {
      availableQuotes = quotes[quoteType];
    }
    if (availableQuotes && availableQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuotes.length);
      setQuote(availableQuotes[randomIndex].quote);
    }
  };

  const handleWidgetClick = () => {
    fetchRandomQuote();
  };

  const handleQuoteTypeChange = (event) => {
    setQuoteType(event.target.value);
  };

  return (
    <div className="my-custom-widget" onClick={handleWidgetClick}>
      <select value={quoteType} onChange={handleQuoteTypeChange}>
        <option value="default">Default</option>
        <option value="inspiration">Inspiration</option>
        <option value="love">Love</option>
        <option value="friendship">Friendship</option>
        <option value="success">Success</option>
        <option value="life">Life</option>
        <option value="wisdom">Wisdom</option>
        <option value="happiness">Happiness</option>
        <option value="motivation">Motivation</option>
      </select>
      {quote && (
        <>
          <p className="quote-text">{quote}</p>
        </>
      )}
    </div>
  );
}
