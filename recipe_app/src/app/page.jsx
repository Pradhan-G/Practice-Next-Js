import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full text-center">
      <h1 className="text-5xl mb-10">Recipe App</h1>
      <Link href={"/recipe-list"} className="text-2xl">
        Explore
      </Link>
    </div>
  );
};

export default LandingPage;
