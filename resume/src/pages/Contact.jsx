import { useRef } from 'react';
import emailjs from 'emailjs-com';
import BackToTop from '../components/BackToTop';
import ScrollToHome from '../components/ScrollToHome';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_77gxpod',
      'template_65pi5af',
      form.current,
      '5me1zkN0G7p2JEz02'
    ).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Something went wrong. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <section className="container py-5">
      <h2>Contact Me</h2>
      <p>
        I’m always open to questions, opportunities, or just a friendly chat. Feel free to reach out using the
        form below or directly via email or phone.
      </p>

      <div className="mb-4">
        <p><strong>Email:</strong> <a href="mailto:alonsaar8@gmail.com">alonsaar8@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:8088253322">(808) 825-3322</a></p>
        <p><strong>Location:</strong> P.O Box 129, Hakalau, HI 96710</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="border rounded p-4 shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name*</label>
          <input type="text" className="form-control" id="name" name="custName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone*</label>
          <input type="tel" className="form-control" id="phone" name="custPhone" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email*</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Message*</label>
          <textarea className="form-control" id="reason" name="reason" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary me-2">Send</button>
        <button type="reset" className="btn btn-outline-secondary">Clear</button>
      </form>
    <ScrollToHome/>
    <BackToTop/>
    </section>
    
  );
}

export default Contact;
