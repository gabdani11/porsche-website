import React, { useEffect } from "react";
import "./app.scss";
import Home from "./pages/home/Home.jsx";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="main">
      <Home />
    </div>
  );
};

export default App;
