import { useState } from 'react';

// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-a-stateful-react-form
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const useContactForm = () => {
  const [inputs, setInputs] = useState({ email: '', message: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'damien-monni-form-contact': 'contact', ...inputs }),
    })
      .then(() => alert('Message envoyé avec succès'))
      .catch(() =>
        alert(
          'Une erreur est survenue. Envoyez-moi un e-mail à contact@damien-monni.com',
        ),
      );
  };

  return {
    email: inputs.email,
    message: inputs.message,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
  };
};

export default useContactForm;
