import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import CreateGame from "./components/CreateGame";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateGame />
      <Summary />
    </div>
  );
}

export default App;
