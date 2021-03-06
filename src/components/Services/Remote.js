import React from 'react';

import styles from './Remote.module.css';

const Remote = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <p>
          Aujourd'hui, je privilégie les projets web effectués majoritairement
          en télétravail qui permettent à mon sens un fort gain en productivité
          grâce à une gestion du temps et organisation personnelle{' '}
          <strong>optimisée</strong>, <strong>autonome</strong> et{' '}
          <strong>productive</strong>.
        </p>

        <p>
          J’accepte tout de même des déplacements occasionnels parfois
          nécessaires à la bonne réalisation d’un projet.
        </p>
      </div>

      <picture className={styles.picture}>
        <source type="image/webp" srcSet="/img/remote.webp" />
        <img src="/img/remote.png" alt="Damien Monni remote" />
      </picture>
    </div>
  );
};

export default Remote;
