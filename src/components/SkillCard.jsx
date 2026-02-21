
function SkillCard({ name, icon }) {
  return (
    <div className="group flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
      
      {/* md:grayscale: Only turn gray on Medium screens (Tablets/Laptops) and up.
          group-hover:md:grayscale-0: On desktop, turn color back on when mouse hovers.
          On mobile, it will just show the natural color of the icon!
      */}
      <div className="w-16 h-16 mb-4 flex items-center justify-center md:grayscale group-hover:md:grayscale-0 transition-all duration-500">
        <img src={icon} alt={name} loading="lazy" className="w-full h-full object-contain" />
      </div>
      
      <p className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors">
        {name}
      </p>
    </div>
  );
}

export default SkillCard