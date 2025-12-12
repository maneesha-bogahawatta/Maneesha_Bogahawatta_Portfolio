import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './data';
import { ArrowLeft, Github, Calendar, Check, Copy, AlertCircle, ExternalLink, Code, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="pt-32 text-center text-slate-500">Project not found</div>;

  return (
    <div className="pt-24 bg-white min-h-screen pb-20 font-sans text-slate-800">
      
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-medium transition-colors hover:-translate-x-1">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="max-w-5xl mx-auto px-4"
      >
        
        {/* --- HEADER GRID --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          
          {/* Left: Enhanced "Browser Style" Image Container */}
          <div className="relative group">
            {/* The decorative blur behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-highlight opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>
            
            {/* The 'Browser Window' Frame */}
            <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              {/* Browser Header (Dots) */}
              <div className="h-8 bg-slate-800 flex items-center gap-2 px-4 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              {/* The Image */}
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="flex flex-col justify-center h-full pt-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Calendar size={14} /> {project.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200 shadow-sm">
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-accent hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Github size={20} /> View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* --- CASE STUDY CONTENT (Dynamic) --- */}
        <div className="max-w-3xl mx-auto border-t border-slate-100 pt-16">
          
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-10 text-accent font-bold tracking-widest uppercase text-sm">
            <Terminal size={16}/> Project Case Study
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-loose">
            {project.content && project.content.map((block, index) => {
              switch (block.type) {
                case 'heading':
                  return <h3 key={index} className="text-2xl font-bold text-primary mt-12 mb-6 border-l-4 border-accent pl-4">{block.text}</h3>;
                
                case 'paragraph':
                  return <p key={index} className="mb-6">{block.text}</p>;
                
                case 'list':
                  return (
                    <ul key={index} className="list-disc pl-6 mb-8 space-y-3 marker:text-accent">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );

                case 'callout':
                  return (
                    <div key={index} className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex gap-4 items-start shadow-sm">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-accent"><AlertCircle size={24}/></div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{block.title}</h4>
                        <p className="text-slate-600 text-sm m-0">{block.text}</p>
                      </div>
                    </div>
                  );

                case 'code':
                  return <CodeBlock key={index} language={block.language} code={block.code} />;
                  
                default:
                  return null;
              }
            })}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

// Helper Code Block Component
const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="my-8 rounded-xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700">
        <span className="text-xs font-mono text-slate-400 uppercase">{language}</span>
        <button onClick={handleCopy} className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors">
          {copied ? <><Check size={14} className="text-green-400"/> Copied</> : <><Copy size={14}/> Copy</>}
        </button>
      </div>
      <div className="p-4 overflow-x-auto"><pre className="text-sm font-mono text-slate-200 m-0"><code>{code}</code></pre></div>
    </div>
  );
};

export default ProjectDetails;