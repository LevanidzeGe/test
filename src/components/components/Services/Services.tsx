import Image from "next/image";
import styles from "./Services.module.css";
import { camera, development, monitor } from "@/public/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className={styles.mainWrapper}>
      <h2 className="heading4 font3 ">Our Services</h2>
      <div className={styles.socialCard}>
        <div className={styles.cardsWrapper}>
          <Link href="/projects" className={`shadow5 lift ${styles.card}`}>
            <Image
              src={development}
              alt="development icon"
              width={80}
              height={80}
            />
            <div>
              <h3 className="font2">Websites</h3>
            </div>
          </Link>
          <Link href="/projects" className={`shadow5 lift ${styles.card}`}>
            <Image src={camera} alt="photography icon" width={80} height={80} />
            <div>
              <h3 className="font2">photography</h3>
            </div>
          </Link>
          <Link href="/projects" className={`shadow5 lift ${styles.card}`}>
            <Image src={monitor} alt="  icon" width={80} height={80} />
            <div>
              <h3 className="font2">branding</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
