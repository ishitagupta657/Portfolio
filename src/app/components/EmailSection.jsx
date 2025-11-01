"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const handleClick = () => {
    window.location.href = "mailto:anuishitagupta@gmail.com?subject=Let's Connect&body=Hi Ishita,";
  };

  return (
    <section className="py-12" id="contact">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Let&apos;s Connect
        </h2>
        <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
      </div>

      <div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.  
          Whether you have a question or just want to say hi!
        </p>

     
        <div className="flex items-center space-x-4">
          {/* GitHub */}
          <Link
            href="https://github.com/ishitagupta657"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-900 border dark:border-gray-900 transition-colors duration-200"
          >
            <Image src={GithubIcon} alt="Github Icon" className="w-5 h-5" />
          </Link>

       
          <Link
            href="https://www.linkedin.com/in/ishita-gupta-a158a121a/"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-900 border dark:border-gray-900 transition-colors duration-200"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-5 h-5" />
          </Link>

         
          <button
            onClick={handleClick}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors duration-200"
          >
            ✉️
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
