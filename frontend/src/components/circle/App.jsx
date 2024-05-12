import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as flubber from "flubber";

const shapes = [
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z",
  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
  "M7 2v11h3v9l7-12h-4l4-8z",
  "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
];

const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
  "#ff0055",
  "#ee4444",
  "#ffcc00",
  "#00cc88"
];

export default function Circle() {
  const myPathElement = React.useRef(null);
  const [shapeIndex, setShapeIndex] = useState(0);

  const interpolator = flubber.interpolate(
    shapes[shapeIndex],
    shapes[(shapeIndex + 1) % shapes.length]
  );

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const draw = (timestamp) => {
      if (!myPathElement.current) {
        // Check if the ref is available
        return;
      }
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = (timestamp - startTime) / 900; // 2000ms duration
      const t = Math.min(progress, 1);

      myPathElement.current.setAttribute("d", interpolator(t));

      if (t >= 1) {
        cancelAnimationFrame(animationFrameId); // Stop the animation
        setTimeout(() => {
          // After 1000ms (1 second), move to the next shape
          setShapeIndex((shapeIndex + 1) % shapes.length);
          animationFrameId = requestAnimationFrame(draw); // Start the animation again
          startTime = null; // Reset the start time
        }, 1500);
      } else {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shapeIndex]);

  return (
    <div className="rounded-full bg-slate-600 fixed cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out right-2">
    <svg width="105" height="100"> {/* Adjust the width and height to change the size */}
      <g transform="translate(4.5 4.5) scale(3.6 3.6 )">
        <motion.path
          className="circle"
          fill={colors[shapeIndex % colors.length]}
          d={shapes[shapeIndex]}
          ref={myPathElement}
        />
      </g>
    </svg>
    </div>
  );
}
