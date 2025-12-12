import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, Download, ExternalLink, ArrowRight, Award, BookOpen } from 'lucide-react';
import { profile, skills, projects, certifications, education, activities, blogs } from './data';
import cvFile from './assets/Maneesha Bogahawatta_CV.pdf';
import profileImage from './assets/Maneesha.png';

function Home() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  
  // 3D Tilt Animation Variant for Skills
  const cardHover3D = {
    rest: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
    hover: { scale: 1.02, rotateX: 5, rotateY: 5, z: 50, transition: { duration: 0.4, type: "spring", stiffness: 100 } }
  };

  // Slice data for home page previews
  const recentCertifications = certifications.slice(0, 4);
  const recentProjects = projects.slice(0, 4);
  const recentBlogs = blogs.slice(0, 3);

  return (
    <div className="pt-20"> 
      
      {/* --- HERO SECTION --- */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-highlight/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-[1.1]">
              Hello, I'm <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-highlight">Maneesha</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">{profile.about}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="projects" smooth={true} offset={-90} className="px-8 py-4 bg-primary text-white text-center rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-800 transition-all cursor-pointer font-bold">View My Work</ScrollLink>
              <a href={cvFile} download="Maneesha_Bogahawatta_CV.pdf" target="_blank" rel="noreferrer" className="px-8 py-4 border border-slate-300 text-center rounded-xl hover:border-accent hover:text-accent hover:bg-white transition-all flex items-center justify-center gap-2 font-bold"><Download size={20} /> Download CV</a>
            </div>
            <div className="mt-12 flex gap-6 text-slate-400">
              <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all"><Linkedin size={24}/></a>
              <a href={`https://${profile.contact.github}`} target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all"><Github size={24}/></a>
              <a href={`mailto:${profile.contact.email}`} className="hover:text-accent hover:scale-110 transition-all"><Mail size={24}/></a>
            </div>
          </motion.div>
          
          {/* Right Image (STATIC LEAF SHAPE) */}
          <div className="relative hidden md:block w-[400px] h-[500px] mx-auto">
            {/* 1. The Purple Outline (Fixed Position Behind) */}
            <div className="absolute top-6 left-6 w-full h-full border-2 border-accent rounded-tl-[30px] rounded-tr-[160px] rounded-bl-[160px] rounded-br-[30px] -z-10"></div>

            {/* 2. The Image Container (Fixed Position Front) */}
            <div className="relative w-full h-full bg-white rounded-tl-[30px] rounded-tr-[160px] rounded-bl-[160px] rounded-br-[30px] overflow-hidden shadow-2xl border-[8px] border-white z-10">
               <img 
                 src={profileImage} 
                 alt="Maneesha" 
                 className="object-cover w-full h-full" 
               />
            </div>
          </div>

        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Technical Arsenal</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <motion.div key={idx} initial="rest" whileHover="hover" variants={cardHover3D} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 group cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">{skill.icon}</div>
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">{React.cloneElement(skill.icon, { size: 40 })}</div>
                <h3 className="font-bold text-xl mb-4 text-primary">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">{skill.items.map((item, i) => <span key={i} className="text-xs font-bold px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm">{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (TOP 4) --- */}
      <section id="projects" className="py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Featured Projects</h2>
              <p className="text-slate-600 max-w-xl text-lg">Applying AI and Data Science to solve real-world problems.</p>
            </div>
            <RouterLink to="/projects" className="text-sm font-bold text-accent hover:text-primary transition-colors flex items-center gap-1 mb-2">View All Projects <ArrowRight size={16} /></RouterLink>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <motion.div key={project.id} initial="rest" whileHover="hover" animate="rest" className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-[500px] flex flex-col border border-slate-100">
                <RouterLink to={`/project/${project.id}`} className="absolute inset-0 z-20"></RouterLink>
                <div className="h-1/2 overflow-hidden relative">
                  <motion.div className="w-full h-full" variants={{ hover: { scale: 1.1 } }} transition={{ duration: 0.6 }}>
                    {project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover" />}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-lg">{project.date}</div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-10 bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">{project.title}</h3>
                    <motion.div variants={{ hover: { x: 5, color: "#a78bfa" } }} className="text-slate-300"><ExternalLink size={24} /></motion.div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{project.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t, i) => <span key={i} className="text-[10px] uppercase font-bold px-3 py-1 bg-slate-50 text-slate-500 rounded-full border border-slate-100">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BLOGS SECTION (TOP 3) --- */}
      <section id="blogs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Recent Thoughts</h2>
              <div className="w-24 h-1.5 bg-accent rounded-full"></div>
            </div>
            <RouterLink to="/blogs" className="text-sm font-bold text-accent hover:text-primary transition-colors flex items-center gap-1 mb-2">View All Articles <ArrowRight size={16} /></RouterLink>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {recentBlogs.map((blog) => (
              <motion.div key={blog.id} whileHover={{ y: -10 }} className="group cursor-pointer">
                <RouterLink to={`/blog/${blog.id}`} className="block h-full">
                  <div className="rounded-2xl overflow-hidden mb-6 shadow-md relative h-64">
                    {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <div>
                    <div className="flex gap-3 mb-3">{blog.tags.map(tag => <span key={tag} className="text-xs font-bold text-accent uppercase tracking-wider">{tag}</span>)}</div>
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">{blog.title}</h3>
                    <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-4">{blog.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all">Read Article <ArrowRight size={16} /></div>
                  </div>
                </RouterLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS & EDUCATION --- */}
      <section id="certifications" className="py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-10 flex items-center gap-3"><BookOpen className="text-accent" /> Education & Activities</h3>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors"></div>
              <h4 className="font-bold text-xl text-primary relative z-10">{education.degree}</h4>
              <p className="text-slate-600 font-medium mt-1 relative z-10">{education.uni}</p>
              <div className="flex items-center gap-4 mt-4 relative z-10">
                <span className="text-sm text-slate-400 font-bold">{education.year}</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{education.gpa}</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-lg mb-6 text-primary">Extra Curriculars</h4>
              <ul className="space-y-4">
                {activities.map((act, i) => <li key={i} className="flex items-center gap-4 text-sm text-slate-600"><CheckCircleIcon />{act}</li>)}
              </ul>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-serif font-bold text-primary flex items-center gap-3"><Award className="text-accent" /> Certifications</h3>
              <RouterLink to="/certifications" className="text-sm font-bold text-accent hover:text-primary transition-colors flex items-center gap-1">View All <ArrowRight size={16} /></RouterLink>
            </div>
            <div className="space-y-4">
              {recentCertifications.map((cert) => (
                <motion.div key={cert.id} whileHover={{ x: 10 }} className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-accent hover:shadow-lg transition-all cursor-pointer group">
                  <RouterLink to={`/certification/${cert.id}`} className="absolute inset-0 z-10"></RouterLink>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300"><Award size={24} /></div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-primary group-hover:text-accent transition-colors">{cert.title}</h4>
                      <div className="flex items-center justify-between mt-1"><p className="text-xs text-slate-500 font-medium">{cert.issuer}</p><p className="text-xs text-slate-400">{cert.date}</p></div>
                    </div>
                    <ArrowRight size={18} className="text-slate-300 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Small helper for the check icon in activities
function CheckCircleIcon() { return <div className="w-1.5 h-1.5 bg-highlight rounded-full"></div>; }

export default Home;