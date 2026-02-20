import act from "../assets/images/Capture3.PNG"
import acdc from "../assets/images/Acdc.png"
import event from "../assets/images/Event-MS.png"
import pic from "../assets/images/project2.png"

export default function Project() {
  const projectData = [
    {
      title: "Clinic Management System",
      image: act, // <--- Link the specific image here
      tech: ["Java 97%", "CSS 3%"],
      links: { github: "https://github.com/ABDOUL-MOUHSIN-CHOUAIB-CHERIF/ACT-Digittal-Health", live: "#" }
    },
    {
      title: "CGA ACDC Website",
      image: acdc, // <--- Link the specific image here
      tech: ["HTML 60%", "CSS 35%", "FormSpree 5%"],
      links: { github: "https://github.com/PrimeSpecies/acdc-project", live: "#" }
    },
    {
      title: "Event Management System",
      image: event, // <--- Link the specific image here
      tech: ["TypeScript 50%", "HTML 30%", "CSS 20%"],
      links: { github: "https://github.com/ABDOUL-MOUHSIN-CHOUAIB-CHERIF/TYpescript-Project", live: "#" }
    },
     {
      title: "Client Porfolio",
      image: pic, // <--- Link the specific image here
      tech: ["React 60%", "Tailwindcss 35%", "EmailJS 5%"],
      links: { github: "https://github.com/ABDOUL-MOUHSIN-CHOUAIB-CHERIF/ClientPortfolio", live: "https://fatima-njindou.vercel.app/" }
    }
  ];

  return (
    <section id="project" className="py-20 bg-slate-50 dark:bg-slate-950 scroll-mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-900 dark:text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.map((proj, index) => (
            <div key={index} className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
              
              {/* Image Area */}
              <div className="h-48 overflow-hidden bg-slate-200">
                <img 
                  src={proj.image} // <--- Changed from 'act' to 'proj.image'
                  alt={proj.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {proj.title}
                </h3>
                
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Tech Stack:</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <a href={proj.links.github} className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
                    GitHub →
                  </a>
                  <a href={proj.links.live} target="blank" className="text-sm font-bold text-blue-600 hover:underline">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}