// using fetch, but first we need a dummy data api which we can get from dummy json

import Link from "next/link";

async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("http://dummyjson.com/users"); // Getting the Data in Non readable format
    const result = await apiResponse.json(); // Converting the Data in the readable format
    return result.users; // returning so that we can use it later
  } catch (error) {
    throw new Error(error); // Catching error if any
  }
}

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers(); // getting the users list

  return (
    <div className="flex flex-col gap-10 bg-slate-600 text-white items-center justify-center ">
      <h1 className="text-5xl">Server Side Data Fetching : User List Page</h1>
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user, index) => (
              <li key={index} className="text-xl font-bold mb-5 cursor-pointer">
                <Link href={`/server-data-fetch/${user.id}`}>
                  {" "}
                  {user.firstName} {user.lastName}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
