"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DOTS (Daily Operational Tugu System)",
    description: "Comprehensive operational management system for insurance company daily operations, streamlining workflows and improving efficiency across departments.",
    technologies: ["Laravel", "PHP", "PostgreSQL", "Docker", "Redis"],
    highlights: [
      "Handles 1000+ daily transactions",
      "Reduced processing time by 50%",
      "Integrated with 5+ external APIs",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Single-Sign On (SSO) System",
    description: "Enterprise-grade authentication system integrating Microsoft Entra ID, providing seamless access to multiple internal applications with enhanced security.",
    technologies: ["Laravel", "OAuth2", "Microsoft Entra ID", "JWT", "Redis"],
    highlights: [
      "Increased login speed by 60%",
      "Serves 500+ active users",
      "99.9% uptime reliability",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Web Reporting System",
    description: "Advanced reporting platform for generating comprehensive business reports with dynamic PDF generation and data visualization capabilities.",
    technologies: ["Laravel", "PostgreSQL", "Chart.js", "Queue Workers"],
    highlights: [
      "Reduced PDF generation cost by 40%",
      "Generates 100+ reports daily",
      "Real-time data synchronization",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "BISMA - Internship Management",
    description: "Full-featured internship management system for Pertamina University, managing student applications, placements, and evaluations.",
    technologies: ["Node.js", "Express.js", "React", "MongoDB", "JWT"],
    highlights: [
      "Manages 500+ student records",
      "Automated notification system",
      "Real-time application tracking",
    ],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in building scalable, high-performance applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 relative"
              >
                {/* Animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="p-6 md:p-8 relative z-10">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-0.5">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium border border-gray-300 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
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
