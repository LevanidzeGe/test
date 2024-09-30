import styles from "./ImageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";
import { companyName, phoneNumber } from "@/Manager/info";

export default function ImageOverlay() {
  return (
    <section className="section no-padding-y">
      <div className="container">
        <div className={styles.overlayWrapper}>
          <div className={styles.empty}></div>
          <div className={styles.middle}>
            <h2 className="heading5 color2">Welcome to</h2>
            <h1 className="heading1 ">{companyName}</h1>
            <div className="twoLines"></div>
            <p className="paragraph white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              optio earum reiciendis placeat quis iusto doloremque facere eaque.
              Deleniti corrupti fugiat nesciunt dolore officia aperiam ipsam
              accusantium, debitis nisi unde?
            </p>
            <div className={styles.buttons}>
              <Link className="button" href="./menu">
                View Menu
              </Link>
              <Link href="/reservation" className="button button-reverse">
                Book a Table
              </Link>
            </div>
          </div>
          <div className="section no-padding-y">
            <div className="container ">
              <div className={styles.bottom}>
                <Link className="paragraph font1" href={`tel:${phoneNumber}`}>
                  <FiPhone className={`${styles.phoneIcon}`} />
                  {phoneNumber}
                </Link>
                <div className={styles.icons}>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
