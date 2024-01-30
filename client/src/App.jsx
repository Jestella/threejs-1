import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import CanvasModel from "./canvas";

import "./App.css";

function App() {
  return (
    <main className="app">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
}

export default App;
