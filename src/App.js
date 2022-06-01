import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Anne Catherine V.";
  });

  const Divider = () => {
    return (
      <hr
        style={{
          color: '#fafafa',
          backgroundColor: '#fafafa',
          height: 3,
          width: '85%',
          margin: '80px auto',
        }}
      />
    )
  };

  return (
    <>
      <Navbar/>
      <Home/>
      <Divider/>
      <Projects/>
      <Divider/>
    </>
  );
};

export default App;