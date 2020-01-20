import React from 'react';

import styles from './Techs.module.css';

const Techs = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <p>
          Au cours de ces dernières années, je me suis spécialisé sur des{' '}
          <strong>technologies modernes</strong> comme React, Node.js, MongoDB
          et le cloud serverless AWS (Lambda, DynamoDB, Cognito, API Gateway,
          S3, Cloud Formation...).
        </p>

        <p>
          Je réalise aussi le développement d'applications mobiles en React
          Native.
        </p>
      </div>

      <picture className={styles.picture}>
        <source type="image/webp" srcSet="/img/techs.webp" />
        <img src="/img/techs.png" alt="Damien Monni tech stack logos" />
      </picture>
    </div>
  );
};

export default Techs;
