import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(); // Necessary: Connects React to your form

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9874', 
      'template_pbtcwo6', 
      form.current, 
      'QvrxejAOXePIftTtZ'
    )
    .then((result) => {
        console.log(result.text);
        alert(" ✅Message sent successfully! ");
        form.current.reset(); // Clears the form after success
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again. ❌");
    });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 scroll-mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm currently looking for new opportunities as a Junior MERN Developer. 
                I prefer Java for backend logic and React for the frontend.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="text-blue-600 text-xl">📧</div>
                <div>
                  <p className="text-sm text-slate-500">Email Me</p>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">abdoulmouhsincherif@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="text-blue-600 text-xl">🔗</div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="font-semibold text-slate-900 dark:text-white">linkedin.com/in/abdoul-mouhsin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form (Modified with ref and onSubmit) */}
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input required type="text" name="from_name" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input required type="email" name="reply_to" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" placeholder="Email@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea required rows="4" name="message" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-black font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-95">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}