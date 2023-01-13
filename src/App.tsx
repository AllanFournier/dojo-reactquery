import { Header, Name, HeaderTitle } from "@axa-fr/react-toolkit-all";
import Exo from "./Exercice/Exo4.component";
import Exo4 from "./Solution/Exo4.component";
import logo from "./logo-axa.svg";
import "@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css";
import "@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header>
        <Name
          title="React Query"
          img={logo}
          alt="Logo AXA"
          onClick={() => {}}
        />
      </Header>
      <HeaderTitle title="Dojo" />
      <div className="container">
        <Exo />
      </div>
    </>
  );
}

export default App;
