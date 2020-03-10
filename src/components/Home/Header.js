import React from 'react';
import Link from 'next/link';

import MailIcon from './MailIcon';
import HeaderCode from './HeaderCode';
import Waves from './Waves';
import Ellipse1 from './Ellipse1';
import Ellipse2 from './Ellipse2';
import Ellipse3 from './Ellipse3';

import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div>
            <h1>Damien Monni</h1>
            <p className={styles.subtitle}>
              Développeur web et mobile freelance
            </p>

            <div className={styles.portraitRoot}>
              <div>
                <picture>
                  <source type="image/webp" srcSet="/img/me.webp?v1" />
                  <img src="/img/me.jpg?v1" alt="Damien Monni" />
                </picture>
              </div>
            </div>

            <Link href="#contact">
              <a className="btn btn-big">
                <MailIcon className={styles.mailIcon} /> Un projet ?
                Contactez-moi.
              </a>
            </Link>
          </div>

          <div className={styles.headerCodeContainer}>
            <HeaderCode className={styles.headerCode} />
          </div>
        </div>

        <Ellipse1 className={styles.ellipse1} />
        <Ellipse2 className={styles.ellipse2} />
        <Ellipse3 className={styles.ellipse3} />

        <div className={styles.wavesContainer}>
          <Waves width="210%" height={200} preserveAspectRatio="none" />
        </div>
      </header>
    </>
  );
};

export default Header;
