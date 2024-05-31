import Link from "next/link";

const page = () => {
  return (
    <div className="p-36">
      <h1 className="text-[50px] mb-10">Welcome to Next Js Practice</h1>
      <Link
        href={"/membership"}
        className="text-white font-bold hover:bg-blue-800 p-4 border-2 border-black bg-blue-600 mr-10 rounded-lg"
      >
        Membership
      </Link>
      <Link
        href={"/products"}
        className="text-white font-bold hover:bg-blue-800  p-4 border-2 border-black bg-blue-600 rounded-lg"
      >
        Products
      </Link>
    </div>
  );
};

export default page;
