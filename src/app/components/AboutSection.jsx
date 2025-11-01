"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
const artworkData = [
  {
    id: 1,
    src: '/images/projects/paint1.jpeg',
    alt: 'Shiva & Parvati Artwork',
    caption: 'Shiva & Parvati Artwork',
  },
  {
    id: 2,
    src: '/images/projects/paint2.jpeg',
    alt: 'Starry Night Recreation',
    caption: 'Starry Night Recreation',
  },
  {
    id: 3,
    src: '/images/projects/paint3.jpeg',
    alt: 'Krishna Artwork',
    caption: 'Krishna Artwork',
  },
  {
    id: 4,
    src: '/images/projects/paint4.jpeg',
    alt: 'Buddha Painting',
    caption: 'Buddha Painting',
  },
  {
    id: 5,
    src: '/images/projects/sketch1.jpeg',
    alt: 'Charcoal Radha Krishna',
    caption: 'Charcoal Radha Krishna',
  },
  {
    id: 6,
    src: '/images/projects/art.jpeg',
    alt: 'Portrait Sketch Collection',
    caption: 'Portrait Sketch Collection',
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux ToolKit</li>
        <li>Nodejs</li>
        <li>MongoDB (NoSQL) / SQL</li>
        <li>Bootstrap / MUI</li>
        <li>Nextjs</li>
        <li>Java</li>
        <li>SpringBoot</li>
        <li>Git</li>
        <li>C/C++</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</li>
        <span>~ CGPA : 8.16</span>
        <li>Class 12th</li>
        <span>~ 95%</span>
        <li>Class 10th</li>
        <span>~ 92.4%</span>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
  

    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li className="flex items-center gap-2">
          React.js Essential training
          <a
            href="https://www.linkedin.com/learning/certificates/c97db57ad2562439f691a44c74c0504ebbb5fa808c96a053a6e0b2b9f439a7fd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>

        </li>
        <li className="flex items-center gap-2">
          C++ Programming Essential Training
          <a
            href="https://drive.google.com/file/d/1x3rRfpG2kfdV5dIza9BuEgdR5zR35gli/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>
        </li>
        
        <li className="flex items-center gap-2">
          Programming Foundations: Object-Oriented Design
         
        </li>
        <li className="flex items-center gap-2">
          Database Foundations
          <a
            href="https://drive.google.com/file/d/1xY1GMwKChe1ArcvKKZNrvjdKMOozjNdE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>
        </li>
        <li className="flex items-center gap-2">
          Java SpringBoot By Telusko
          <a
            href="https://drive.google.com/file/d/1BcPPhAhh9oJ75a_TSfM2vqVUWR1qtM9L/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>
        </li>
        <li className="flex items-center gap-2">
         CISCO Networking Essentials
          <a
            href="https://drive.google.com/file/d/1nejWZUYJ7Z5a3umPydsDU_IrhG_0ad0X/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>
        </li>
       
        <li className="flex items-center gap-2">
         AWS Certified Developer - Associate Certification
          <a
            href=" https://drive.google.com/file/d/1pvjEw97Gvdnsu2qInkVnbY4mi3e6tGCs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>
        </li>
        <li className="flex items-center gap-2">
         Sparks Foundation Internship Certificate
          <a
            href=" https://drive.google.com/file/d/1AyElzx9ChBlv0BP4yeK0nIzoV4n2TzDC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>
        </li>
        <li className="flex items-center gap-2">
         Infollion Research Services Internship Certificate
          <a
            href="https://drive.google.com/file/d/1NnSITqFXYEVKKUEL9D2o1pK_yBjSZhAF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>
        </li>
        <li className="flex items-center gap-2">
       Ultimate Kronos Group Internship Certificate
          <a
            href="  https://drive.google.com/file/d/10x54PURv5jscwpyqwP-I9UETO0Mqry2u/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4" />
          </a>
        </li>
       
        
       
      </ul>
    ),
    
  },
  {
    title: "Hobby",
    id: "hobby",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {artworkData.map((artwork) => (
        <div key={artwork.id} className="flex flex-col items-center">
          <div className="w-full aspect-square relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={artwork.src}
              alt={artwork.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium text-center">
            {artwork.caption}
          </p>
        </div>
      ))}
    </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-12" id="about">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m Ishita Gupta, My journey in tech is fueled by a passion for
            learning and solving complex problems. As a software developer I love
            building things on both the frontend and backend.  
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I’m experienced in
            creating web apps using tools like ReactJS, Next.js, Node.js, and
            Express.js making sure they run smoothly and perform well. I also
            work with both SQL and NoSQL databases, so am able to design
            efficient data storage solutions that suit the specific needs of
            each project.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I’m dedicated to continuously learning and staying
            informed about new trends in software development, always working to
            improve my skills and take on more challenging problems. I enjoy
            solving problems and have tackled over 800 algorithm challenges on
            various platforms like LeetCode, gfg. This helps me break down tough
            problems and find efficient solutions quickly. I’m always learning
            and looking for ways to improve my skills. I enjoy taking on new
            challenges and working with others to create something great. If
            you’re looking for someone to collaborate on a project or just want
            to connect, feel free to reach out!
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Internships & Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobby")}
              active={tab === "hobby"}
            >
              Other Stuffs (Hobby)
            </TabButton>
          </div>

          <div className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-900">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
