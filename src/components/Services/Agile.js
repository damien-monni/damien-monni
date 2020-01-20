import React from 'react';

import styles from './Agile.module.css';

const Agile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.figureContainer}>
        <figure>
          <img
            src="/img/agile.svg"
            alt="Damien Monni agile project managment"
          />
        </figure>
      </div>

      <div className={styles.textContainer}>
        <p>
          Grâce à mon expérience je suis capable d'effectuer des missions de
          développement web mais aussi de gestion de projets et lead technique
          sur les technologies que je maitrise.
        </p>
      </div>
    </div>
  );
};

export default Agile;
