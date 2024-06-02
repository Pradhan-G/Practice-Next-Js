import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full text-center">
      <h1 className="text-5xl mb-10">This Page Does not Exist </h1>
      <Link href={"/"} className="text-2xl">
        Go Back
      </Link>
    </div>
  );
}
