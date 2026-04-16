import picture from "../assets/images/pic.jpg";
import Navbar from "../components/Navbar";
import Skill from "../pages/Skill";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div id="home" className="min-h-screen w-screen bg-slate-50 scroll-mt-20 dark:bg-slate-950">
      <Navbar />
      
      {/* Hero Container */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 pb-20 gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
            Available for Work
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Hi, It's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">ABDOUL MOUHSIN</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            I am a <span className="font-semibold text-slate-800 dark:text-slate-200">Java Developer</span> and a <span className="font-semibold text-slate-800 dark:text-slate-200">MERN Stack enthusiast.</span> 
            I build scalable web applications with a focus on clean code and great user experiences.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#project" className="px-8 py-3 bg-blue-300 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
              View Projects
            </a>
            <a
            href="/CV_ABDOUL MOUHSIN_Software_Engineer.pdf" 
            download  
            className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Decorative Background Glow */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl"></div>
            
            <img 
              src={picture} 
              alt="Abdoul Mouhsin" 
              className="relative w-64 h-64 md:w-80 md:h-80 mt-5 rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-slate-800 transition-transform duration-500 hover:rotate-2 hover:scale-105" 
              loading="lazy"
            />
          </div>
        </div>

      </section>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}