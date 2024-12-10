"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import styles from "../header.module.css";
import { GiTechnoHeart } from "react-icons/gi";
import { RxEyeOpen } from "react-icons/rx";
import { VscEyeClosed } from "react-icons/vsc";




const navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <Link href="/" className={styles.logo}>Avz <GiTechnoHeart /> tech</Link>

          <div className={styles.menu}>
            {toggle ? (<VscEyeClosed onClick={() => setToggle(prev => !prev)} />) : <RxEyeOpen onClick={() => setToggle(prev => !prev)} />}



          </div>
        </div>

        <div className={styles.linksWrapper} style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || "" }} >

          <ul className={styles.links}>
            <Link onClick={() => setToggle(false)} href="/" className={styles.link}>Home</Link>
            <Link onClick={() => setToggle(false)} href="Article" className={styles.link}>Articles</Link>
            <Link onClick={() => setToggle(false)} href="/About" className={styles.link}>About</Link>
            <Link onClick={() => setToggle(false)} href="/admin" className={styles.link}>admin</Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar
