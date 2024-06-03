import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecipeList = ({ recipes }) => {
  //   console.log(recipes);
  return (
    <div className="w-full text-center bg-slate-500 pt-[0.1px] text-white">
      <h1 className="text-5xl mb-10  mt-10">This is the Recipe List Page</h1>
      <Link
        href={"/"}
        className=" rounded bg-slate-700 hover:bg-slate-900 text-white py-4 px-3  text-xl font-extrabold "
      >
        Home Page
      </Link>
      <div className="p-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        {recipes && recipes.length > 0
          ? recipes.map((e, index) => (
              <Link href={`/recipe-list/${e.id}`} key={index}>
                <Card className="hover:scale-[1.01] ">
                  <CardHeader>
                    <CardTitle>{e.name}</CardTitle>
                    <CardDescription>
                      Difficulty : {e.difficulty}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <section>
                      {e.instructions.map((elem, ind) => (
                        <h1 key={ind}>{elem}</h1>
                      ))}
                    </section>
                  </CardContent>
                  <CardFooter className="min-w-full text-center">
                    <p>{e.cuisine}</p>
                  </CardFooter>
                </Card>
              </Link>
            ))
          : null}
      </div>

      <div className=""></div>
    </div>
  );
};

export default RecipeList;
