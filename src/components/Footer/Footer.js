import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Ce site a été designé et développé par Damien MONNI</p>

      <p>
        Le code est libre et{' '}
        <a href="https://github.com/damien-monni/damien-monni/">
          disponible sur GitHub.
        </a>
      </p>

      <p>
        2020 -{' '}
        <Link href="/legal">
          <a>Mentions légales</a>
        </Link>
        - v1
      </p>
    </footer>
  );
};

export default Footer;
