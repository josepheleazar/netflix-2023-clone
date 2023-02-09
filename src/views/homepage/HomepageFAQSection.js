import React from 'react';
import styles from './HomepageFAQSection.module.scss';

export default function FAQSection(){
  const accordionOnClickHandler = (event) => {
    const currAccordion = event.target;

    if(currAccordion.childNodes[1].classList.contains('fa-plus')){
      currAccordion.childNodes[1].classList.remove("fa-plus");
      currAccordion.childNodes[1].classList.add("fa-times");
    } else {
      currAccordion.childNodes[1].classList.remove("fa-times");
      currAccordion.childNodes[1].classList.add("fa-plus");
    }

    let content = currAccordion.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  return(
    <section className={styles["FAQ__list__container"]}>
      <h1 className={styles["FAQ__heading"]}>Frequently Asked Questions</h1>
      <div className={styles["FAQ__list"]}>
        <div className={styles["FAQ__accordion"]}>
          <button className={styles['FAQ__title']} onClick={(e) => accordionOnClickHandler(e)}>
            What is Netflix?<i className="fal fa-plus"></i>
          </button>
          <div className={styles["FAQ__visible"]}>
            <p>
              Netflix is a streaming service that offers a wide variety of 
              award-winning TV shows, movies, anime, documentaries, and 
              more on thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want 
              without a single commercial – all for one low monthly price. 
              There's always something new to discover and new TV shows 
              and movies are added every week!
            </p>
          </div>
        </div>
        <div className={styles["FAQ__accordion"]}>
          <button className={styles["FAQ__title"]} onClick={(e) => accordionOnClickHandler(e)}>
            How much does Netflix cost?<i className="fal fa-plus"></i>
          </button>
          <div className={styles["FAQ__visible"]}>
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or 
              streaming device, all for one fixed monthly fee. Plans range 
              from ₱149 to ₱549 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <div className={styles["FAQ__accordion"]}>
          <button className={styles["FAQ__title"]} onClick={(e) => accordionOnClickHandler(e)}>
            Where can I watch?<i className="fal fa-plus"></i>
          </button>
          <div className={styles["FAQ__visible"]}>
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to 
              watch instantly on the web at netflix.com from your personal 
              computer or on any internet-connected device that offers the 
              Netflix app, including smart TVs, smartphones, tablets, 
              streaming media players and game consoles.
            </p>
            <p>
              You can also download your favorite shows with the iOS, 
              Android, or Windows 10 app. Use downloads to watch while 
              you're on the go and without an internet connection. Take 
              Netflix with you anywhere.
            </p>
          </div>
        </div>
        <div className={styles["FAQ__accordion"]}>
          <button className={styles["FAQ__title"]} onClick={(e) => accordionOnClickHandler(e)}>
            How do I cancel?<i className="fal fa-plus"></i>
          </button>
          <div className={styles["FAQ__visible"]}>
            <p>
              Netflix is flexible. There are no pesky contracts and no 
              commitments. You can easily cancel your account online in two 
              clicks. There are no cancellation fees – start or stop your 
              account anytime.
            </p>
          </div>
        </div>
        <div className={styles["FAQ__accordion"]}>
          <button className={styles["FAQ__title"]} onClick={(e) => accordionOnClickHandler(e)}>
            What can I watch on Netflix?<i className="fal fa-plus"></i>
          </button>
          <div className={styles["FAQ__visible"]}>
            <p>
              Netflix has an extensive library of feature films, documentaries, 
              TV shows, anime, award-winning Netflix originals, and more. 
              Watch as much as you want, anytime you want.
            </p>
          </div>
        </div>
        <div className={styles["FAQ__accordion"]}>
          <button className={styles["FAQ__title"]} onClick={(e) => accordionOnClickHandler(e)}>
            Is Netflix good for kids?<i className="fal fa-plus"></i>
          </button>
          <div className={styles["FAQ__visible"]}>
            <p>
              The Netflix Kids experience is included in your membership to 
              give parents control while kids enjoy family-friendly TV shows and movies in their own space.
            </p>
            <p>
              Kids profiles come with PIN-protected parental controls that let 
              you restrict the maturity rating of content kids can watch and 
              block specific titles you don’t want kids to see.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["FAQ__get__started__email"]}>
        <h3>
          Ready to watch? Enter your email to create or restart your
          membership.
        </h3>
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