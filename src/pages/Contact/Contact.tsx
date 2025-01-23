import ContactForm from './ContactForm';
import { TfiEmail } from 'react-icons/tfi';

import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <header className="contact-header">
          <TfiEmail size={32} />
          <h1>Contato</h1>
        </header>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
