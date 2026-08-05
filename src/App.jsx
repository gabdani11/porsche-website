import React, { useEffect, useState, useCallback } from "react";
import Home from "./pages/home/Home.jsx";
import Lenis from "lenis";
import Preloader from "./components/preloader/Preloader.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    if (loading) return;
    const lenis = new Lenis();

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    ScrollTrigger.refresh();
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="main">
      {/* <Preloader /> */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <Home />
    </div>
  );
};

export default App;
