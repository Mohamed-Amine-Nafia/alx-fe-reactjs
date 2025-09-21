import { useRecipeStore } from "./recipeStore.js";
import { useParams, Link } from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = recipe ? favorites.includes(recipe.id) : false;

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{recipe.title}</h1>
      <p className="my-2">{recipe.description}</p>

      <button
        onClick={() =>
          isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
        }
        className="bg-yellow-400 px-2 py-1 rounded mt-2"
      >
        {isFavorite ? "Unfavorite" : "Add to Favorites"}
      </button>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipeId} />

      <Link to="/" className="inline-block mt-4 text-blue-600">
        ⬅ Back to Recipes
      </Link>
    </div>
  );
};

export default RecipeDetails;
