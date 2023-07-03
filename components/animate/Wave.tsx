"use client";
import { useEffect } from "react";
import Lottie from "lottie-web";
import { useRef } from "react";
import Wave from "../../assets/svg/wave.json";

export const WaveAnimate = () => {
  const animateContainer = useRef<any>(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animateContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Wave,
    });
    console.log("dsasd");
  }, []);
  return (
    <div
      className="wave"
      style={{
        width: "100%",
        height: "1100px",
        overflow: "hidden",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <div
        ref={animateContainer}
        style={{
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
        }}
      />
    </div>
  );
};
