import Image, { StaticImageData } from "next/image";
import styles from "./PagesHero.module.css";

// import ScrollingButton from "@/components/scrollingButton/ScrollingButton";

interface heroProps {
  title1: string;
  title2: string;
  image: StaticImageData;
  homepage?: boolean;
}

export default function PagesHero({
  image,
  title1,
  title2,
  homepage,
}: heroProps) {
  return (
    <section className="section no-padding-y">
      <div className="container ">
        <div className={styles.wrapper}>
          <div className={styles.sectionWrapper}>
            <div className={styles.mainWrapper}>
              <h1 className="heading2 font2">{title1}</h1>
              <h2 className={`paragraph gray5 ${styles.title}`}>{title2}</h2>
              {/* <ScrollingButton
                value={buttonValue}
                viewHeight={true}
                className="button"
                button={true}
                pixels={20}
              /> */}
            </div>
            <div>
              <Image
                className={`${styles.imageStart} ${
                  homepage ? styles.homePage : styles.photoPage
                }`}
                src={image}
                alt="levani levanidze cartoon"
                width={1000}
                height={1500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
