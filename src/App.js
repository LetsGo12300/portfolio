import Navbar from './components/Navbar';
import Home from './components/Home';
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
          margin: 'auto',
          width: '85%'
        }}
      />
    )
  };

  return (
    <>
      <Navbar/>
      <Home/>
      <Divider/>
    </>
  );
};

export default App;