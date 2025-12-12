import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { blogs } from './data';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function AllBlogs() {
  return (
    <div className="pt-28 pb-20">
      <div className="px-4 text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
          Blog & Articles
        </h1>
        <p className="text-slate-600 text-lg">
          Thoughts on Artificial Intelligence, Engineering, and the Future of Tech.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <RouterLink to={`/blog/${blog.id}`} className="block h-full">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-sm relative h-64 bg-slate-100">
                   {blog.image ? (
                     <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-slate-300">Image</div>
                   )}
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex gap-3 mb-3">
                     {blog.tags.map(tag => (
                       <span key={tag} className="text-xs font-bold text-accent uppercase tracking-wider">{tag}</span>
                     ))}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">{blog.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4 flex-grow">{blog.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <span>{blog.date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                      Read <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </RouterLink>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllBlogs;