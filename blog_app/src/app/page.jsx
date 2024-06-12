import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 to-purple-700">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold mb-4">
          Browse our Blog Collection
        </h2>
        <Link
          href={"/blogs"}
          className="bg-white px-10 py-5 text-sm text-blue-700 font-semibold items-center rounded"
        >
          {" "}
          Explore Collection
        </Link>
      </div>
    </div>
  );
}
