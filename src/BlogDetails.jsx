import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from './data';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="p-20 text-center">Blog post not found</div>;

  return (
    <div className="bg-bgLight min-h-screen pb-20 font-sans text-slate-800">
      <nav className="p-6 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="max-w-3xl mx-auto px-4 mt-8"
      >
        {/* Blog Header */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
            <span className="flex items-center gap-1"><Calendar size={16} /> {blog.date}</span>
            <span className="flex items-center gap-1"><Clock size={16} /> {blog.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="flex gap-2 mb-8">
            {blog.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold flex items-center gap-1">
                <Tag size={12} /> {tag}
              </span>
            ))}
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg text-slate-600 leading-relaxed">
            {/* We simulate paragraphs for the demo */}
            <p className="mb-6 font-medium text-lg">{blog.excerpt}</p>
            <p className="mb-6">{blog.content}</p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BlogDetails;