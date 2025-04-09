// Projects.jsx

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BackToTop from '../components/BackToTop';
import ScrollToHome from '../components/ScrollToHome';

function Projects() {
  const [activeMedia, setActiveMedia] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setActiveMedia(null);
      }
    }

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveMedia(null);
      }
    }

    if (activeMedia) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMedia]);

  const projects = [
    {
      title: 'UI Timeline – Web Development',
      description: 'A modern timeline interface built and deployed using front-end tools.',
      link: 'https://ui-timeline.netlify.app/',
      demo: 'https://github.com/130on/CS3650-UI-Timeline',
      tech: ['JavaScript', 'React', 'Node', 'Bootstrap'],
      gif: '/images/ui-timeline-preview.gif',
      video: '/videos/UiTimeLIneVid.mp4',
    },
    {
      title: 'RV Park Management Application',
      description: 'Reservation management application for RV park',
      link: '',
      demo: 'https://github.com/130on/RVParkManagement',
      tech: ['Node.js', 'Express.js', 'MySQL', 'Bootstrap', 'EJS'],
      gif: '/images/RVPark-preview.gif',
      video: '/videos/RVParkVid.mp4',
    },
    {
      title: 'Invoice Application',
      description: 'Elementry invoicing app built using Windows WPF',
      link: '',
      demo: 'https://github.com/130on/CS3280-GroupProject---Win-WPF--Invoice',
      tech: ['.NET', 'C#', 'WPF'],
      gif: '/images/Invoicing-preview.gif',
      video: '/videos/InvoiceVid.mp4',
    },
    {
      title: 'Algorithm Gauge Application',
      description: 'Hosted on WSU server — An app that analyzes and compares the performence of Algorithms.',
      link: '',
      demo: '',
      tech: ['MERN', 'React', 'JS', 'MongoDB', 'Plotly'],
      gif: '/images/algorithm-gauge-preview.gif',
      video: '/videos/AlgoGaugeVid.mp4',
    }
  ];

  return (
    <section className="container py-5">
      <h1 className="mb-5 text-center text-primary display-4 fw-bold border-bottom pb-3">Projects</h1>

      <div className="row">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="col-12 col-md-6 col-lg-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card h-100 shadow-sm">
              {project.gif && (
                <img
                  src={project.gif}
                  alt={`${project.title} preview`}
                  className="card-img-top rounded-top"
                  onClick={() => setActiveMedia(project.video || project.gif)}
                  style={{ cursor: 'pointer' }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title fw-bold ${project.link ? 'text-primary' : 'text-dark'}`}>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-decoration-none text-primary">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h5>
                <p className="card-text text-muted flex-grow-1">{project.description}</p>
                <div className="mb-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="badge bg-secondary me-1">{tech}</span>
                  ))}
                </div>
                <div>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for video or fallback gif preview */}
      {activeMedia && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content" ref={modalRef}>
              <div className="modal-header">
                <h5 className="modal-title">Preview</h5>
                <button type="button" className="btn-close" onClick={() => setActiveMedia(null)} aria-label="Close"></button>
              </div>
              <div className="modal-body text-center">
                {activeMedia.endsWith('.mp4') ? (
                  <video src={activeMedia} controls autoPlay loop muted className="img-fluid rounded" />
                ) : (
                  <img src={activeMedia} alt="Preview enlarged" className="img-fluid rounded" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <ScrollToHome/>
      <BackToTop/>
    </section>
  );
}

export default Projects;
