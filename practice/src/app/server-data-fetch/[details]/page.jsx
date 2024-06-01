async function getAllDetails(currentUserID) {
  try {
    const apiResponse = await fetch(
      `http://dummyjson.com/users/${currentUserID}`
    );
    const result = await apiResponse.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function UserDetails({ params }) {
  const getDetails = await getAllDetails(params.details);
  console.log(getDetails);
  return (
    <div className="text-center">
      <h1 className="text-5xl w-[100vw] ">This is the user Details Page</h1>
      <p className="text-xl text-gray-600">{getDetails?.firstName}</p>
      <p className="text-xl text-gray-600">{getDetails?.lastName}</p>
      <p className="text-xl text-gray-600">{getDetails?.age}</p>
      <p className="text-xl text-gray-600">{getDetails?.gender}</p>
      <p className="text-xl text-gray-600">{getDetails?.phone}</p>
      <p className="text-xl text-gray-600">{getDetails?.bloodgroup}</p>
      <p className="text-xl text-gray-600">{getDetails?.height}</p>
      <p className="text-xl text-gray-600">{getDetails?.weight}</p>
    </div>
  );
}
