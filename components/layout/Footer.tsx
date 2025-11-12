"use client";

import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Farhan Dwi Septian. All rights reserved.
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>using Next.js 15 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
