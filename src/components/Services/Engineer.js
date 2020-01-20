import React from 'react';

import styles from './Engineer.module.css';

const Engineer = () => {
  return (
    <div className={styles.root}>
      <figure>
        <img src="/img/engineer.svg" alt="Damien Monni engineer" />
      </figure>

      <div className={styles.textContainer}>
        <p>
          Auparavant <strong>ingénieur en informatique industrielle</strong>{' '}
          dans la multinationale Schneider Electric, j'ai eu l'opportunité de
          participer à des projets de grosses envergures pour des clients
          industriels importants : Airbus, Stade de France, Eurotunnel,
          Lactalis...
        </p>

        <p>
          Cela m’a permis d'acquérir une forte <strong>rigueur</strong> dans la{' '}
          <strong>gestion de mes projets</strong> et une vision professionnelle
          des deroulés d'un projet.
        </p>
      </div>
    </div>
  );
};

export default Engineer;
