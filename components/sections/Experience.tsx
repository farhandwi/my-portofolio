"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "PT Asuransi Tugu Pratama Indonesia",
    position: "Junior Programmer",
    period: "September 2024 - Present",
    location: "Jakarta, Indonesia",
    description: "Leading development of enterprise-grade systems with focus on performance optimization and security.",
    achievements: [
      "Increased SSO system speed and security by up to 60% using Laravel and Microsoft Entra ID",
      "Enhanced API management, increasing throughput by 25% with optimized endpoints",
      "Reduced PDF generation costs by 40% through strategic optimization",
      "Implemented microservices architecture for improved scalability",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Microsoft Entra ID", "Docker", "Kubernetes"],
  },
  {
    company: "Pertamina University",
    position: "IT Staff (Internship)",
    period: "July 2023 - November 2024",
    location: "Jakarta, Indonesia",
    description: "Developed and maintained internal management systems for university operations.",
    achievements: [
      "Built BISMA (Internship Management System) serving 500+ students",
      "Implemented RESTful APIs for seamless data integration",
      "Collaborated with cross-functional teams to gather requirements",
      "Improved system reliability through comprehensive testing",
    ],
    technologies: ["Node.js", "Express.js", "React", "MongoDB", "REST API"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="hidden md:block absolute left-[29px] top-[60px] w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>
                )}

                <div className="bg-white dark:bg-gray-950 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="hidden md:flex flex-shrink-0 w-[60px] h-[60px] bg-primary-100 dark:bg-primary-900/30 rounded-full items-center justify-center">
                        <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.position}
                            </h3>
                            <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              Key Achievements
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                              >
                                <span className="text-primary-600 dark:text-primary-400 mt-1">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
