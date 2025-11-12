"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  // Generate stable random values once for scratch lines
  const [scratchPaths] = useState(() =>
    [...Array(10)].map(() => ({
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      x3: Math.random() * 100,
      y3: Math.random() * 100,
    }))
  );

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary-500/20 to-purple-500/20 blur-3xl"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />
      
      {/* Scratch/Scribble effect */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {scratchPaths.map((path, i) => (
          <motion.path
            key={i}
            d={`M ${path.x1}% ${path.y1}% Q ${path.x2}% ${path.y2}%, ${path.x3}% ${path.y3}%`}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary-500"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>

      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear" as const,
        }}
      />
    </div>
  );
}
