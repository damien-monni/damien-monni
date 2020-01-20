import React from 'react';
import ContactForm from './ContactForm';
import clsx from 'clsx';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.root}>
      <h2 id="contact" className="align-center">
        Vous avez un projet ?
      </h2>

      <p className={clsx(styles.subtitle, 'align-center')}>
        Contactez-moi pour que l'on en discute !
      </p>

      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
