import React from 'react';
import styles from './HomepageFeatureSection.module.scss';

export default function FeatureSection(){
  return(
    <section className={styles["features__container"]}>
      { /* Feature 1 */ }
      <div className={styles["feature"]}>
        <div className={styles["feature__details"]}>
          <h3 className={styles["feature__title"]}>Enjoy on your TV.</h3>
          <h5 className={styles["feature__sub__title"]}>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
            Blu-ray players, and more.
          </h5>
        </div>
        <div className={styles["feature__image__container"]}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="Feature"
            className={styles["feature__image"]}
          />
          <div className={styles["feature__backgroud__video__container"]}>
            <video
              autoPlay=""
              loop=""
              muted=""
              className={styles["feature__backgroud__video"]}
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      { /* Feature 2 */ }
      <div className={styles["feature"]}>
        <div className={styles["feature__details"]}>
          <h3 className={styles["feature__title"]}>
            Download your shows to watch offline.
          </h3>
          <h5 className={styles["feature__sub__title"]}>
            Save your favourites easily and always have something to watch.
          </h5>
        </div>
        <div className={styles["feature__image__container"]}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="Feature"
            className={styles["feature__image"]}
          />
          <div className={styles["feature__2__poster__container"]}>
            <div className={styles["poster__container"]}>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt="poster"
                className={styles["poster"]}
              />
            </div>
            <div className={styles["poster__details"]}>
              <h4>Stranger Things</h4>
              <h6>Downloading...</h6>
            </div>
            <div className={styles["download__gif__container"]}>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="downloading gif"
                className={styles["gif"]}
              />
            </div>
          </div>
        </div>
      </div>
      { /* Feature 3 */ }
      <div className={styles["feature"]}>
        <div className={styles["feature__details"]}>
          <h3 className={styles["feature__title"]}>Watch everywhere.</h3>
          <h5 className={styles["feature__sub__title"]}>
            Stream unlimited movies and TV shows on your phone, tablet,
            laptop, and TV.
          </h5>
        </div>
        <div className={`${styles["feature__image__container"]} ${styles["feature__image__container--no-margin-top"]}`}>
        { /* 
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="Feature"
            className={`${styles["feature__image"]} ${styles["feature__3__image"]}`}
          />
          <div
            className={`${styles["feature__backgroud__video__container"]} ${styles["feature__3__backgroud__video__container"]}`}
          >
            <video
              autoPlay=""
              loop=""
              muted=""
              className={`${styles["feature__backgroud__video"]} ${styles["feature__3__backgroud__video"]}`}
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        */ }
        </div>
      </div>
      { /* Feature 4 */ }
      <div className={styles["feature"]}>
        <div className={styles["feature__details"]}>
          <h3 className={styles["feature__title"]}>Create profiles for kids.</h3>
          <h5 className={styles["feature__sub__title"]}>
            Send kids on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h5>
        </div>
        <div className={`${styles["feature__image__container"]} ${styles["feature__image__container--no-margin-top"]}`}>
          <img
            src="https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
            alt="Feature"
            className={styles["feature__image"]}
          />
        </div>
      </div>
    </section>
  );
}