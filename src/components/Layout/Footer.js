import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Design et développement Damien Monni.</p>

      <p>
        Le code est libre et{' '}
        <a href="https://github.com/damien-monni/damien-monni/">
          disponible sur GitHub.
        </a>
      </p>

      <p>
        <Link href="/legal">
          <a>Mentions légales</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
