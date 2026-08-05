import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.scss";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onHover = (e) => {
    const el = e.currentTarget;

    gsap.killTweensOf(el);

    gsap
      .timeline()
      .to(el, {
        x: -100,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(el, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
  };
  const handleMenuToggle = () => {
    const tl = gsap.timeline();
    tl.to(".menuTransitionBar", {
      scaleY: 1,
      duration: 0.35,
      stagger: 0.03,
      ease: "power4.inOut",
    })
      .call(() => {
        setIsMenuOpen((prev) => !prev);
      })
      .to(".menuTransitionBar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.35,
        stagger: {
          each: 0.03,
          from: "end",
        },
        ease: "power4.inOut",
      });
  };
  return (
    <nav>
      <h4>911</h4>
      <div className="menuBtn">
        {isMenuOpen ? (
          <X onClick={handleMenuToggle} size={36} />
        ) : (
          <Menu className="menuBtn" onClick={handleMenuToggle} size={36} />
        )}
      </div>
      <div className="menuTransition">
        {Array.from({ length: 12 }).map((_, i) => (
          <div className="menuTransitionBar" key={i}></div>
        ))}
      </div>
      <div
        className="navigation"
        style={{ display: isMenuOpen ? "flex" : "none" }}
      >
        <X onClick={handleMenuToggle} className="closeBtn" color="red" />
        <ul>
          <li onMouseEnter={onHover}>
            <a
              href="https://github.com/gabdani11"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li onMouseEnter={onHover}>
            <a
              href="https://www.linkedin.com/in/daniel-prakash1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li onMouseEnter={onHover}>
            <a
              href="https://x.com/devdaniis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li onMouseEnter={onHover}>
            <a
              href="https://youtu.be/dQw4w9WgXcQ?si=4ihBXo_m_dhwGJ6l"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Prompt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
