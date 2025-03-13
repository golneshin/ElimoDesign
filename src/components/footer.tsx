"use client";

import { Home, User, ShoppingCart, BookOpen, LogIn } from "lucide-react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/store/useCart";
import { useAuth } from "@clerk/nextjs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const cartItems = useCart((state) => state.items);
  const { isSignedIn } = useAuth();

  return (
    <>
      {/* Mobile Icon Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-black/90 md:hidden">
        <div className="flex justify-around items-center py-3 px-4">
          <Link href="/" className="flex flex-col items-center">
            <Home className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
            <span className="text-xs text-gray-300 mt-1">Home</span>
          </Link>

          <Link href="/courses" className="flex flex-col items-center">
            <BookOpen className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
            <span className="text-xs text-gray-300 mt-1">Courses</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center relative">
            <ShoppingCart className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
            <span className="text-xs text-gray-300 mt-1">Cart</span>
          </Link>

          {isSignedIn ? (
            <Link href="/dashboard" className="flex flex-col items-center">
              <User className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              <span className="text-xs text-gray-300 mt-1">Dashboard</span>
            </Link>
          ) : (
            <Link href="/sign-in" className="flex flex-col items-center">
              <LogIn className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              <span className="text-xs text-gray-300 mt-1">Sign in</span>
            </Link>
          )}
        </div>
      </div>

      {/* Desktop Footer */}
      <footer className="hidden md:block bg-black/90 text-white py-6 sm:py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Website Info */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-4">Elimo</h3>
              <p className="text-gray-300 text-sm">
                Showcasing my journey through code and creativity
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300 text-sm justify-center sm:justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  <Link href="mailto:elhamehrabi@gmail.com">
                    elhamehrabi@gmail.com
                  </Link>
                </div>
                <div className="flex items-center text-gray-300 text-sm justify-center sm:justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+98 (930) 533-8961</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="/courses"
                  className="block text-gray-300 hover:text-white text-sm transition duration-300"
                >
                  Courses
                </Link>
                <Link
                  href="/projects"
                  className="block text-gray-300 hover:text-white text-sm transition duration-300"
                >
                  Projects
                </Link>
                <Link
                  href="/contact-me"
                  className="block text-gray-300 hover:text-white text-sm transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © {currentYear} Elimo. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm transition duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
