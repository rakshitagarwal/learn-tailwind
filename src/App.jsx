import Cardsimple from "./components/cardsimple";
import Componentsimple from "./components/componentsimple";
import Lastcomp from "./components/lastcomp";
function App() {
  return (
    <div>
      <Componentsimple />
      <div className="flex flex-row my-10">
        <div className="mx-10">
          <Cardsimple />
        </div>
        <div className="mx-10">
          <Cardsimple />
        </div>
        <div className="mx-10">
          <Cardsimple />
        </div>
        <div className="mx-10">
          <Cardsimple />
        </div>
      </div>
      <Lastcomp />
    </div>
  );
}

export default App;
