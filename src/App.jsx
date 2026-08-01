import React, { useEffect, useState } from "react";
import "./app.scss";
import Home from "./pages/home/Home.jsx";
import Lenis from "lenis";
import Preloader from "./components/preloader/Preloader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) return;
    const lenis = new Lenis();

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="main">
      {/* <Preloader /> */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Home />
    </div>
  );
};

export default App;
