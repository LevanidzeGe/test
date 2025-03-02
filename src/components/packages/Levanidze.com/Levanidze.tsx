import styles from "./Levanidze.module.css";
import Image from "next/image";
import Link from "next/link";
import bg from "./bg.svg";
import logo from "./logo.png";
import photo from "./photo.jpg";
import web from "./web.jpg";

export default function Levanidze() {
  return (
    <div className={styles.mainWrapper}>
      <Image
        className={styles.background}
        src={bg}
        height={500}
        width={1400}
        alt="levanidze.com vector background"
      />
      <section className={`section no-padding-y`}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.textDiv}>
              <h2>
                Our <p> website </p> and <p> photography </p> provided by
                <p> Levanidze </p>
              </h2>
              <div className={`${styles.domainWrapper} lift shadow2`}>
                <Link className={styles.domain} href="https://levanidze.com">
                  <h3 className="heading2">
                    www.<span className="">Levanidze</span>.com
                  </h3>
                  <Image
                    className={styles.logo}
                    src={logo}
                    alt="Levanidze Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <Link href="https://levanidze.com">
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <Image
                      className="lift shadow2"
                      src={photo}
                      width={600}
                      height={400}
                      alt="Photographer Levanidze.com"
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      className="lift shadow2"
                      src={web}
                      width={600}
                      height={400}
                      alt="Website designer Levanidze.com"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
