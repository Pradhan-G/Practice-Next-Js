import Link from "next/link";

const page = () => {
  return (
    <div className="p-36">
      <h1 className="text-[50px] mb-10">Welcome to Next Js Practice</h1>
      <Link
        href={"/membership"}
        className="text-green-400 hover:text-green-600 p-4 border-2 border-black bg-cyan-200 mr-10"
      >
        Membership
      </Link>
      <Link
        href={"/products"}
        className="text-green-400 hover:text-green-600 p-4 border-2 border-black bg-cyan-200"
      >
        Products
      </Link>
    </div>
  );
};

export default page;
