import React from 'react';
import styles from './styles.module.scss';

export default function Header(){
  return(
    <header>
      <nav className={styles['navbar']}>
        <div className={styles['navbar__brand']}>
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            className={styles["brand__logo"]}
          />
        </div>

        <div className={styles['navbar__nav__items']}>
          <div className={styles['nav__item']}>
            <div className={styles['dropdown__container']}>
              <i className="fas fa-globe"></i>
              <select
                name="languages"
                id="languagesSelect"
                className={styles['language__drop__down']}
                defaultValue="english"
              >
                <option value="english">English</option>
                <option value="filipino">Filipino</option>
              </select>
            </div>
          </div>

          <div className={styles['nav__item']}>
            <button className={styles['signin__button']}>Sign in</button>
          </div>
        </div>
      </nav>
    </header>
  );
}