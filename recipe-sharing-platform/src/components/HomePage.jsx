import { Link } from "react-router-dom";
import recipes from "../data.json";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-white/10 backdrop-blur-md">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white/10 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition backdrop-blur-md"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-black hover:underline"
            >
              View Details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
