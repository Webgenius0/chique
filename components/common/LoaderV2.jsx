/* eslint-disable no-shadow-restricted-names */
"use client"
import { Infinity } from 'ldrs/react'
import 'ldrs/react/Infinity.css'
import { useEffect } from 'react';

const LoaderV2 = ({ size = 65, stroke = "7", color = "#FFF", speed = "1", strokeLength = "0.10", bgOpacity = "0.1" }) => {
    useEffect(() => {
        // Register the component only on client side
        lineSpinner.register();
    }, []);
    return (
        <Infinity
            size={size}
            stroke={stroke}
            strokeLength={strokeLength}
            bgOpacity={bgOpacity}
            speed={speed}
            color={color}
        />
    );
};

export default LoaderV2;

