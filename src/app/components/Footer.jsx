import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-900 bg-white dark:bg-black">
      <div className="px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <span className="text-gray-900 dark:text-white font-medium">Ishita Gupta</span>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
          Exploring the world with Technology!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
