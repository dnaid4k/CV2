"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Timeline from "./Components/Timeline";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Timeline />
        <AboutSection />
        <ProjectsSection />
        <Contact />
      </div>
    </main>
  );
};