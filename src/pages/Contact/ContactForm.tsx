import { useReducer, useCallback } from 'react';
import SuccessMessage from './SuccessMessage';
import { z } from 'zod';
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'O assunto é obrigatório'),
  message: z.string().min(1, 'A mensagem é obrigatória'),
});

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormState = {
  formData: FormData;
  submitted: boolean;
  errors: string | null;
};

const initialState: FormState = {
  formData: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  submitted: false,
  errors: null,
};

const formReducer = (state: FormState, action: { type: string; payload?: any }): FormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'SUBMIT_SUCCESS':
      return { ...state, submitted: true, formData: initialState.formData, errors: null };
    case 'RESET_SUBMIT':
      return { ...state, submitted: false };
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const result = formSchema.safeParse(state.formData);
      if (!result.success) {
        dispatch({
          type: 'SET_ERRORS',
          payload: result.error.errors.map((err) => err.message).join(', '),
        });
        return;
      }

      try {
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || '';
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || '';
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || '';

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
          console.log(import.meta.env);
          console.error('Variáveis de ambiente estão faltando!');
          return;
        }

        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          state.formData,
          PUBLIC_KEY
        );

        dispatch({ type: 'SUBMIT_SUCCESS' });
        setTimeout(() => dispatch({ type: 'RESET_SUBMIT' }), 3000);
      } catch (error) {
        dispatch({ type: 'SET_ERRORS', payload: 'Erro ao enviar o e-mail. Tente novamente mais tarde.' });
      }
    },
    [state.formData]
  );

  const { formData, submitted, errors } = state;

  return (
    <div>
      {submitted && <SuccessMessage />}
      {errors && <div className="error-message">{errors}</div>}
      <form className="contact-form" onSubmit={handleSubmit}>
        {['name', 'email', 'subject', 'message'].map((field) => (
          <div key={field} className="form-group">
            <label htmlFor={field}>{field === 'name' ? 'Nome' : field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === 'message' ? (
              <textarea
                id={field}
                name={field}
                rows={5}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                required
              ></textarea>
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="submit-button">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
