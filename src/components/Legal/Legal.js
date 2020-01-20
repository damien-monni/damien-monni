import React from 'react';

import styles from './legal.module.css';
import Privacy from './Privacy';

function Legal() {
  return (
    <section className={styles.root}>
      <h1>Mentions légales</h1>
      <p>Développé par Damien Monni.</p>
      <p>
        Micro-entrepreneur domicilié au 6 rue Robert Schuman, 78120 Rambouillet.
        SIRET 830 816 690 00010
      </p>
      <p>contact@damien-monni.com - +33 (0)6 67 95 56 76.</p>
      <p>Directeur de la publication : Damien Monni.</p>
      <p>
        Hébergé par Netlify, San Francisco,
        États-Unis&nbsp;-&nbsp;https://www.netlify.com.
      </p>

      <Privacy />
    </section>
  );
}

export default Legal;
