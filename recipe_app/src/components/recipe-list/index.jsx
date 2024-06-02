import Link from "next/link";

const RecipeList = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="w-full text-center">
      <h1 className="text-5xl mb-10">This is the Recipe List Page</h1>
      <Link href={"/"} className="text-2xl">
        Go Back
      </Link>
    </div>
  );
};

export default RecipeList;
