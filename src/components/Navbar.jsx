 'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown, FiUser, FiSearch } from 'react-icons/fi';
import { FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with dropdowns
  const navItems = [
    { label: 'Home', href: '#', current: true },
    { 
      label: 'Services', 
      href: '#services',
      dropdown: [
        { label: 'Cardiology', href: '#' },
        { label: 'Neurology', href: '#' },
        { label: 'Dermatology', href: '#' },
        { label: 'Orthopedics', href: '#' },
        { label: 'Pediatrics', href: '#' },
        { label: 'Emergency Care', href: '#' },
      ]
    },
    { 
      label: 'Doctors', 
      href: '#doctors',
      dropdown: [
        { label: 'Find a Doctor', href: '#' },
        { label: 'Specialists', href: '#' },
        { label: 'Book Appointment', href: '#' },
      ]
    },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  // Contact info
  const contactNumber = '+91 8527329247 | +91 8527329248';

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-sky-800 text-white py-2 px-6 md:px-16 hidden md:flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sky-300" size={14} />
            <span className="font-medium">{contactNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-sky-300" size={14} />
            <span>Morning 8:30 AM to 1:PM | Evening 6:00 PM to 11:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-sky-200 transition-colors">Emergency</a>
          <span className="h-4 w-px bg-sky-600"></span>
          <a href="#" className="hover:text-sky-200 transition-colors">Support</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'} px-6 md:px-16`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SRC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SRC Clinic</h1>
                <p className="text-xs text-sky-600 font-medium -mt-1">Medical Excellence</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1 ml-8">
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${item.current ? 'text-sky-600 font-semibold' : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'}`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <FiChevronDown className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-5 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button 
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <FiSearch size={20} className="text-gray-600" />
            </button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-600 text-sky-600 hover:bg-sky-50 transition-colors font-medium">
                <FiUser size={18} />
                Login
              </button>
              <button className="px-6 py-2.5 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors font-medium shadow-md hover:shadow-lg">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-slideDown">
            <div className="px-6 py-6">
              {/* Search Bar in Mobile */}
              <div className="relative mb-6">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search services, doctors..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Items */}
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg ${item.current ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                      onClick={() => item.dropdown ? null : setIsOpen(false)}
                    >
                      {item.label}
                      {item.dropdown && (
                        <FiChevronDown className="text-gray-400" />
                      )}
                    </a>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-4">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile CTA Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-2 px-4 py-2 text-gray-600">
                  <FaPhoneAlt className="text-sky-500" />
                  <span className="font-medium">{contactNumber}</span>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-sky-600 text-sky-600 font-medium">
                  <FiUser size={18} />
                  Patient Login
                </button>
                <button className="w-full px-5 py-3 rounded-full bg-sky-600 text-white font-medium shadow-md">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}