const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/quote-generator', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Quote Model
const Quote = mongoose.model('Quote', {
  text: String,
  author: String,
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Quote Generator API');
});

app.get('/quotes', (req, res) => {
  Quote.find({}, (err, quotes) => {
    if (err) {
      console.error('Error retrieving quotes:', err);
      res.status(500).json({ error: 'Failed to retrieve quotes' });
    } else {
      res.json(quotes);
    }
  });
});

app.post('/quotes', (req, res) => {
  const { text, author } = req.body;

  const newQuote = new Quote({ text, author });

  newQuote.save((err, savedQuote) => {
    if (err) {
      console.error('Error saving quote:', err);
      res.status(500).json({ error: 'Failed to save quote' });
    } else {
      res.json(savedQuote);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
