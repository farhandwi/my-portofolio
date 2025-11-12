"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Shield } from "lucide-react";
import ScratchLines from "@/components/ui/ScratchLines";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "3.92 GPA in Information Systems, demonstrating strong analytical and problem-solving skills.",
    },
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Proficient in Laravel, Node.js, React, and PostgreSQL for building scalable applications.",
    },
    {
      icon: Shield,
      title: "Security Focus",
      description: "Specialized in authentication systems (JWT, OAuth2, Microsoft Entra ID) and web security.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <ScratchLines delay={0} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          {/* Professional Summary */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a dedicated <span className="text-primary-600 dark:text-primary-400 font-semibold">Software Engineer</span> with
              a strong foundation in backend and full-stack development. Currently working at{" "}
              <span className="font-semibold">PT Asuransi Tugu Pratama Indonesia</span>, I specialize
              in building high-performance, secure enterprise systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise spans across modern web technologies, microservices architecture, and
              DevOps practices. I'm passionate about optimizing system performance, implementing
              robust security measures, and delivering solutions that drive measurable business
              impact.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
                  <highlight.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
