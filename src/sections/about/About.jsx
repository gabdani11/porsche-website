import React from "react";
import "./about.scss";
import { timeline } from "./data.js";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useEffect(() => {
    let split = SplitText.create(".aboutParagraph", { type: "words, chars" });
    gsap.from(split.words, {
      scrollTrigger: {
        trigger: ".aboutParagraph",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 0.3,
      y: 100, // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05, // 0.05 seconds between each
    });
  }, []);

  return (
    <div className="about">
      <h4>Our legacy</h4>
      <p className="aboutParagraph">
        Founded in <span>1931</span> by Ferdinand <span>Porsche</span>, Porsche
        represents precision engineering, <span>iconic design</span>, and
        unmatched driving performance. From racetracks to city roads, every
        Porsche is built to deliver an <span>extraordinary</span> experience.
      </p>
      <div className="carImageContainer">
        <img
          className="aboutPorscheImg"
          src="https://res.cloudinary.com/j7kdhzei/image/upload/v1785604434/1396149_1_1_mwrahp.webp"
          alt="Porsche Car Top View"
          loading="lazy"
          decoded="async"
          width={1713}
          height={1509}
        />
        <img className="frame1Img" src="/frame1.webp" alt="blackframe" />
        <h4 id="aboutBottomTitle">
          Motorsport<span>legacy</span>
        </h4>
      </div>
      <div className="yearList">
        {timeline.map((data, index) => {
          return (
            <div className="box box1" key={index}>
              <div className="visible">
                <h4>{data.year}</h4>
                <p>{data.title}</p>
              </div>
              <div className="reveal">
                <p>{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
