import React from "react";
import styles from "./LowerFoot.module.css";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "./leo.png";

export default function LowerFoot() {
  return (
    <div className={styles.lowerWrap}>
      <div className={styles.footerOverlay}>
        <p className={` ${styles.heartName} ${styles.dimmed}`}>
          Created with <FaHeart className={styles.heart} />
          by
        </p>

        <Link href="https://www.levanidze.com/" target="_blank">
          <p className={`font2 ${styles.domain}`}>Levanidze.com</p>
        </Link>
        <Link href="https://www.levanidze.com/" target="_blank">
          <Image
            className={styles.logo}
            src={logo}
            width={40}
            height={40}
            alt="levanidze.com"
          />
        </Link>
      </div>
    </div>
  );
}
