import React from 'react';

import styles from './Designer.module.css';

const Designer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <p>
          Enfin, j'ai aussi un attrait pour l'univers du design et je suis ainsi
          capable de realiser des maquettes graphiques de sites web avec Figma,
          Photoshop ou Adobe XD.
        </p>

        <p>
          Même si je ne me considère pas designer professionnel, ces compétences
          peuvent s'avérer utiles lors de la réalisation d'applications web et
          mobiles.
        </p>
      </div>

      <div className={styles.figureContainer}>
        <figure>
          <img src="/img/designer.svg" alt="Damien Monni designer" />
        </figure>
      </div>
    </div>
  );
};

export default Designer;
