import axios from 'axios';

const BASE_URL = '/quotes';

const getAllQuotes = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
};

const createQuote = async (quote) => {
  try {
    const response = await axios.post(BASE_URL, quote);
    return response.data;
  } catch (error) {
    console.error('Error creating quote:', error);
    throw error;
  }
};

const updateQuote = async (id, quote) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, quote);
    return response.data;
  } catch (error) {
    console.error('Error updating quote:', error);
    throw error;
  }
};

const deleteQuote = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting quote:', error);
    throw error;
  }
};

export {
  getAllQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
};
