import axios from "axios";

export async function fetchUserData(username) {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}
