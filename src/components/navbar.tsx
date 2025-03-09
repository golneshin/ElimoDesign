"use client";

import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { MoveRight, Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCart } from "@/store/useCart";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useCart((state) => state.items);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50",
        scrolling ? "backdrop-blur-md bg-black/85" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger menu button for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/courses"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Courses
            </Link>
            <Link
              href="/contact-me"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 py-2">
              <div className="flex flex-col items-start">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-4 py-2 w-full text-sm font-medium transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-white px-4 py-2 w-full text-sm font-medium transition duration-300"
                >
                  Projects
                </Link>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-white px-4 py-2 w-full text-sm font-medium transition duration-300"
                >
                  Courses
                </Link>
                <Link
                  href="/contact-me"
                  className="text-gray-300 hover:text-white px-4 py-2 w-full text-sm font-medium transition duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          )}

          {/* Sign In & Sign out Button */}
          {!isSignedIn ? (
            <div className="hidden md:flex gap-2 text-white items-center">
              <SignInButton>
                <Button
                  size="sm"
                  variant="default"
                  className="border border-green-400 px-3 py-2 h-9 text-sm font-medium"
                >
                  Sign in
                </Button>
              </SignInButton>
              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center text-red-400 hover:text-white px-3 py-2 h-9 rounded-md text-sm font-medium border border-red-400 hover:border-white transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {/* Cart Icon with Badge */}
              <Link href="/cart" className="relative hidden md:flex">
                <ShoppingCart className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <SignOutButton>
                <Button
                  size="sm"
                  variant="default"
                  className="border border-red-400 px-3 py-2 h-9 text-sm font-medium"
                >
                  Sign out
                </Button>
              </SignOutButton>
              <Link
                href="/dashboard"
                className="hidden md:inline-flex items-center justify-center text-green-300 hover:text-white px-3 py-2 h-9 rounded-md text-sm font-medium border border-green-300 hover:border-white transition duration-300"
              >
                Dashboard &nbsp; <MoveRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
