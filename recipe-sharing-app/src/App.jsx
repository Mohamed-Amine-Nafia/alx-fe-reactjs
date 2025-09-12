import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="p-4 max-w-xl mx-auto">
              <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>

              <AddRecipeForm />

              <SearchBar />

              <RecipeList />

              <FavoritesList />

              <RecommendationsList />
            </div>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}
