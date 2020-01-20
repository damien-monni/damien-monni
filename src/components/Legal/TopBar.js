import React from 'react';

import styles from './TopBar.module.css';

function TopBar() {
  return (
    <nav className={styles.nav}>
      <p>Damien Monni</p>
      <p>
        <a href="/">Accueil</a>
      </p>
    </nav>
  );
}

export default TopBar;
