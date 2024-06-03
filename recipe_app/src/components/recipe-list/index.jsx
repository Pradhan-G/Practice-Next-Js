import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const RecipeList = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="w-full text-center">
      <h1 className="text-5xl mb-10">This is the Recipe List Page</h1>
      <Link href={"/"} className="text-2xl">
        Go Back
      </Link>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {recipes && recipes.length > 0
          ? recipes.map((e, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{e.name}</CardTitle>
                  <CardDescription>Difficulty : {e.difficulty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    {e.instructions.map((elem, ind) => (
                      <h1 key={ind}>{elem}</h1>
                    ))}
                  </p>
                </CardContent>
                <CardFooter className="min-w-full text-center">
                  <p>{e.cuisine}</p>
                </CardFooter>
              </Card>
            ))
          : null}
      </div>

      <div className=""></div>
    </div>
  );
};

export default RecipeList;
