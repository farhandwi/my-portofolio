"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScratchLineProps {
  delay?: number;
}

export default function ScratchLines({ delay = 0 }: ScratchLineProps) {
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    // Generate random scratch paths
    const generatePaths = () => {
      const newPaths = [];
      for (let i = 0; i < 5; i++) {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const controlX1 = Math.random() * 100;
        const controlY1 = Math.random() * 100;
        const controlX2 = Math.random() * 100;
        const controlY2 = Math.random() * 100;

        newPaths.push(
          `M ${startX},${startY} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`
        );
      }
      setPaths(newPaths);
    };

    generatePaths();
    const interval = setInterval(generatePaths, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="scratchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(14, 165, 233)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          stroke="url(#scratchGradient)"
          strokeWidth="0.3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{
            duration: 4,
            delay: delay + i * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut" as const,
          }}
        />
      ))}
    </svg>
  );
}
