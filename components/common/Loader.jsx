"use client";
import { useEffect } from "react";
import { lineSpinner } from "ldrs";

const Loader = ({ size = 25, stroke = 4, color = "white", speed = 1 }) => {
  useEffect(() => {
    // Register the component only on client side
    lineSpinner.register();
  }, []);

  return (
    <l-line-spinner
      size={size}
      stroke={stroke}
      speed={speed}
      color={color}
    ></l-line-spinner>
  );
};

export default Loader;
