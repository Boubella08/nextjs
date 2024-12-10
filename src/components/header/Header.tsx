import Link from 'next/link';
import React from 'react';
import styles from "../header.module.css";
import Navbar from '../header/navbar';





const header = () => {
  return (
     <header className={styles.header}>
      <Navbar />
      <div className={styles.right}>
        <Link href="/login" className={styles.btn}>Login</Link>
        <Link href="register" className={styles.btn}>register</Link>

      </div>



    </header>

  




  )
}

export default header
