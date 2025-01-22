import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <header className="contact-header">
          <h1>Contato</h1>
        </header>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
