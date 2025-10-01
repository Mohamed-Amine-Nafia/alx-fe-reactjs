import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selected = recipes.find((r) => r.id.toString() === id);
    setRecipe(selected);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-semibold">Recipe not found.</p>
        <Link to="/" className="mt-4 text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl bg-white/10 backdrop-blur-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
      />

      <div className="bg-white/10 backdrop-blur-md text-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 text-black">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white/10 backdrop-blur-md text-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-3 text-black">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
