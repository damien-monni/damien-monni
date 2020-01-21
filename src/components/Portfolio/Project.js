import React from 'react';
import clsx from 'clsx';

import Tech from './Tech';
import styles from './Project.module.css';

const Project = ({ children, title, subtitle, techs, picture, invert }) => {
  return (
    <section className={clsx(styles.root, invert && styles.invert)}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        {techs?.length ? (
          <p className={styles.techsContainer}>
            {techs.map((tech) => {
              return <Tech key={tech.id} tech={tech} />;
            })}
          </p>
        ) : null}

        {children}
      </div>

      <picture>
        <source
          type="image/webp"
          srcSet={`/img/portfolio/${picture.src}.webp`}
        />
        <img src={`/img/portfolio/${picture.src}.png`} alt={picture.alt} />
      </picture>
    </section>
  );
};

export default Project;
