import { useEffect, useState } from "react";
import jsonData from "../data.json";

function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData);
    console.log(jsonData);
  }, []);

  return (
    <div className="container max-w-[800px]  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      {data.map((recipe) => (
        <article
          className="bg-blue-300 p-6 rounded-lg hover:scale-105 transition duration-300 ease shadow-2xl "
          key={recipe.id}
        >
          {recipe.image && <img src={recipe.image} alt={recipe.title} />}
          <h1 className="text-2xl font-bold my-3">{recipe.title}</h1>
          <p className="text-lg font-semibold">{recipe.summary}</p>
        </article>
      ))}
    </div>
  );
}

export default HomePage;
