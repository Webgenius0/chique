"use client";

import dynamic from 'next/dynamic';
import { useEffect } from "react";
import { lineSpinner } from "ldrs";

const Loader = dynamic(
  () => import('ldrs').then((mod) => {
    const { lineSpinner } = mod;
    lineSpinner.register();

    return function Loader({ size = 25, stroke = 4, color = "white", speed = 1 }) {
      return (
        <l-line-spinner
          size={size}
          stroke={stroke}
          speed={speed}
          color={color}
        />
      );
    };
  }),
  { ssr: false }
);
export default Loader;
