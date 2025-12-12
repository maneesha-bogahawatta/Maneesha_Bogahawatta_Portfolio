import React, { useState } from 'react';
import { Outlet, useLocation, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Linkedin, Mail, Github, MapPin, Globe, ArrowUp, Code } from 'lucide-react';
import { profile } from './data';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="font-sans text-slate-800 bg-bgLight antialiased selection:bg-accent selection:text-white flex flex-col min-h-screen">
      
      {/* --- GLOBAL NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-lg shadow-sm border-b border-white/20 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* LOGO - Logic: If on Home, scroll top. If not, go Home. */}
            {isHomePage ? (
              <div 
                className="text-2xl font-serif font-bold text-primary tracking-wide cursor-pointer" 
                onClick={() => window.scrollTo(0,0)}
              >
                Maneesha Bogahawatta <span className="text-accent">.</span>
              </div>
            ) : (
              <RouterLink to="/" className="text-2xl font-serif font-bold text-primary tracking-wide cursor-pointer">
                Maneesha Bogahawatta <span className="text-accent">.</span>
              </RouterLink>
            )}
            
            {/* DESKTOP MENU */}
            <div className="hidden md:flex space-x-8 items-center">
              {isHomePage ? (
                ['Home', 'Skills', 'Projects', 'Blogs', 'Certifications'].map((item) => (
                  <ScrollLink 
                    key={item} 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    offset={-90}
                    className="text-sm font-medium hover:text-accent cursor-pointer transition-colors"
                  >
                    {item}
                  </ScrollLink>
                ))
              ) : (
                <RouterLink to="/" className="text-sm font-medium hover:text-accent cursor-pointer transition-colors">
                  Back to Home
                </RouterLink>
              )}
              
              <ScrollLink to="contact" smooth={true} className="px-6 py-2 bg-primary text-white text-sm rounded-full hover:bg-accent hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
                Contact Me
              </ScrollLink>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-slate-100 absolute w-full">
            <div className="px-4 pt-4 pb-4 space-y-2">
              {isHomePage ? (
                ['Home', 'Skills', 'Projects', 'Blogs', 'Certifications'].map((item) => (
                  <ScrollLink 
                    key={item}
                    to={item.toLowerCase()} 
                    smooth={true}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-accent rounded-md"
                  >
                    {item}
                  </ScrollLink>
                ))
              ) : (
                <RouterLink to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-accent rounded-md">
                  Back to Home
                </RouterLink>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* --- PAGE CONTENT (Outlet) --- */}
      {/* This main wrapper allows content to grow and pushes footer down */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- GLOBAL FOOTER --- */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden mt-auto">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-highlight"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Branding */}
            <div className="space-y-4">
              <div className="text-2xl font-serif font-bold text-white tracking-wide cursor-pointer inline-block" onClick={() => window.scrollTo(0,0)}>
                Maneesha Bogahawatta <span className="text-accent">.</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                Data Science Undergraduate specializing in AI, Machine Learning, and building intelligent solutions.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={16} className="text-accent" />
                  <span>Malabe, Sri Lanka (UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Globe size={16} className="text-highlight" />
                  <span>Open to Remote & On-site Internships</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {['Home', 'Skills', 'Projects', 'Blogs', 'Certifications'].map((item) => (
                  <li key={item}>
                    {isHomePage ? (
                      <ScrollLink to={item.toLowerCase()} smooth={true} offset={-90} className="hover:text-accent transition-colors cursor-pointer flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-accent transition-colors"></span>
                        {item}
                      </ScrollLink>
                    ) : (
                      <RouterLink to="/" className="hover:text-accent transition-colors cursor-pointer flex items-center gap-2 group">
                         <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-accent transition-colors"></span>
                         {item}
                      </RouterLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Let's Connect</h3>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${profile.contact.email}`} className="flex items-center justify-center gap-3 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
                  <Mail size={18} /> Email Me
                </a>
                <div className="flex gap-4">
                  <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-all">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a href={`https://${profile.contact.github}`} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-transparent text-slate-400 rounded-lg border border-slate-700 hover:text-white hover:border-white transition-all">
                    <Github size={18} /> GitHub
                  </a>
                </div>
                <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Currently Learning</p>
                  <p className="text-sm text-highlight flex items-center gap-2">
                    <Code size={14} /> Agentic AI & Advanced RAG
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2025 Maneesha Bogahawatta. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-1">Built with <span className="text-slate-300">React</span> & <span className="text-slate-300">Tailwind</span></p>
              <ScrollLink to="home" smooth={true} className="flex items-center gap-1 hover:text-accent cursor-pointer transition-colors">
                Back to Top <ArrowUp size={14} />
              </ScrollLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;