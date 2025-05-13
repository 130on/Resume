// Education.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackToTop from '../components/BackToTop';
import ScrollToHome from '../components/ScrollToHome';

function Education() {
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      title: "LL.B - Law",
      file: "/files/TLV_LLB_AlonSaar.pdf",
    },
    {
      title: "Outstanding Student Award",
      file: "/files/2022_2023_Outstanding_Student.pdf",
    },
    {
      title: "Certificate of Proficiency - Programming Essentials",
      file: "/files/Certificate_of_Proficiency_Programming_Essentials.pdf",
    },
    {
      title: "Provost's List - Fall 2024",
      file: "/files/Fall_2024_ProvostsList.pdf",
    },
    {
      title: "High Academic Excellence - Fall 2023",
      file: "/files/WSU_High_Academic_Excellence_Fall2023.pdf",
    },
    {
      title: "High Academic Excellence - Fall 2021",
      file: "/files/AcademicExcellence.jpeg",
    },
    
  ];

  return (
    <section className="container py-5">
      <h1 className="mb-5 text-center text-primary display-4 fw-bold border-bottom pb-3">Education</h1>

      {/* Weber State University */}
      <div className="education-card text-center mb-5 bg-light border border-primary border-3 shadow-sm p-4 rounded">
        <h2>
          <a href="https://www.weber.edu/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
            Weber State University
          </a>
        </h2>
        <p className="fw-semibold">Bachelor of Science (BS) – Computer Science (May 2025) Summa Cum Laude | GPA: 3.93</p>
        <p className="fw-semibold">Associate of Applied Science (AAS) – Computer Science (2023)</p>
        <a href="https://www.weber.edu/" target="_blank" rel="noreferrer">
          <img src="/images/wsu_logo.jpg" alt="Weber State logo" style={{ maxWidth: '100px' }} />
        </a>
      </div>

      {/* Tel Aviv University */}
      <div className="education-card text-center mb-5 bg-light border border-success border-3 shadow-sm p-4 rounded">
        <h2>
          <a href="https://en-law.tau.ac.il/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
            Tel Aviv University – Faculty of Law
          </a>
        </h2>
        <p className="fw-semibold">Bachelor of Laws (LL.B) – 2010–2014</p>
        <a href="https://en-law.tau.ac.il/" target="_blank" rel="noreferrer">
          <img src="/images/tau.png" alt="Tel Aviv University logo" style={{ maxWidth: '100px' }} />
        </a>
      </div>

      {/* Academic Achievements */}
      <div className="awards-section mt-5">
        <h3 className="mb-4 text-center text-primary fs-2 border-bottom pb-2">Academic Achievements</h3>
        <div className="row">
          {awards.map((award, i) => (
            <motion.div
              className="col-12 col-sm-6 col-lg-4 mb-4"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="card h-100 border-0 bg-white shadow-lg award-card text-center"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedAward(award)}
              >
                <div className="card-body">
                  <h5 className="card-title text-dark fw-bold">{award.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAward && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedAward.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedAward(null)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <embed src={selectedAward.file} type="application/pdf" width="100%" height="600px" style={{ borderRadius: '0.5rem' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transcript Link */}
      <div className="mt-5 text-center">
        <h3 className="text-success">Transcript Download</h3>
        <ul className="list-unstyled">
        <li>
            <a href="/files/Unofficial_Academic_Transcript-BS.pdf" target="_blank" rel="noreferrer" className="text-decoration-underline">
              Bachelor of Science (BS) - Computer Science - Unofficial Transcript
            </a>
          </li>
          <li>
            <a href="/files/WES_report_sample.pdf" target="_blank" rel="noreferrer" className="text-decoration-underline">
              Bachelor of Laws (LL.B) Degree - WES Evaluation Report
            </a>
          </li>
          
        </ul>
      </div>
      <BackToTop/>
      <ScrollToHome/>
    </section>
  );
}

export default Education;
