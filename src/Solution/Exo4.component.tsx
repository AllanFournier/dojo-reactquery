import { useState } from "react";
import { useQuery } from "react-query";
import ResultList from "./Exo4/ResultList";
import Search from "./Exo4/Search";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const fetchSearchResult = async (query: string) => {
  return fetch(`${url}?s=${query}`).then((response) => response.json());
};

export const useFetchResults = (query: string) =>
  useQuery(["search", query], () => fetchSearchResult(query), {
    enabled: false,
  });

const Exo4 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, error, data, refetch } = useFetchResults(searchQuery);

  return (
    <div className="selector">
      <Search
        refetch={refetch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ResultList isLoading={isLoading} error={error} results={data} />
    </div>
  );
};

export default Exo4;
