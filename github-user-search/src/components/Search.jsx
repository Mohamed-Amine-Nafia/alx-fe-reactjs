import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    const data = await fetchUserData(username);

    if (data) {
      setUserData(data);
    } else {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="w-1/2">
      <form onSubmit={handleSubmit} className="w-full flex gap-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full bg-slate-100 text-black py-2 px-3 rounded-sm "
        />
        <button
          type="submit"
          className="bg-slate-900 text-white py-1 px-3 rounded-sm"
        >
          Search
        </button>
      </form>

      <div className="w-full">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
          <div className="w-full bg-slate-200 flex mt-10 rounded-sm p-5 items-center">
            <img
              className="rounded-full border-4 border-slate-900"
              src={userData.avatar_url}
              alt={userData.login}
              width={100}
            />
            <p className="mx-4 text-lg font-medium">{userData.login}</p>
            <a
              className="bg-slate-900 text-white py-1 px-3 rounded-sm"
              href={userData.html_url}
              target="_blank"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
