import { Loader } from "@axa-fr/react-toolkit-all";

const ResultList = ({
  isLoading,
  error,
  results,
}: {
  isLoading: boolean;
  error: any;
  results: any;
}) => {
  if (isLoading) {
    return (
      <div className="results">
        <Loader mode="get" />
      </div>
    );
  }

  if (error) {
    return <div className="results">Une erreur est survenue</div>;
  }

  if (!results || !results.drinks) {
    return null;
  }

  return (
    <div className="results">
      <div className="results__title">
        {results.drinks.length < 1 ? (
          <span>Aucun résultats pour votre recherche</span>
        ) : (
          <span>{`${results.drinks.length} résultat(s)`}</span>
        )}
      </div>
      <ul className={"results__list"}>
        {results.drinks.map(
          ({ strDrink }: { strDrink: string }, index: number) => (
            <li key={index}>
              <div className="results__item">
                <span className={"results__infos"}>{strDrink}</span>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ResultList;
