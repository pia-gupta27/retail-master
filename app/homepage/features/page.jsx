import React from 'react';
import styles from '@/app/ui/homepage/features/features.module.css'


const Features = () => {
  return (
    <section id='features' className={styles.features}>
      <h2 className={styles.h2}>Website Features</h2>
      <h5 className={styles.h5}>Core Highlights</h5>
      <br />
      <br />

      <div className={styles.feature__container}>
        <article className={styles.feature__item}>
          <div className={styles.feature__item_image}>
            <img className={styles.img} src='/dashboard3.PNG' alt='' />
          </div>
          <h3 className={styles.h3}>Analytics Dashboard</h3>
          <div className={styles.feature__item_cta}>
            <h4 className={styles.h4}>Gain valuable insights into your business performance with retail analytics.</h4>
          </div>
        </article>

        <article className={styles.feature__item}>
          <div className={styles.feature__item_image}>
            <img className={styles.img} src='/prediction2.PNG' alt='' />
          </div>
          <h3 className={styles.h3}>Sales Prediction</h3>
          <div className={styles.feature__item_cta}>
            <h4 className={styles.h4}>Forecast item sales at specific outlets to optimize inventory and boost sales.</h4>
          </div>
        </article>

        <article className={styles.feature__item}>
          <div className={styles.feature__item_image}>
            <img className={styles.img} src='/customers3.PNG' alt='' />
          </div>
          <h3 className={styles.h3}>Customer Management</h3>
          <div className={styles.feature__item_cta}>
            <h4 className={styles.h4}>Manage customers effectively and tailor marketing to boost satisfaction and loyalty.</h4>
          </div>
        </article>

        <article className={styles.feature__item}>
          <div className={styles.feature__item_image}>
            <img className={styles.img} src='/products2.PNG' alt='' />
          </div>
          <h3 className={styles.h3}>Product Management</h3>
          <div className={styles.feature__item_cta}>
            <h4 className={styles.h4}>Easily manage and optimize stock levels, pricing, and product performance.</h4>
          </div>
        </article>

        <article className={styles.feature__item}>
          <div className={styles.feature__item_image}>
            <img className={styles.img} src='/outlets2.PNG' alt='' />
          </div>
          <h3 className={styles.h3}>Outlet Management</h3>
          <div className={styles.feature__item_cta}>
            <h4 className={styles.h4}>Efficiently manage multiple outlets and make strategic operational decisions.</h4>
          </div>
        </article>

        <article className={styles.feature__item}>
          <div className={styles.feature__item_image}>
            <img className={styles.img} src='/interface3.PNG' alt='' />
          </div>
          <h3 className={styles.h3}>User Friendly Interface</h3>
          <div className={styles.feature__item_cta}>
            <h4 className={styles.h4}>Easily navigate and utilize our tools for streamlined and efficient business operations.</h4>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Features;
