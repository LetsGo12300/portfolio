import Navbar from './components/Navbar';
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Anne Catherine V.";
  });

  return (
    <>
    <Navbar/>
    </>
  );
};

export default App;