import React, { useEffect, useRef } from "react";
import Hero from "../../sections/hero/Hero.jsx";
import About from "../../sections/about/About.jsx";
import Specification from "../../sections/specification/Specification.jsx";
import VideoSection from "../../sections/videoSection/VideoSection.jsx";
import ImageScroll from "../../sections/imageScroll/ImageScroll.jsx";
import "./home.scss";
import gsap from "gsap";
import Footer from "../../sections/footer/Footer.jsx";

const Home = () => {
  const circleRef = useRef(null);
  useEffect(() => {
    const xTo = gsap.quickTo(circleRef.current, "x", {
      duration: 0.3,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(circleRef.current, "y", {
      duration: 0.3,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <main>
        <Hero />
        <About />
        <Specification />
        <VideoSection />
        <ImageScroll />
      </main>
      <Footer />

      <div className="circle" ref={circleRef}>
        911
      </div>
    </>
  );
};

export default Home;
