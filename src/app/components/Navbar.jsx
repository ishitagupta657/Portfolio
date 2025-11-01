"use client";
import Link from "next/link";
import React, { useState, useEffect, createContext, useContext } from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import useScrollSpy from "../hooks/useScrollSpy";

// Create a context to share sidebar state
export const SidebarContext = createContext();

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  // {
  //   title: "Resume",
  //   path: "#resume",
  // },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const sidebarContext = useContext(SidebarContext);
  const setIsSidebarOpen = sidebarContext?.setIsOpen ?? (() => {});
  const sections = ['about', 'projects', 'contact'];
  const activeSection = useScrollSpy(sections);
  const [activeLink, setActiveLink] = useState("About");

  // Update active link based on scroll position
  useEffect(() => {
    if (activeSection) {
      const linkMap = {
        'about': 'About',
        'projects': 'Portfolio',
        'contact': 'Contact'
      };
      setActiveLink(linkMap[activeSection] || 'About');
    }
  }, [activeSection]);

  const handleNavClick = (linkTitle, linkPath) => {
    setActiveLink(linkTitle);
    setNavbarOpen(false); // Close mobile menu
    
    if (linkPath.startsWith('#')) {
      const element = document.querySelector(linkPath);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-900">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Mobile menu buttons */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Profile/Sidebar toggle button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center px-3 py-2 border rounded-lg border-gray-300 dark:border-gray-900 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-800"
            aria-label="Open profile"
          >
            <UserIcon className="h-5 w-5" />
          </button>
          
          {/* Menu toggle button */}
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded-lg border-gray-300 dark:border-gray-900 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-800"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded-lg border-gray-300 dark:border-gray-900 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-800"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(link.title, link.path)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeLink === link.title
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
            >
              {link.title}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
