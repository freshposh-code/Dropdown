import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mens from "./components/pages/Mens";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="mens" exact element={<Mens />}></Route>
      </Routes>
    </div>
  );
};

export default App;
