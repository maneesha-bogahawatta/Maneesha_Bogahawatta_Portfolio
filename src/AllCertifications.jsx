import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { certifications } from './data';
import { ArrowLeft, Award, Filter, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function AllCertifications() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from data
  const categories = ['All', ...new Set(certifications.map(c => c.category))];

  // Filter logic
  const filteredCerts = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(c => c.category === activeCategory);

  return (
    <div className="bg-bgLight min-h-screen pb-20 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
          <RouterLink to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </RouterLink>
        </div>
      </nav>

      {/* Header Section */}
      <div className="pt-28 pb-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
          All Certifications
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          A comprehensive list of my verified credentials across Cloud Computing, Data Science, and Security.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-1 ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-lg scale-105"
                  : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Certs */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-accent hover:shadow-xl transition-all group"
              >
                {/* Clickable Overlay */}
                <RouterLink to={`/certification/${cert.id}`} className="absolute inset-0 z-10"></RouterLink>

                {/* Category Tag */}
                <div className="absolute top-4 right-4">
                  <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md ${
                    cert.category.includes('AWS') ? 'bg-orange-100 text-orange-600' :
                    cert.category.includes('Azure') ? 'bg-blue-100 text-blue-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {cert.category}
                  </span>
                </div>

                <div className="w-12 h-12 bg-bgLight rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
                  <Award size={24} />
                </div>

                <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors mb-2 pr-16 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">
                  {cert.issuer} • {cert.date}
                </p>

                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-primary transition-colors mt-auto">
                  View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
}

export default AllCertifications;