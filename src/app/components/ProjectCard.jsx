import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-900 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div
        className="h-48 md:h-56 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-300">
          <Link
            href={gitUrl}
            className="h-12 w-12 mr-3 border-2 relative rounded-full border-amber-500 hover:border-amber-400 group/link bg-white/10 backdrop-blur-sm"
          >
            <CodeBracketIcon className="h-6 w-6 text-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-amber-400" />
          </Link>
          <Link
            href={previewUrl}
            className="h-12 w-12 border-2 relative rounded-full border-amber-500 hover:border-amber-400 group/link bg-white/10 backdrop-blur-sm"
          >
            <EyeIcon className="h-6 w-6 text-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-amber-400" />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h5>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
