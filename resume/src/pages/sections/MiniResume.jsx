import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

function MiniResume() {
  return (
    <SlideInSection direction="right" className="bg-body-tertiary">
      <h2 className="mb-4">Quick Profile</h2>
      <p className="lead">
        I am a Computer Science graduate with a law degree (LL.B), bringing a unique blend of analytical and technical skills. <br />
        I’m now focused on software engineering. <br /> <br />
        I graduated in May 2025 and I am currently seeking a full-time software engineer role. <br /> I am familiar and have experience in OOP,
        databases, backend & frontend frameworks, and development tools like Git and Docker.
      </p>
    </SlideInSection>
  );
}

export default MiniResume;
