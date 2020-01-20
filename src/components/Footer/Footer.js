import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Ce site a été designé et développé par Damien MONNI</p>

      <p>
        Le code est libre et <a>disponible sur GitHub.</a>
      </p>

      <p>
        2020 - <a>Mentions légales</a>
      </p>
    </footer>
  );
};

export default Footer;
