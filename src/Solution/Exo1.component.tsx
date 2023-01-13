import { useEffect, useState } from "react";

type response = {
  breed: string;
};

const Exo1 = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState({ data: [] });
  const url = "https://catfact.ninja/breeds";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setError(true);
          throw Error(response.statusText);
        }
      })
      .then((jsonResponse) => {
        setData(jsonResponse);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

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

export default Exo1;
