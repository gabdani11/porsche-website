import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./hero.scss";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out", delay: 0.5 },
    });

    tl.from(".heroImg1", {
      y: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .from(
        ".heroImg2",
        {
          y: -200,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.2",
      )
      .from(
        ".heroImg3",
        {
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.2",
      )
      .from(
        ".heroImg4",
        {
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.2",
      );
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
