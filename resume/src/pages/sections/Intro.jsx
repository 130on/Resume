import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

function Intro() {
  return (
    <SlideInSection direction="left" className="bg-primary-subtle">
      <h1 className="display-5 fw-bold mb-4">Welcome to My Resume Site</h1>

      <p className="lead">
        I'm currently looking for a full-time position as a software engineer/developer.
        This site showcases my work, education, and professional journey.
      </p>

      <p>
        I’m actively upgrading this portfolio and would love your feedback.
        Don’t hesitate to reach out through the contact page!
      </p>

      <img
        src="/images/headShot2 (2).jpg"
        alt="Alon Saar headshot"
        className="img-fluid rounded-circle shadow mt-4"
        style={{ maxWidth: '180px' }}
      />
    </SlideInSection>
  );
}

export default Intro;