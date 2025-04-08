import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

function ProjectsPreview() {
  return (
    <SlideInSection direction="left" className="bg-primary-subtle">

      <h2 className="mb-4">Featured Projects</h2>

      <div className="mb-4">
        <h5>
          <a href="https://ui-timeline.netlify.app/" target="_blank" rel="noreferrer">
            UI Timeline – Web Development
          </a>
        </h5>
        <p className="text-muted">A modern timeline interface built and deployed using front-end tools.</p>
      </div>

      <div>
        <h5>Algorithm Gauge Application</h5>
        <p className="text-muted">
          Hosted on WSU servers — features experiment tracking, history views, and multi-user collaboration.
        </p>
      </div>
      </SlideInSection>
  );
}

export default ProjectsPreview;
