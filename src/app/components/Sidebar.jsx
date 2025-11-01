"use client";
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { SidebarContext } from './Navbar';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  CalendarIcon, 
  MapPinIcon,
  CodeBracketIcon,
  UserIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const { isDark } = useTheme();
  const sidebarContext = useContext(SidebarContext);
  const isOpen = sidebarContext?.isOpen ?? false;
  const setIsOpen = sidebarContext?.setIsOpen ?? (() => {});

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    if (!setIsOpen) return;
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'anuishitagupta@gmail.com',
      href: 'mailto:anuishitagupta@gmail.com'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '8687376963',
      href: 'tel:8687376963'
    },
    {
      icon: CalendarIcon,
      label: 'Birthday',
      value: 'January 15, 2002',
      href: '#'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Noida, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ishitagupta657', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ishita-gupta-a158a121a/', icon: 'linkedin' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-80 bg-gray-100 dark:bg-black border-r border-gray-200 dark:border-gray-900 overflow-y-auto z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Mobile close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-900 border border-gray-300 dark:border-gray-900"
          aria-label="Close sidebar"
        >
          <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        
        <div className="p-8">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="relative w-full h-full aspect-square overflow-hidden rounded-full">
              <Image
                src="/images/projects/profile.jpeg"
                alt="My Photo"
                fill
                sizes="128px"
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Ishita Gupta
          </h1>
          <div className="inline-block px-4 py-2 bg-gray-200 dark:bg-black rounded-full border border-gray-700">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Software Engineer
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center p-3 rounded-lg bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 border dark:border-gray-900 transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-amber-500 group-hover:text-amber-600" />
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm text-gray-900 dark:text-white truncate">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 border dark:border-gray-900 transition-colors duration-200 group"
            >
              <div className="w-5 h-5 text-amber-500 group-hover:text-amber-600">
                {social.icon === 'github' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {social.icon === 'twitter' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
    </>
  );
};

// Export function to open sidebar from Navbar
export const useSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return { isOpen, setIsOpen };
};

export default Sidebar;
