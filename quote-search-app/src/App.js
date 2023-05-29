import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('/quotes');
      setQuotes(response.data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  return (
    <div>
      <h1>Quote Generator</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote._id}>
            <strong>{quote.text}</strong> - {quote.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
