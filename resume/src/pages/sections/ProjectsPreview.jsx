






// ProjectsPreview.jsx

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';
import { Link } from 'react-router-dom';

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

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % previews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [previews.length]);

  return (
    <SlideInSection direction="left" className="bg-primary-subtle">
      <h2 className="mb-4">Featured Projects</h2>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 mb-4">
          <Link to="/projects" className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={previews[current].image}
                  src={previews[current].image}
                  alt={previews[current].title}
                  className="card-img-top rounded-top"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="card-body">
                <h5 className="card-title text-center fw-bold text-dark">
                  {previews[current].title}
                </h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </SlideInSection>
  );
}

export default ProjectsPreview;
