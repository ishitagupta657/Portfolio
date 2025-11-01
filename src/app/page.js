"use client";
import Sidebar from "./components/Sidebar";
import Navbar, { SidebarContext } from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen: sidebarOpen, setIsOpen: setSidebarOpen }}>
      <div className="flex min-h-screen bg-gray-50 dark:bg-black">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 md:ml-80">
          <Navbar />
          <main className="px-8 py-8">
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
