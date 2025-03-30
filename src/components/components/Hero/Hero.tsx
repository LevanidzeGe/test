import {
  heroBG,
  heroScreens,
  meBuble,
  meCactus,
  meCamera,
} from "@/public/image";
import styles from "./Hero.module.css";
import Image from "next/image";
import { companyDomain } from "@/Manager/info";
import Services from "../Services/Services";
import SocialMedia from "../SocMedia/SocialMedia";

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <Image
        className={styles.bgImage}
        alt="vector background"
        src={heroBG}
        width={1300}
        height={1000}
      />
      <section className={`section no-padding-y  `}>
        <div className="container">
          <div className={styles.heroInnerWrapper}>
            <div className={styles.topDiv}>
              <div className={styles.textDiv}>
                <div>
                  <span className="headin5 font2 gray3">hi, there!</span>
                  <h1 className="heading1">
                    <strong className="red2"> Levanidze </strong> here to
                    increase <br />
                    your online presence
                  </h1>

                  <h2 className="heading5 font2 gray5">
                    gained skills years of experience in web design and
                    photography are helping me to be doing high standard service
                    in online world{" "}
                  </h2>

                  <div className={`buttonCard ${styles.button}`}>
                    <span></span>
                    <p></p>
                    <button>get in touch</button>
                  </div>
                </div>
                <Image
                  className={styles.buble}
                  src={meBuble}
                  alt={`${companyDomain} 3d cartoon`}
                  width={200}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.middleDiv}>
              <Image
                className={styles.monitors}
                src={heroScreens}
                width={1500}
                height={700}
                alt={`${companyDomain} hero design`}
              />
              <div className={styles.cameraCactus}>
                <Image
                  className={styles.camera}
                  src={meCamera}
                  width={250}
                  height={250}
                  alt={`${companyDomain} hero design`}
                />
                <Image
                  className={styles.cactus}
                  src={meCactus}
                  alt="monitor icon"
                  width={300}
                  height={250}
                />
              </div>
            </div>
            <Services />
            <SocialMedia />
          </div>
        </div>
      </section>
    </div>
  );
}
