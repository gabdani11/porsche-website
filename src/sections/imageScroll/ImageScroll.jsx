import React, { useEffect } from "react";
import "./imageScroll.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PorscheSvg from "./PorscheSvg";
const imageScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".imageScrollContainer", {
      x: 500,
      y: -200,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".imageScroll",
        start: "10% 65%",
        end: "+=800",
        scrub: true,
        
      },
    });
    gsap.to(".logobar", {
      x: -545,
      duration: 4.5,
      ease: "none",
      repeat: -1,
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <section className="imageScroll">
      <div className="imageScrollContainer">
        <img
          className="imageScrollImg"
          src="https://res.cloudinary.com/j7kdhzei/image/upload/v1785489238/cosmos_530523457_2_sdea7o.webp"
          alt="Porche images"
          decoding="async"
          loading="lazy"
          width={1080}
          height={1350}
        />
        <img
          className="imageScrollImg2"
          src="https://res.cloudinary.com/j7kdhzei/image/upload/v1785483919/cosmos_1504923408_nv3j44.webp"
          alt="Porche Preview"
          decoding="async"
          loading="lazy"
          width={1124}
          height={2000}
        />
        <img
          className="imageScrollImg3"
          src="https://res.cloudinary.com/j7kdhzei/image/upload/v1785491102/cosmos_57212984_vmqgrr.webp"
          alt="Porche Preview"
          decoding="async"
          loading="lazy"
          width={1080}
          height={1350}
        />
        <img
          className="imageScrollImg4"
          src="https://res.cloudinary.com/j7kdhzei/image/upload/v1785491505/cosmos_1890056211_xvmsdf.webp"
          alt="Porche Preview"
          decoding="async"
          loading="lazy"
          width={375}
          height={731}
        />
        <img
          className="imageScrollImg5"
          src="https://res.cloudinary.com/j7kdhzei/image/upload/v1785491319/cosmos_389259122_ea9tel.webp"
          alt="Porche Preview"
          decoding="async"
          width={1080}
          height={1350}
        />
      </div>
      <div className="logobar">
        {Array.from({ length: 10 }, (_, index) => (
          <React.Fragment key={index}>
            <PorscheSvg />
            <h3>Porsche</h3>
            <PorscheSvg />
            <h3 className="maloneyFont">Porsche</h3>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default imageScroll;
