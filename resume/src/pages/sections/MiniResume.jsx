import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

function MiniResume() {
  return (
    <SlideInSection direction="right" className="bg-body-tertiary">
      <h2 className="mb-4">Quick Profile</h2>
      <p className="lead">
        I'm a Computer Science major with a law degree (LL.B), bringing a unique blend of analytical and technical skills.
        I’ve worked in both legal and tech industries, and I’m now focused on software engineering full-time.
      </p>
      <p>
        I graduate in May 2025 and am currently seeking a full-time software engineer role. I’m experienced in OOP,
        databases, backend & frontend frameworks, and development tools like Git and Docker.
      </p>
    </SlideInSection>
  );
}

export default MiniResume;
