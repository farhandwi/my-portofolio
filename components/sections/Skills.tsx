"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Layout, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: ["PHP", "Laravel", "Go", "Express.js", "Node.js"],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Google Cloud Platform"],
  },
];

const additionalSkills = [
  "RESTful API",
  "GraphQL",
  "Microservices",
  "OAuth2",
  "JWT",
  "Microsoft Entra ID",
  "Git",
  "CI/CD",
  "Agile/Scrum",
  "Web Security",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-950 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800 relative overflow-hidden group"
              >
                {/* Ripple effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-gray-950 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
