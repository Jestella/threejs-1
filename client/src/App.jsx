import React, { useState } from "react";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import CanvasModel from "./canvas";

import "./App.css";

function App() {
  const [showHome, setShowHome] = useState(true);

  const handleStartButtonClick = () => {
    setShowHome(false);
  };

  const handleGoBackButtonClick = () => {
    setShowHome(true);
  };

  return (
    <main>
      {showHome ? (
        <Home onStartButtonClick={handleStartButtonClick} />
      ) : (
        <Customizer onGoBack={handleGoBackButtonClick} />
      )}
      <CanvasModel />
    </main>
  );
}

export default App;
