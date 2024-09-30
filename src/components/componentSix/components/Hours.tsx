import React from "react";
import styles from "./Hours.module.css";
import Link from "next/link";

export default function Hours() {
  return (
    <div className={styles.hoursMainWrap}>
      <div className={styles.hoursWrap}>
        <div className={styles.hoursHead}>
          <h3>Welcome</h3>
          <h4 className="heading4">Opening Hours</h4>
        </div>
        <div className={styles.hoursTimes}>
          <div className={styles.timesDay}>
            <p className={styles.day}>monday</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>8am - 10pm</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>tuesday</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>8am - 10pm</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>wednsday</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>8am - 10pm</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>thursday</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>8am - 10pm</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>friday</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>8am - 10pm</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>saturday</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>8am - 10pm</p>
          </div>

          <div className={styles.timesDay}>
            <p className={styles.day}>sunday</p>
            <div className={styles.dotted}></div>
            <p className={styles.closed}>Closed</p>
          </div>
        </div>
        <div className={styles.hoursReserv}>
          <Link className="button" href="/reservation">
            Book a Table
          </Link>
        </div>
      </div>
    </div>
  );
}
