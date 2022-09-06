import { useForm } from '@formspree/react';
import { useState } from 'react';

export default function useContactForm() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const [state, submitToFormSpree] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID || '',
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitToFormSpree(event);
    setEmail('');
    setMessage('');
  };

  return {
    state,
    email,
    message,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
  };
}
