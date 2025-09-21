import axios from "axios";

// Fetch users with advanced search criteria
export async function fetchUserData({
  username,
  location = "",
  minRepos = "",
  page = 1,
}) {
  try {
    // Build the query string
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    // Search API call
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        query
      )}&page=${page}&per_page=10`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`, // optional
        },
      }
    );

    return data; // data.items contains the list of users
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
}

// Fetch detailed info for each user
export async function fetchUserDetails(users) {
  try {
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const { data } = await axios.get(user.url, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        });
        return data;
      })
    );
    return detailedUsers;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return [];
  }
}
