import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { projects } from './data';
import { ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

function AllProjects() {
  return (
    <div className="pt-28 pb-20">
      <div className="px-4 text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
          All Projects
        </h1>
        <p className="text-slate-600 text-lg">
          A complete archive of my work in Data Science, AI, and Full Stack Development.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <RouterLink to={`/project/${project.id}`} className="absolute inset-0 z-20"></RouterLink>
              
              <div className="h-48 overflow-hidden relative bg-slate-200">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">No Image</div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                  <Calendar size={12} /> {project.date}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                  <ExternalLink size={20} className="text-slate-300 group-hover:text-accent" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                  {project.tech.slice(0, 4).map((t, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;