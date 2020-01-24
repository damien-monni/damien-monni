import React from 'react';

import Perso from './Projects/Perso';
import styles from './Portfolio.module.css';
import KeepBlogging from './Projects/KeepBlogging';
import Digicolis from './Projects/Digicolis';
import Sourcin from './Projects/Sourcin';
import Keeze from './Projects/Keeze';
import Datastore from './Projects/Datastore';
import Neop from './Projects/Neop';
import SimplePlanningPoker from './Projects/SimplePlanningPoker';

const Portfolio = () => {
  return (
    <>
      <h1 className={styles.title}>Portfolio</h1>

      <Perso />
      <KeepBlogging invert />
      <Digicolis />
      <Sourcin invert />
      <Keeze />
      <Datastore invert />
      <Neop />
      <SimplePlanningPoker invert />
    </>
  );
};

export default Portfolio;
