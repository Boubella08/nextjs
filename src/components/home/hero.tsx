import React from "react";
import { TiTick } from "react-icons/ti";
import CloudImage from "../../../public/cloud-hosting.png"
import Image from "next/image";
import styles from "./hero.module.css"

const hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroleft}>
                <h1 className={styles.title}>HOSTING</h1>
                <p className={styles.desc}>The best web HOSTING solution</p>
                <div className={styles.service}>
                    <div className={styles.serviceitem} > <TiTick />  Easy to use control panel</div>
                    <div className={styles.serviceitem}> <TiTick /> Secure hosting</div>
                    <div className={styles.serviceitem}> <TiTick />Website Maintenance</div>
                </div>
            </div>

            <div className={styles.heroimage}>
                <Image src={CloudImage} alt="cloud" width={500} height={500}></Image>
            </div>
        </div>
    );
};

export default hero;
