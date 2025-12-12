import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from './data';
import { ArrowLeft, Calendar, Clock, BookOpen, ExternalLink, Copy, Check, AlertCircle } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  
  // Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!blog) return <div className="pt-32 text-center text-slate-500">Blog post not found</div>;

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-800">
      
      {/* Progress Bar (Fixed at Top) */}
      <motion.div
        className="fixed top-[80px] left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <div className="pt-32 max-w-4xl mx-auto px-4 mb-8">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-medium transition-colors hover:-translate-x-1 transform duration-200">
          <ArrowLeft size={20} /> Back to Articles
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4"
      >
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            {blog.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider border border-accent/20">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-slate-500 border-b border-slate-100 pb-8">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> {blog.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-accent" /> {blog.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        {blog.image && (
          <div className="rounded-2xl overflow-hidden mb-12 shadow-xl border border-slate-100">
             <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
          </div>
        )}

        {/* --- DYNAMIC CONTENT RENDERING --- */}
        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-loose">
          {blog.content.map((block, index) => {
            switch (block.type) {
              
              case 'heading':
                return (
                  <h2 key={index} className="text-2xl font-bold text-primary mt-12 mb-6 border-l-4 border-accent pl-4">
                    {block.text}
                  </h2>
                );
              
              case 'paragraph':
                return <p key={index} className="mb-6">{block.text}</p>;
              
              case 'quote':
                return (
                  <blockquote key={index} className="border-l-4 border-slate-300 pl-6 py-4 my-8 italic text-xl text-slate-700 bg-slate-50 rounded-r-xl">
                    "{block.text}"
                  </blockquote>
                );
              
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
                  <div key={index} className="my-8 p-6 bg-blue-50 border border-blue-100 rounded-xl flex gap-4 items-start">
                    <AlertCircle className="text-blue-500 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">{block.title}</h4>
                      <p className="text-blue-800 text-sm m-0">{block.text}</p>
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

        {/* --- REFERENCES & RESOURCES SECTION --- */}
        {blog.references && blog.references.length > 0 && (
          <div className="mt-20 p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-accent"/> References & Resources
            </h3>
            <div className="grid gap-3">
              {blog.references.map((ref, idx) => (
                <a 
                  key={idx} 
                  href={ref.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-accent hover:shadow-md transition-all group"
                >
                  <span className="font-medium text-slate-700 group-hover:text-primary truncate pr-4">{ref.title}</span>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-accent shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}

// Helper Component for Code Blocks with Copy Button
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
        <button 
          onClick={handleCopy} 
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? <><Check size={14} className="text-green-400"/> Copied</> : <><Copy size={14}/> Copy</>}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-slate-200 m-0">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default BlogDetails;