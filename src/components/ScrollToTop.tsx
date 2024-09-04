"use client";

import React, { useState, useEffect } from "react";

import "./app.css";

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScrollToTop);
    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
      style={{
        display: showButton ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
      }}
    >
      <a id="scroll-up" className="scroll-up" href="#">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="#247BA0"></path>
          <path
            fill="rgba(255,255,255,1)"
            d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
          ></path>
        </svg>
      </a>
    </button>
  );
};

export default ScrollToTop;
