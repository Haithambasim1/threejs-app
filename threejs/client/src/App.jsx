import CanvsModel from "./canvas/index";
import Custmizer from "./pages/Custmizer";
import Home from "./pages/Home";
function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvsModel />
      <Custmizer />
    </main>
  );
}

export default App;
