import React from 'react';

import Intro from './Intro';
import Techs from './Techs';
import Engineer from './Engineer';
import Remote from './Remote';
import Agile from './Agile';
import Designer from './Designer';

import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.root}>
      <Intro />
      <Techs />
      <Engineer />
      <Remote />
      <Agile />
      <Designer />
    </section>
  );
};

export default Services;
