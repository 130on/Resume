import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

function Intro() {
  return (
    <SlideInSection direction="left" className="bg-primary-subtle">
      <h1 className="display-5 fw-bold mb-4">Welcome to My Resume Site</h1>

      <p className="lead">
        I'm currently looking for a full-time position as a software engineer/developer. <br /> 
        This site showcases my work, education, and professional journey. <br />

        I invite you to explore my portfolio and credentials to learn more about my projects, experience, and technical expertise. <br /> 

        If you would like to share your impressions with me, please email me or leave me a message in the contact page. <br />

        I would appreciate your honest, constructive feedback and comments. <br /> <br />


        Alon Saar

      </p>

      <img
        src="/images/headShot2 (2).jpg"
        alt="Alon Saar headshot"
        className="img-fluid rounded-circle shadow mt-4"
        style={{ maxWidth: '220px' }}
      />
    </SlideInSection>
  );
}

export default Intro;