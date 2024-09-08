import React from 'react';

import styles from '@/app/ui/homepage/about/about.module.css'


const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.h2}>RETAIL MASTER</h2>
      <h5 className={styles.h5}>Get To Know</h5>
      <br />
      <br />

      <div className={styles.about__container}>
        <div className={styles.about__me}>
          <div className={styles.about__meImage}>
            <img className={styles.img} src='/sales2.jpg' alt="Sales Prediction" />
          </div>
        </div>

        <div className={styles.about__content}>
          <p>
            Welcome to Retail Master, your ultimate solution for streamlining retail business management with an intuitive dashboard and powerful sales prediction tools, empowering you to make data-driven decisions and drive growth.
          </p>

          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <h5>About Us</h5>
              <small>A dedicated team of three trying to solve all your business needs in one place, empowering growth with confidence.</small>
              <br />
            </article>
            <article className={styles.about__card}>
              <h5>Our Mission</h5>
              <small>To empower retail business owners with tools and insights for informed decisions, efficiency, and growth.</small>
              <br />
            </article>
            <article className={styles.about__card}>
              <h5>Why Choose Us</h5>
              <small>We are committed to providing a user-friendly and powerful platform that simplifies retail management.</small>
              <br />
            </article>
          </div>

          <a href="#contact" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </section>
  );
}

export default About;