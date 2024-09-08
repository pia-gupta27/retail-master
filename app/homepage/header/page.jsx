

import React from 'react';

import styles from '@/app/ui/homepage/header/header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>Retail Master</div>
      <Link href="/login">
      <button className={styles.loginButton}>Login</button>
      </Link>
    </header>
  );
};

export default Header;


