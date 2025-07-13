"use client"
import { Infinity } from 'ldrs/react'
import 'ldrs/react/Infinity.css'

const LoaderV2 = ({
    size = 65,
    stroke = "7",
    color = "#FFF",
    speed = "1",
    strokeLength = "0.10",
    bgOpacity = "0.1"
}) => {
    // No need for useEffect or register with Infinity loader
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