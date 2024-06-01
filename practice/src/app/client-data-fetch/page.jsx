"use client";
import useSWR from "swr";

// useEffect Hook, useSwr Hook, with loading state
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching() {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);

  // async function fetchListOfUsers() {
  //   try {
  //     console.log("wtf");
  //     setLoading(true);
  //     const apiResponse = await fetch("http://dummyjson.com/users");
  //     const result = await apiResponse.json();

  //     if (result?.users) {
  //       setUsers(result.users);
  //       setLoading(false);
  //     }
  //     console.log("First");
  //   } catch (error) {
  //     console.log(error);
  //     setUsers([]);
  //     setLoading(false);
  //     console.log("second");
  //   }
  // }

  // useEffect(() => {
  //   fetchListOfUsers();
  // }, []);
  const { data, error, isLoading } = useSWR(
    "http://dummyjson.com/users",
    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (isLoading)
    return (
      <h3 className="font-extraboldld text-3xl">Loading users Please wait</h3>
    );

  return (
    <div className="flex items-center justify-center mb-10 flex-col">
      <h1 className="text-5xl">Client Side Data Fetching</h1>
      <ul>
        {data && data.users.length > 0
          ? data.users.map((item, index) => (
              <li key={index} className="mt-5 cursor-pointer">
                {item.firstName}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
