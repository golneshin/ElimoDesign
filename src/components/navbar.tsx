"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/courses") return; // Apply only on Courses page

    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50  ",
        scrolling ? " backdrop:blur-md bg-black/85" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-md:justify-center justify-end h-16">
          <div className="flex items-center space-x-4">
            {/* Home Link */}
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>

            {/* Projects Link */}
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Projects
            </Link>

            {/* courses Link */}
            <Link
              href="/courses"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Courses
            </Link>

            {/* Contact me Link */}
            <Link
              href="/contact-me"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact Me
            </Link>

            {/* Sign In Button */}
            <Link
              href="/signin"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:border-white transition duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
