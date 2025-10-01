import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!title.trim()) formErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      formErrors.ingredients = "Please enter at least 2 ingredients.";
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required.";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"),
        instructions: steps.split("\n"),
      };
      console.log("Submitted Recipe:", newRecipe);

      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center container  bg-white/10 backdrop-blur-md p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add a New Recipe
        </h2>

        <div className="mb-4">
          <label className="block font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            className={`w-full border rounded-lg px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter ingredients..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            className={`w-full border rounded-lg px-3 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter preparation steps..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
        <Link to="/">Back To Home</Link>
      </form>
    </div>
  );
}

export default AddRecipeForm;
