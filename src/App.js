import Navbar from './components/Navbar';
import Home from './components/Home';
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Anne Catherine V.";
  });

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  );
};

export default App;