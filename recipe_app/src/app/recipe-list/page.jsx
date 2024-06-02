import RecipeList from "@/components/recipe-list";

async function getListOfRecipes() {
  const apiResponse = await fetch("https://dummyjson.com/recipes");
  const data = await apiResponse.json();
  return data.recipes;
}

export default async function Recipes() {
  const recipes = await getListOfRecipes();

  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
}
