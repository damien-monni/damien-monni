import React from 'react';

import styles from './Tech.module.css';

const Tech = ({ tech }) => {
  return <span className={styles.root}>{tech.label}</span>;
};

export default Tech;
