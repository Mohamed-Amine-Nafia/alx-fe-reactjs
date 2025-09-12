import { useRecipeStore } from "./recipeStore.js";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Compute favorite recipes locally
  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean); // remove undefined if recipe not found

  if (favoriteRecipes.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} className="border p-2 mb-2 rounded">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
