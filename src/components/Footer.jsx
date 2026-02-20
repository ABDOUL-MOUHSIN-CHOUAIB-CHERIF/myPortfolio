import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand/Logo Part */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">
            Dev <span className="text-blue-500">Warrior</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xs">
            Building scalable MERN applications and mastering Java one line at a time.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
         <a href="https://github.com/ABDOUL-MOUHSIN-CHOUAIB-CHERIF/" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/abdoul-mouhsin/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>

      <a href="https://wa.me/237690480803?text=Hello%2C%20I%27m%20interested%20in%20your%20services" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500">
          <p>© {currentYear} Abdoul Mouhsin. All rights reserved.</p>
        </div>

      </div>

      {/* Subtle Bottom Bar */}
      <div className="mt-8 text-center">
         <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-slate-600 hover:text-blue-500 uppercase tracking-widest transition-all"
         >
           ↑ Back to Top
         </button>
      </div>
    </footer>
  );
}