// ProjectsPreview.jsx

import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

function ProjectsPreview() {
  const previews = [
    {
      title: 'UI Timeline – Web Development',
      image: '/images/UITimeline.jpg',
    },
    {
      title: 'Algorithm Gauge Application',
      image: '/images/AlgoGaugeHome.png',
    },
    {
      title: 'RV Park Management Appliction',
      image: '/images/RVPark.jpg',
    },
    {
      title: 'Invoicing appliction',
      image: '/images/Invoice.jpg',
    }
  ];

  return (
    <SlideInSection direction="left" className="bg-primary-subtle">
      <h2 className="mb-4">Check out my projects page</h2>

      <div className="row">
        {previews.map((project, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={project.image} alt={project.title} className="card-img-top rounded-top" />
              <div className="card-body">
                {/* <h5 className="card-title text-center fw-bold text-dark">{project.title}</h5> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideInSection>
  );
}

export default ProjectsPreview;