import React from "react";
import { Route, Routes } from "react-router";
import ClonePage from "./components/ClonePage";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<ClonePage />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
