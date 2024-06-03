import Link from "next/link";

export default async function RecipeDetails({ params }) {
  const apiResponse = await fetch(
    `https://dummyjson.com/recipes/${params.details}`
  );
  const data = await apiResponse.json();

  return (
    <div className="flex flex-col p-10 w-[100vw] items-center bg-slate-500">
      <section>
        <Link
          href={"/recipe-list"}
          className=" rounded bg-slate-700 hover:bg-slate-900 text-white py-10 px-9  left-72 top-[50%] fixed text-xl font-extrabold"
        >
          Go Back to Recipes
        </Link>
      </section>
      <section className="text-left border-l-4 border-slate-800 pl-7">
        <img
          src={`${data.image}`}
          alt=""
          width={"400px"}
          className="rounded-3xl"
        />
        <h1 className="text-4xl mt-2 text-slate-800">Name : </h1>{" "}
        <h2 className="text-lg text-slate-400">{data.name}</h2>
        <h1 className="text-4xl mt-2 text-slate-800">Ingredient : </h1>{" "}
        <section className="text-lg text-slate-400">
          <ul>
            {data.ingredients.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </section>
        <h1 className="text-4xl mt-2 text-slate-800">Instructions : </h1>{" "}
        <section className="text-lg text-slate-400">
          <ul>
            {data.instructions.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </section>
        <h1 className="text-4xl mt-2 text-slate-800">Rating : </h1>{" "}
        <h2 className="text-lg text-slate-400">{data.rating}</h2>
        <h1 className="text-4xl mt-2 text-slate-800">Cuisine : </h1>{" "}
        <h2 className="text-lg text-slate-400">{data.cuisine}</h2>
        <h1 className="text-4xl mt-2 text-slate-800">
          Preparation Time (minutes) :{" "}
        </h1>{" "}
        <h2 className="text-lg text-slate-400">{data.prepTimeMinutes}</h2>
        <h1 className="text-4xl mt-2 text-slate-800">
          Cooking Time (minutes) :{" "}
        </h1>{" "}
        <h2 className="text-lg text-slate-400">{data.cookTimeMinutes}</h2>
      </section>
    </div>
  );
}
