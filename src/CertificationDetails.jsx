import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { certifications } from './data';
import { ArrowLeft, Award, CheckCircle, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

function CertificationDetails() {
  const { id } = useParams();
  const cert = certifications.find((c) => c.id === parseInt(id));

  if (!cert) return <div className="p-20 text-center">Certification not found</div>;

  return (
    <div className="pt-24 bg-bgLight min-h-screen pb-20 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-4 mb-8">
        <Link to="/certifications" className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors">
          <ArrowLeft size={20} /> Back to Certifications
        </Link>
      </nav>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="max-w-5xl mx-auto px-4"
      >
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">
          
          {/* --- LEFT: CERTIFICATE IMAGE DISPLAY --- */}
          <div className="md:w-1/2 bg-slate-50 p-8 flex flex-col items-center justify-center border-r border-slate-100 relative">
            
            {/* The Certificate Frame */}
            <div className="relative group w-full max-w-sm mx-auto shadow-2xl rounded-lg overflow-hidden border-[8px] border-white">
              {cert.image ? (
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              ) : (
                <div className="w-full h-64 bg-slate-200 flex items-center justify-center text-slate-400">
                  <Award size={48} />
                </div>
              )}
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 bg-white text-primary font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                >
                  View Full Size
                </a>
              </div>
            </div>

            {/* Credential Link Button */}
            {cert.credentialLink && (
              <a 
                href={cert.credentialLink} 
                target="_blank" 
                rel="noreferrer"
                className="mt-8 flex items-center gap-2 text-sm font-bold text-accent hover:text-primary transition-colors border border-accent/20 px-4 py-2 rounded-full hover:bg-accent/5"
              >
                Verify Credential <ExternalLink size={16} />
              </a>
            )}
          </div>

          {/* --- RIGHT: DETAILS --- */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                cert.category?.includes('AWS') ? 'bg-orange-100 text-orange-600' :
                cert.category?.includes('Azure') ? 'bg-blue-100 text-blue-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {cert.category || 'Certification'}
              </span>
            </div>

            <h1 className="text-3xl font-serif font-bold text-primary mb-6 leading-tight">
              {cert.title}
            </h1>
            
            <div className="flex flex-col gap-3 mb-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-accent" />
                <span className="font-semibold text-slate-700">Issued by:</span> {cert.issuer}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-accent" />
                <span className="font-semibold text-slate-700">Date Earned:</span> {cert.date}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h3 className="font-bold text-lg mb-4 text-primary">Description</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {cert.desc}
              </p>

              <h3 className="font-bold text-lg mb-4 text-primary">Skills Validated</h3>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-bgLight text-slate-600 rounded-lg text-sm font-medium border border-slate-200">
                    <CheckCircle size={14} className="text-green-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CertificationDetails;