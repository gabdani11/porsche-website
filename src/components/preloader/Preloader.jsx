import React, { useEffect } from "react";
import gsap from "gsap";
import "./preloader.scss";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const playAnimation = () => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to(".loaderBar", {
        x: "100%",
        duration: 1,
        stagger: 0.1,
        ease: "power2.inOut",
      });
    };

    if (document.readyState === "complete") {
      playAnimation();
    } else {
      window.addEventListener("load", playAnimation);
    }

    return () => {
      window.removeEventListener("load", playAnimation);
    };
  }, [onComplete]);
  return (
    <div className="preloader">
      {Array.from({ length: 12 }).map((_, i) => (
        <div className="loaderBar" key={i}></div>
      ))}
    </div>
  );
};

export default Preloader;
