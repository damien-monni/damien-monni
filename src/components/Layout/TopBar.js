import React from 'react';
import Link from 'next/link';

import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <nav className={styles.root}>
      <ul>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li className={styles.portfolioItem}>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
