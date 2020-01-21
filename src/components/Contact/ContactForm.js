import React from 'react';
import clsx from 'clsx';

import styles from './ContactForm.module.css';
import useContactForm from './useContactForm';

const ContactForm = () => {
  const { email, message, onInputChange, onSubmit } = useContactForm();

  return (
    <form
      method="POST"
      data-netlify="true"
      name="damienmonnicontact"
      // onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="damienmonnicontact" />

      <div className={styles.textField}>
        <label htmlFor="email">E-mail :</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </div>

      <div className={styles.textField}>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          rows="10"
          value={message}
          required
          onChange={onInputChange}
        />
      </div>

      <div className={styles.submitContainer}>
        <button type="submit" className={clsx('btn', styles.submitButton)}>
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
