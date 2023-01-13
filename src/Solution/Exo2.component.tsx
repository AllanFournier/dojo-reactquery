import { useQuery } from "react-query";

type response = {
  breed: string;
};

const Exo2 = () => {
  const url = "https://catfact.ninja/breeds";
  const { isLoading, isError, data } = useQuery("cat", () =>
    fetch(url).then((response) => response.json())
  );

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

export default Exo2;
