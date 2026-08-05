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
            src="https://res.cloudinary.com/j7kdhzei/image/upload/w_auto,dpr_auto,q_auto,f_auto/v1785604086/cosmos_382284989_1_1_qm75hf.webp"
            alt="porsche hero image"
            fetchpriority="high"
            decoding="async"
            width={1080}
            height={1350}
          />
          <img
            className="heroImg2"
            src="https://res.cloudinary.com/j7kdhzei/image/upload/w_auto,dpr_auto,q_auto,f_auto/v1785604086/cosmos_382284989_1_1_qm75hf.webp"
            alt="porsche hero image"
            fetchpriority="high"
            decoding="async"
            width={1080}
            height={1350}
          />
          <img
            className="heroImg3"
            src="https://res.cloudinary.com/j7kdhzei/image/upload/v1785604435/cosmos_1606437539_1_u50ovi.webp"
            alt="heroSectionImg"
            fetchpriority="high"
            decoding="async"
            width={1080}
            height={1080}
          />
          <img
            className="heroImg4"
            src="https://res.cloudinary.com/j7kdhzei/image/upload/v1785604435/cosmos_1674367478_1_hbd6p4.webp"
            alt="heroSectionImg"
            fetchpriority="high"
            decoding="async"
            width={1080}
            height={1080}
          />
        </div>
      </div>
      <div className="subHeading">
        <h1>Porsche</h1>
        <h2 className="heroTitlestyle">Porsche</h2>
      </div>
    </section>
  );
};

export default Hero;
