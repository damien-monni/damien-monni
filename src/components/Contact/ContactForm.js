import React from 'react';

import styles from './ContactForm.module.css';
import clsx from 'clsx';

const ContactForm = () => {
  return (
    <form data-netlify="true">
      <div className={styles.textField}>
        <label htmlFor="email">E-mail :</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className={styles.textField}>
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="10" />
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
