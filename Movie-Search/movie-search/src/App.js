import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Card from './components/card/Card';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>

        </Routes>
      </Router>
    </div> 
  );
}

export default App;