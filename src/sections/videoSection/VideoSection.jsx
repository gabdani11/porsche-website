import React, { useEffect, useRef, useState } from "react";
import "./videosection.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VideoSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const words = [
    "The Ultimatum",
    "Ascension",
    "Unleashed",
    "Legacy",
    "Velocity",
    "Obsession",
    "Precision",
    "Apex",
    "Icon",
    "Momentum",
  ];
  const headingRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const changeWord = () => {
      gsap.to(headingRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          index = (index + 1) % words.length;

          headingRef.current.textContent = words[index];

          gsap.fromTo(
            headingRef.current,
            {
              y: 40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            },
          );
        },
      });
    };

    const interval = setInterval(changeWord, 4000);

    gsap.from(".tiresBackside", {
      scrollTrigger: {
        trigger: ".tiresBackside",
        start: "top 80%",
        end: "+=1000",
        scrub: true,
      },
      x: -200,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.from(".backsidecar", {
      scrollTrigger: {
        trigger: ".tiresBackside",
        start: "top 80%",
        end: "+=1000",
        scrub: true,
      },
      x: 200,
      duration: 1.5,
      ease: "power2.out",
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="imageContainer">
        <img
          className="backgroundShape"
          src="https://ik.imagekit.io/rhuubreuu/porsche-website/shape1.webp?updatedAt=1778355034229"
          alt="backgroundShape"
        />
        <div className="imageFlex ">
          <div>
            <img
              className="tiresBackside"
              src="https://ik.imagekit.io/rhuubreuu/porsche-website/tireimg.webp?updatedAt=1778355033842"
              alt="tires"
            />
          </div>
          <div>
            <img
              className="backsidecar"
              src="https://ik.imagekit.io/rhuubreuu/porsche-website/porscheback.webp?updatedAt=1778355033811"
              alt="backsidecar"
            />
          </div>
        </div>
      </div>
      <div className="videoContainer">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="video"
          src="/Porsche911vid.mp4"
        ></video>
        <div className="videoHeading">
          <h2 ref={headingRef}>{words[0]}</h2>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
