"use client"

import Header from '@/app/homepage/header/page'
import About from '@/app/homepage/about/page';
import Features from '@/app/homepage/features/page';
import Contact from '@/app/homepage/contact/page';
import Footer from '@/app/homepage/footer/page';
import styles from '@/app/ui/page.module.css';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
       
        <Header />
        <div className={styles.container}>
        <About />
        <Features />
        <Contact />
        </div>
        <Footer />
      
    </div>
  );
};

export default Homepage;



