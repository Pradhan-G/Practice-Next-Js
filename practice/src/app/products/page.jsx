"use client";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();
  function handleClick() {
    router.back();
  }
  return (
    <div>
      <h1 className="text-[50px]">This is the localhost:3000/products route</h1>
      <button
        onClick={handleClick}
        className="w-64 h-16 bg-blue-400 rounded-lg hover:bg-blue-500"
      >
        Go Back
      </button>
    </div>
  );
};

export default Products;
