import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SlideInSection from '../../components/SlideInSection';

function ContactPreview() {
  return (
    <SlideInSection direction="right" className="bg-body-tertiary">

      <h2 className="mb-4">Let’s Connect</h2>
      <p className="lead">
        Got questions or want to work together?
        <br />
        Reach out via email or send me a message on the contact page.
      </p>
      <p className="mt-4">
        <strong>Email:</strong>{' '}
        <a href="mailto:alonsaar8@gmail.com">alonsaar8@gmail.com</a><br />
        <strong>Phone:</strong>{' '}
        <a href="tel:8088253322">(808) 825-3322</a>
      </p>

      <Link to="/contact" className="btn btn-primary mt-3">
        Go to Contact Page
      </Link>
      </SlideInSection>
  );
}

export default ContactPreview;
