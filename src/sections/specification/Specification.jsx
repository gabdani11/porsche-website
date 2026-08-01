import React, { useEffect } from "react";
import "./specification.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Specification = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".porschetopview", {
      scrollTrigger: {
        trigger: ".porschetopview",

        start: "30% 80%",
        end: "+=1000",
        scrub: true,
      },
      x: 500,
      duration: 1.5,
      ease: "power2.out",
    });

    ScrollTrigger.refresh();
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".specGrid",
        start: "top 80%",
        end: "+=1000",
        toggleActions: "restart none restart none",
      },
    });
    tl.from(".specBoxdetail", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="specification">
      <img
        className="porschetopview"
        src="https://ik.imagekit.io/rhuubreuu/porsche-website/911%20GT3%20RS%20(1)-Photoroom.webp?updatedAt=1777879032018"
        alt="porschetopview"
      />
      <div className="specGrid">
        <div className="box1 ">
          <h4 className="specBoxdetail">
            3.2<span>s</span>
          </h4>
          <p className="specBoxdetail">Acceleration0-100 km/h</p>
        </div>
        <div className="box2">
          <h4 className="specBoxdetail">
            296<span>km/h</span>
          </h4>
          <p className="specBoxdetail">Top Speed</p>
        </div>
        <div className="box3 "></div>
        <div className="box4 ">
          <h4 className="specBoxdetail">
            386<span>kw</span>/525<span>ps</span>
          </h4>
          <p className="specBoxdetail">Power(kw)/Power(ps)</p>
        </div>
        <div className="box5 ">
          <h4 className="specBoxdetail">Engine Type:</h4>
          <h4 className="specBoxdetail">Naturally Aspirated Flat-6</h4>
        </div>
      </div>
    </div>
  );
};

export default Specification;
