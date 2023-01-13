import { useQuery } from "react-query";

type response = {
  breed: string;
};

const Exo3 = () => {
  const url = "https://catfact.ninja/breeds";
  const getData = () => fetch(url).then((response) => response.json());

  const { isLoading, isError, data } = useQuery("", getData);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Une erreur est survenue...</span>;
  }

  return (
    <>
      {data.data.map((field: response, index: number) => (
        <div key={index}> {field.breed} </div>
      ))}
    </>
  );
};

export default Exo3;

//Retry

//  const result = useQuery(["todos", 1], fetchTodoListPage, {
//    retry: 10, // Will retry failed requests 10 times before displaying an error
//    retryDelay: 1000,
//  });

// Dependent Queries

//const { isIdle, data: projects } = useQuery(
//    ["projects", userId],
//    getProjectsByUser,
//    {
//      // The query will not execute until the userId exists
//      enabled: !!userId,
//    }
//  );

// Background Queries

//  const {
//    status,
//    data: todos,
//    error,
//    isFetching,
//  } = useQuery("todos", fetchTodos);

//    {isFetching ? <div>Refreshing...</div> : null;}

// Pausing Queries

//  const {  refetch } =
//    useQuery("todos", fetchTodoList, {
//      enabled: false,
//    });

//    <button onClick={() => refetch()}>Fetch Todos</button>;
