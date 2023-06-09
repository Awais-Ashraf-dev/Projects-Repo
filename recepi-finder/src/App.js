import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import RecipeFinder from './pages/RecipeFinder';

const App = () => {
  return (
    <Router>
      <Routes>
      <div>
        <Route exact path="/" element={<RecipeFinder/>} />
        {/* Add more routes for other pages */}
      </div>
      </Routes>
    </Router>
  );
};

export default App;
