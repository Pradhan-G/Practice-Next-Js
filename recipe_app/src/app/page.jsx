import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-400 text-center flex flex-col items-center justify-center ">
      <h1 className="text-5xl mb-10 text-white">Recipe App</h1>
      <Link
        href={"/recipe-list"}
        className=" rounded bg-slate-700 hover:bg-slate-900 text-white py-4 px-3  text-xl font-extrabold "
      >
        Explore
      </Link>
    </div>
  );
};

export default LandingPage;
