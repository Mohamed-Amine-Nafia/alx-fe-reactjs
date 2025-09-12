import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore.js";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-2">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="border p-2 mb-2 rounded">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default RecommendationsList;
