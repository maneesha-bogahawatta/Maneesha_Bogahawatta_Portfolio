import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './data';
import { ArrowLeft, Heart, Send, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import useTilt from './hooks/useTilt';

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const form = useRef();
  const tiltRef = useTilt();

  // --- STATE ---
  const [likes, setLikes] = useState(0); 
  const [hasLiked, setHasLiked] = useState(false);
  
  // Form State
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  if (!project) return <div className="p-20 text-center">Project not found</div>;

  // --- HANDLERS ---
  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS IDs LATER
    // For now, it will simulate sending
    emailjs.sendForm(
      'service_vqlnzay',   // Paste your Service ID here
      'template_0kxhjm8',  // Paste your Template ID here
      form.current,
      'WPMP5jT8d07X11Bdt'    // Paste your Public Key here
    )
    .then((result) => {
        console.log(result.text);
        setStatus("success");
        e.target.reset(); // Clear form
    }, (error) => {
        console.log(error.text);
        setStatus("error");
    });
  };

  return (
    <div className="bg-bgLight min-h-screen pb-20 font-sans text-slate-800">
      
      {/* Header */}
      <nav className="p-6 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-4 mt-8">
        
        {/* Project Card */}
        <div ref={tiltRef} className="tilt-card rounded-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <span className="text-accent font-bold tracking-wider text-xs uppercase">{project.date}</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-2 mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            {project.fullDesc}
          </p>

          <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-6">
            {/* Like Button */}
            <button 
              onClick={handleLike}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors font-bold ${
                hasLiked 
                  ? "bg-red-500 text-white shadow-md transform scale-105" 
                  : "bg-red-50 text-red-500 hover:bg-red-100" 
              }`}
            >
              <Heart fill={hasLiked ? "currentColor" : "none"} size={20} className={hasLiked ? "animate-pulse" : ""} />
              {likes} Likes
            </button>
            
            <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary underline">
              View Source Code
            </a>
          </div>
          </motion.div>
        </div>

        {/* --- FEEDBACK FORM SECTION --- */}
        <div className="mt-12">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
            <Mail size={24} className="text-accent" /> Share Your Feedback
          </h3>
          <p className="text-slate-600 mb-6">
            Have questions about this project or suggestions? Send me a message directly!
          </p>

          <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            {/* Hidden field to send Project Name automatically */}
            <input type="hidden" name="project_title" value={project.title} />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Your Name</label>
                <input type="text" name="user_name" required className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-accent focus:ring-0 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Your Email</label>
                <input type="email" name="user_email" required className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-accent focus:ring-0 outline-none" placeholder="john@example.com" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-primary mb-2">Message</label>
              <textarea name="message" required rows="4" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-accent focus:ring-0 outline-none" placeholder="I loved how you used Prophet for forecasting..."></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button 
                type="submit" 
                disabled={status === "sending" || status === "success"}
                className={`px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${
                  status === "success" ? "bg-green-500 text-white" : "bg-primary text-white hover:bg-accent"
                }`}
              >
                {status === "sending" && "Sending..."}
                {status === "success" && <><CheckCircle size={18} /> Sent Successfully!</>}
                {status === "error" && "Failed. Try again."}
                {status === "" && <><Send size={18} /> Send Message</>}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-sm flex items-center gap-1"><AlertCircle size={14} /> Something went wrong.</p>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ProjectDetails;