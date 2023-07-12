import React from "react";
import { Route, Routes } from "react-router";
import ClonePage from "./components/ClonePage";
import Index from "./components/Main/Index";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<ClonePage />} />
          <Route path="/main" element={<Index />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
