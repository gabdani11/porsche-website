import React, { useEffect } from "react";
import gsap from "gsap";
import "./preloader.scss";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
  let tl; // declared here, in scope for both playAnimation AND cleanup

  const playAnimation = () => {
    tl = gsap.timeline({ onComplete });
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
    tl?.kill();
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
