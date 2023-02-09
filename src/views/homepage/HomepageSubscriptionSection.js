import React from 'react';
import styles from './HomepageSubscriptionSection.module.scss';

export default function SearchSection(){
  return(
    <section>
      <div className={styles["subscription__bg__image__container"]}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="BG hero"
          className={styles["subscription__bg__image"]}
        />
      </div>
      <div className={styles["subscription__bg__overlay"]}></div>

      <div className={styles["subscription__card"]}>
        <h1 className={styles["subscription__title"]}>
          Unlimited movies, TV<br />
          shows, and more.
        </h1>
        <p className={styles["subscription__subtitle"]}>Watch anywhere. Cancel anytime.</p>

        <p className={styles["subscription__description"]}>
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>
        <div className={styles["email__form__container"]}>
          <div className={styles["form__container"]}>
            <input type="email" className={styles["email__input"]} placeholder=" " />
            <label className={styles["email__label"]}>Email Address</label>
          </div>
          <button className={styles["primary__button"]}>
            Get Started <i className="fal fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}