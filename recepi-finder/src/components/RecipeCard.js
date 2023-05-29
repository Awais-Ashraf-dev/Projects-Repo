import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-2 text-xl font-semibold">{recipe.title}</h3>
      <p className="mt-1 text-gray-600">{recipe.description}</p>
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
