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
