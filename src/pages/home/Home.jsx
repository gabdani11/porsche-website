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
    const handleMouseMove = (e) => {
      gsap.to(circleRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 2,
        scale: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Specification />
      <VideoSection />
      <ImageScroll />
      <Footer />

      <div className="circle" ref={circleRef}>
        911
      </div>
    </>
  );
};

export default Home;
