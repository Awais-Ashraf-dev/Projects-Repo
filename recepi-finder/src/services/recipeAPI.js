// This is a placeholder implementation of the recipeAPI service.
// You should replace the code below with actual API calls or implementation.

const getRecipes = async (query) => {
    // Simulate API call delay with setTimeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Simulated response data
    const response = [
      { id: 1, title: 'Recipe 1', description: 'Description of Recipe 1', image: 'https://example.com/recipe1.jpg', sourceUrl: 'https://example.com/recipe1' },
      { id: 2, title: 'Recipe 2', description: 'Description of Recipe 2', image: 'https://example.com/recipe2.jpg', sourceUrl: 'https://example.com/recipe2' },
      { id: 3, title: 'Recipe 3', description: 'Description of Recipe 3', image: 'https://example.com/recipe3.jpg', sourceUrl: 'https://example.com/recipe3' },
    ];
  
    // Simulated filtering based on query
    const filteredRecipes = response.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
  
    return filteredRecipes;
  };
  
  export { getRecipes };
  