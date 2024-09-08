
import React from 'react';
import styles from '@/app/ui/homepage/footer/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}> 
      <a href='#!' className={styles.footer__logo}>RETAIL MASTER</a>

      <ul className={styles.permalinks}>
        <li><a href='#about'>Home</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='#login'>Login</a></li>
        <li><a href='#signup'>Signup</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
