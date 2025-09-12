import { useRecipeStore } from "./recipeStore.js";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 rounded w-full mb-4"
    />
  );
};

export default SearchBar;
