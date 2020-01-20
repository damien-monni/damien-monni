import React from 'react';

import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <nav className={styles.root}>
      <ul>
        <li>Accueil</li>
        <li className={styles.portfolioItem}>Porfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default TopBar;
