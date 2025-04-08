import { motion } from 'framer-motion';

function SlideInSection({ children, direction = 'left', className = '' }) {
  const xOffset = direction === 'left' ? -100 : 100;

  return (
    <motion.section
      className={`container py-5 my-5 rounded-4 shadow-sm text-center ${className}`}
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: xOffset }} // for reverse animation 

      transition={{ duration: 1.6 }}
      viewport={{ amount: 0.9, once: false }} // 👈 key change!

    >
      {children}
    </motion.section>
  );
}

export default SlideInSection;
