import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ScrollToTop from './ScrollToTop';

// Page Imports
import Home from './Home'; // We need to move the Home content to a separate file!
import ProjectDetails from './ProjectDetails';
import BlogDetails from './BlogDetails';
import CertificationDetails from './CertificationDetails';
import AllCertifications from './AllCertifications';
import AllProjects from './AllProjects';
import AllBlogs from './AllBlogs';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="project/:id" element={<ProjectDetails />} />
          <Route path="blogs" element={<AllBlogs />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="certifications" element={<AllCertifications />} />
          <Route path="certification/:id" element={<CertificationDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;