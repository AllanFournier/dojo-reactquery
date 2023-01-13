import { ChangeEvent } from "react";

const Search = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Function;
}) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className="search-form">
      <input
        type="text"
        value={searchQuery}
        onChange={handleOnChange}
        placeholder="Recherche"
        className="search-input"
      />
      <button
        title="Effacer"
        type="button"
        onClick={() => {
          setSearchQuery("");
        }}
        className="search-button-reset"
      >
        <i className="glyphicon glyphicon-remove" />
      </button>
      <button
        title="Envoyer"
        type="submit"
        className="search-button-send"
        id="submit"
        name="submit"
      >
        <i className="glyphicon glyphicon-search" />
      </button>
    </form>
  );
};

export default Search;
