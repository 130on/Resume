// Resume.jsx (Hover-to-Focus Sections)

import { useState } from 'react';
import BackToTop from '../components/BackToTop';
import ScrollToHome from '../components/ScrollToHome';

function ResumeSection({ id, title, children, isActive, onActivate }) {
    const handleMouseEnter = () => onActivate(id);
    const handleMouseLeave = () => onActivate(null);
  
    return (
      <div className={`resume-section-wrapper ${isActive ? 'active' : ''}`}>
        <div className="resume-section-label">{title}</div>
        <div
          className="resume-section-content"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </div>
    );
  }
  
  

function Resume() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="resume-container py-5">
            <h1 className="mb-5 text-center text-primary display-4 fw-bold border-bottom pb-3">Resume</h1>

      {/* Cover Letter */}
      <ResumeSection
        id="cover"
        title="Cover Letter"
        isActive={activeSection === 'cover'}
        onActivate={setActiveSection}
      >
        <p>
           
            Dear Sir/Madam, <br /><br />
            Thank you for taking the time to view my resume website and credentials. 
              I am a Computer Science major. Highly skilled with an LL.B and diverse work experience. In the process of a career change. Looking to join an ambitious, hardworking, 
              professional team so we can grow together. Bilingual in Hebrew and English.<br /> <br />

              I graduated in May 2025, and I am enthusiastic about continuing my new journey and finding a full-time software engineer position.<br/> 
              I have experience with OOP using various programming languages, and frameworks and working with relational and non relational databases.<br/> <br/> 
            
              I am a quick learner that is accustomed to a fast-paced work environment where deadlines are a priority and handling multiple jobs at once is the norm.<br/>
              I enjoy a challenge and I work hard to attain my goals. I have great communication skills and understand the importance of deadlines, both are fundamental for any remote position. <br/><br/>
            
              I have a great interest in software development/engineering, and I am looking for an employer that can benefit from my skills and knowledge while challenging me 
              to improve and expand them. <br /><br />
            
              Since a resume cannot fully explain in detail all of my skills, abilities, and accomplishments, nor can it predict my potential within your organization, 
              I would welcome a personal interview to further discuss the merging of my training and background with the needs and goals for your company.<br/> <br />
            
              I look forward to the opportunity to meet with you and members of your team.<br/><br/>

            <br /><br />
            Sincerely,<br /> <br />
            Alon Saar
          </p>
      </ResumeSection>

      {/* Resume PDF */}
      <ResumeSection
        id="pdf"
        title="Resume Document"
        isActive={activeSection === 'pdf'}
        onActivate={setActiveSection}
      >
        <div className="text-center">
          <embed
            src="/files/Resume.pdf"
            type="application/pdf"
            width="100%"
            height="900px"
            style={{ borderRadius: '0.5rem' }}
          />
        </div>
      </ResumeSection>

      {/* Skills */}
      <ResumeSection
        id="skills"
        title="Technical Skills"
        isActive={activeSection === 'skills'}
        onActivate={setActiveSection}
      >
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
          {["Python", "C++", "JavaScript", "Java", "C#", "C", "Bash",
            "React", "Node.js", "Express.js", "Django", ".NET",
            "MySQL", "MongoDB", "Git", "VSCode", "Visual Studio",
            "Docker", "Windows", "Linux", 
            "REST APIs"].map((skill, i) => (
              <div key={i} className="col">
                <div className="border rounded px-3 py-2 text-center bg-light h-100">{skill}</div>
              </div>
            ))}
        </div>
      </ResumeSection>

      {/* Internships */}
      <ResumeSection
        id="internships"
        title="Internships"
        isActive={activeSection === 'internships'}
        onActivate={setActiveSection}
      >
        <ul>
          <li><strong>Database Analyst</strong> – Hawaii County Wastewater Division (2022)</li>
          <li><strong>Web App Developer</strong> – Weber State University (2022)</li>
        </ul>
      </ResumeSection>

      {/* Work History */}
      <ResumeSection
        id="work"
        title="Work History"
        isActive={activeSection === 'work'}
        onActivate={setActiveSection}
      >
        <ul>
          <li><strong>Realtor</strong> – Coldwell Banker, Hilo, HI (2019–Current)</li>
          <li><strong>Legal Intern</strong> – Arie-Saar Law Firm, Tel Aviv (2015–2017)</li>
        </ul>
      </ResumeSection>
    <ScrollToHome />
    <BackToTop />
    

    </div>
    
  );
}

export default Resume;

