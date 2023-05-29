const Quote = require('../models/Quote');

// Get all quotes
const getAllQuotes = (req, res) => {
  Quote.find({}, (err, quotes) => {
    if (err) {
      console.error('Error retrieving quotes:', err);
      res.status(500).json({ error: 'Failed to retrieve quotes' });
    } else {
      res.json(quotes);
    }
  });
};

// Create a new quote
const createQuote = (req, res) => {
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
};

// Update a quote
const updateQuote = (req, res) => {
  const { text, author } = req.body;
  const { id } = req.params;

  Quote.findByIdAndUpdate(
    id,
    { $set: { text, author } },
    { new: true },
    (err, updatedQuote) => {
      if (err) {
        console.error('Error updating quote:', err);
        res.status(500).json({ error: 'Failed to update quote' });
      } else {
        res.json(updatedQuote);
      }
    }
  );
};

// Delete a quote
const deleteQuote = (req, res) => {
  const { id } = req.params;

  Quote.findByIdAndRemove(id, (err, removedQuote) => {
    if (err) {
      console.error('Error deleting quote:', err);
      res.status(500).json({ error: 'Failed to delete quote' });
    } else {
      res.json(removedQuote);
    }
  });
};

module.exports = {
  getAllQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
};
