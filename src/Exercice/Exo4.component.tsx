import { useState } from "react";
import Search from "./Exo4/Search";

//utiliser https://www.thecocktaildb.com/api/json/v1/1/search.php?s=   pour rechercher la liste des boissons

const Exo4 = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="selector">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default Exo4;
