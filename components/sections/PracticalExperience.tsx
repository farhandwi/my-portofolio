"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import { practicalExperience } from "@/lib/data";

export default function PracticalExperience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="practical-experience"
      className="py-20 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Practical Experience
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Teaching assistance experience at Pertamina University
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500/50 to-transparent"></div>

          {/* Experience Items */}
          {practicalExperience.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-950 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              />

              {/* Content Card */}
              <motion.div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800 group">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                      <BookOpen className="w-5 h-5 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {experience.period}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium hover:bg-primary-500/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
