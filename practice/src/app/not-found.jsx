import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100vh] w-[100vw]  flex items-center justify-center bg-zinc-600 text-white gap-10">
      <h1 className="text-5xl"> This Page Does not exist. </h1>
      <Link
        href={"/"}
        className="text-white font-bold hover:bg-blue-800 p-4 border-2 border-black bg-blue-600 mr-10 rounded-lg"
      >
        Go Back
      </Link>
    </div>
  );
}
