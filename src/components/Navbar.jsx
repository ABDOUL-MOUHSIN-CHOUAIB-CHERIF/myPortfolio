import { useState } from "react";
import picture from "../assets/icons/dev-icon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Logic to track if menu is open

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src={picture} 
            alt="logo" 
            className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500 transition-transform group-hover:scale-110" 
            loading="lazy"
          />
          <h1 className="text-sm md:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Dev <span className="text-blue-600">Warrior</span>
          </h1>
        </div>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <nav className="hidden md:flex flex-row gap-8 items-center font-medium text-slate-600 dark:text-slate-300">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#project" className="hover:text-blue-600 transition-colors">Projects</a>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-500/20"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button (Visible only on mobile) */}
        <div className="md:hidden flex items-center">
           <button 
             onClick={() => setIsOpen(!isOpen)} 
             className="text-2xl text-slate-600 dark:text-slate-300 focus:outline-none"
           >
             {isOpen ? "✕" : "☰"} {/* Changes icon from Hamburger to X when open */}
           </button>
        </div>
      </div>

      {/* --- NEW: Mobile Menu Content --- */}
      {/* This only shows if isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-center font-medium text-slate-600 dark:text-slate-300">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2">Home</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2">Skills</a>
            <a href="#project" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2">Projects</a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}