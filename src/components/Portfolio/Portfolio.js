import React from 'react';

import Perso from './Projects/Perso';
import styles from './Portfolio.module.css';
import KeepBlogging from './Projects/KeepBlogging';

const Portfolio = () => {
  return (
    <>
      <h1 className={styles.title}>Portfolio</h1>

      <Perso />
      <KeepBlogging />
    </>
  );
};

export default Portfolio;
