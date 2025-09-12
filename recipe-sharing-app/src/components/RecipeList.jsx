import { useRecipeStore } from "./recipeStore.js";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {" "}
          {/* ✅ using recipe.id */}
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>{" "}
            {/* ✅ using recipe.id */}
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
