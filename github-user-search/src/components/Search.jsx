import { useState } from "react";
import { fetchUserData, fetchUserDetails } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    const data = await fetchUserData({ username, location, minRepos, page: 1 });

    if (data && data.items.length > 0) {
      const detailedUsers = await fetchUserDetails(data.items);
      setUsers(detailedUsers);
      setTotalCount(data.total_count);
    } else {
      setError("No users match the search criteria");
    }

    setLoading(false);
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    const data = await fetchUserData({
      username,
      location,
      minRepos,
      page: nextPage,
    });
    if (data && data.items.length > 0) {
      const detailedUsers = await fetchUserDetails(data.items);
      setUsers((prev) => [...prev, ...detailedUsers]);
      setPage(nextPage);
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full bg-slate-100 text-black py-2 px-3 rounded-sm"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="w-full bg-slate-100 text-black py-2 px-3 rounded-sm"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repos (optional)"
          className="w-full bg-slate-100 text-black py-2 px-3 rounded-sm"
        />
        <button
          type="submit"
          className="bg-slate-900 text-white py-1 px-3 rounded-sm"
        >
          Search
        </button>
      </form>

      <div className="w-full mt-5 flex flex-col gap-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {users.map((user) => (
          <div
            key={user.id}
            className="w-full bg-slate-200 flex mt-2 rounded-sm p-5 items-center"
          >
            <img
              className="rounded-full border-4 border-slate-900"
              src={user.avatar_url}
              alt={user.login}
              width={100}
            />
            <div className="mx-4 flex flex-col">
              <p className="text-lg font-medium">{user.login}</p>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repos: {user.public_repos || 0}</p>
            </div>
            <a
              className="bg-slate-900 text-white py-1 px-3 rounded-sm ml-auto"
              href={user.html_url}
              target="_blank"
            >
              View Profile
            </a>
          </div>
        ))}

        {users.length < totalCount && (
          <button
            onClick={loadMore}
            className="bg-gray-300 mt-4 py-1 px-3 rounded-sm"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
