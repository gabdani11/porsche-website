import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./hero.scss";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.from(".heroImg1", {
      duration: 1,
      x: -100,
      autoAlpha: 0,
      ease: "power2.out",
    });
    gsap.from(".heroImg2", {
      duration: 1,
      y: -100,
      autoAlpha: 0,
      ease: "power2.out",
    });
    gsap.from(".heroImg3", {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      ease: "power2.out",
    });
    gsap.from(".heroImg4", {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      ease: "power2.out",
      delay: 0.5,
    });
  }, []);

  return (
    <section className="heroSection">
      <Navbar />
      <div className="centerContainer">
        <div className="imgContainer">
          <img
            className="heroImg1"
            src="https://ik.imagekit.io/rhuubreuu/porsche-website/cosmos_382284989.webp"
            alt="heroSectionImg"
            fetchPriority="high"
          />
          <img
            className="heroImg2"
            src="https://ik.imagekit.io/rhuubreuu/porsche-website/cosmos_382284989.webp"
            alt="heroSectionImg"
            fetchPriority="high"
          />
          <img
            className="heroImg3"
            src="https://ik.imagekit.io/rhuubreuu/porsche-website/cosmos_1606437539.webp"
            alt="heroSectionImg"
            fetchPriority="high"
          />
          <img
            className="heroImg4"
            src="https://ik.imagekit.io/rhuubreuu/porsche-website/cosmos_1674367478.webp"
            alt="heroSectionImg"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="subHeading">
        <h1>Porsche</h1>
        <img src="/Porsche.svg" alt="porsche" />
      </div>
    </section>
  );
};

export default Hero;
