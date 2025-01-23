import { useState } from 'react';
import SuccessMessage from './SuccessMessage';
import { z } from 'zod';
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'O assunto é obrigatório'),
  message: z.string().min(1, 'A mensagem é obrigatória'),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação com zod
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.errors.map((err) => err.message).join(', '));
      return;
    }

    try {
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors(null);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setErrors('Erro ao enviar o e-mail. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      {submitted && <SuccessMessage />}
      {errors && <div className="error-message">{errors}</div>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Assunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
