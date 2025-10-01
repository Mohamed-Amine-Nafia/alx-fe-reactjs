import { useEffect, useState } from "react";
import jsonData from "../data.json";

function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData);
    console.log(jsonData);
  }, []);

  return (
    <div className="container min-h-2/3  mx-auto bg-white/10 backdrop-blur-md grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-4  md:p-10 rounded-3xl">
      {data.map((recipe) => (
        <article
          className="bg-white/10 backdrop-blur-xl min-h-80 p-8 rounded-lg hover:scale-105 transition duration-300 ease shadow-2xl "
          key={recipe.id}
        >
          {recipe.image && (
            <img
              className="rounded-full sm:w-28 md:w-36 lg:w-44"
              src={recipe.image}
              alt={recipe.title}
            />
          )}
          <h1 className="text-2xl font-bold mt-6">{recipe.title}</h1>
          <p className="text-lg font-semibold mt-3">{recipe.summary}</p>
        </article>
      ))}
    </div>
  );
}

export default HomePage;
