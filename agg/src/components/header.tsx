'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="AGGELOS Rentals Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-[#2951a0] transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-[#2951a0] transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="#fleet" 
              className="text-gray-700 hover:text-[#2951a0] transition-colors duration-200"
            >
              Fleet
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-[#2951a0] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:+306980151068"
              className="text-gray-700 hover:text-[#2951a0] transition-colors duration-200"
            >
              <span className="text-sm font-medium">+30 698 015 1068</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-2 bg-[#2951a0] text-white font-semibold rounded-full hover:bg-[#2951a0fe] transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="#about"
                className="block text-gray-700 hover:text-[#2951a0] transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="block text-gray-700 hover:text-[#2951a0] transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#fleet"
                className="block text-gray-700 hover:text-[#2951a0] transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fleet
              </Link>
              <Link
                href="#contact"
                className="block text-gray-700 hover:text-[#2951a0] transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="tel:+306980151068"
                  className="block text-gray-700 hover:text-[#2951a0] transition-colors duration-200 py-2"
                >
                  <span className="font-medium">+30 698 015 1068</span>
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center px-6 py-2 bg-[#2951a0] text-white font-semibold rounded-full hover:bg-[#2951a0fe] transition-colors duration-200 mt-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
