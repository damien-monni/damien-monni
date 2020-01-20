import React from 'react';
import Link from 'next/link';

import styles from './TopBar.module.css';

function TopBar() {
  return (
    <nav className={styles.nav}>
      <p>Damien Monni</p>
      <p>
        <Link href="/">
          <a>Accueil</a>
        </Link>
      </p>
    </nav>
  );
}

export default TopBar;
