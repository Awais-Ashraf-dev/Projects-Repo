import React, { useState } from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import RecipeList from '../components/RecipeList';
import { getRecipes } from '../services/recipeAPI';

const RecipeFinder = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const response = await getRecipes(query);
    setRecipes(response);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <SearchForm onSearch={handleSearch} />
        {recipes.length > 0 ? (
          <RecipeList recipes={recipes} />
        ) : (
          <p className="text-center mt-8">No recipes found. Try searching for something else.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeFinder;
