"use client";

import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, ArrowDown, Code2, Database, Server } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "@/components/ui/Typewriter";
import { useState, useEffect } from "react";

export default function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  
  // Generate stable random values once
  const [particles] = useState(() => 
    [...Array(20)].map(() => ({
      randomX: Math.random(),
      randomY: Math.random(),
      randomDuration: Math.random() * 10 + 10,
      randomEndX: Math.random(),
      randomEndY: Math.random(),
    }))
  );

  useEffect(() => {
    setMounted(true);
    
    // Set window size on client side
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingIcons = [
    { icon: Code2, delay: 0, duration: 3 },
    { icon: Database, delay: 1, duration: 4 },
    { icon: Server, delay: 2, duration: 3.5 },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-600/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        {mounted && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
            initial={{
              x: particle.randomX * windowSize.width,
              y: particle.randomY * windowSize.height,
            }}
            animate={{
              y: [null, particle.randomEndY * windowSize.height],
              x: [null, particle.randomEndX * windowSize.width],
            }}
            transition={{
              duration: particle.randomDuration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear" as const,
            }}
          />
        ))}

        {/* Floating tech icons */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-500/10 dark:text-primary-400/10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          >
            <item.icon className="w-16 h-16" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Photo with animated border */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" as const },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
                }}
                style={{ padding: "4px" }}
              />
              
              {/* Profile image container */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-950 shadow-2xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                />
                <Image
                  src="/profile.png"
                  alt="Farhan Dwi Septian"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-5xl font-bold">FDS</div>';
                  }}
                />
              </div>

              {/* Animated dots around photo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary-500 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 8) * 100,
                    y: Math.sin((i * Math.PI * 2) / 8) * 100,
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Farhan Dwi Septian
          </motion.h1>

          {/* Title with Typewriter */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-6 min-h-[3.5rem] flex items-center justify-center"
          >
            <Typewriter 
              texts={[
                "Software Engineer",
                "Backend Developer",
                "Full Stack Developer",
                "System Architect"
              ]}
              className="text-primary-600 dark:text-primary-400"
            />
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
          >
            Building enterprise-grade systems with a focus on{" "}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              performance
            </span>{" "}
            and{" "}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              security
            </span>
            . Specializing in backend development, microservices architecture, and modern web
            technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="/cv-farhan-dwi-septian.pdf"
              download
              className="group inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center items-center"
          >
            <a
              href="mailto:farhandwi234@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/farhandwi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/farhandwi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </Link>
      </motion.div>
    </section>
  );
}
