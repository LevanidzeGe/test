import styles from "./ComponentTwo.module.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { childrenTeam } from "@/public/image";
interface componentTwoProps {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  text1: string;
  text2: string;
  text3: string;
  button?: string;
}

export default function ComponentTwo({
  title1,
  title2,
  title3,
  title4,
  title5,
  text1,
  text2,
  text3,
  button,
}: componentTwoProps) {
  const locale = useLocale();
  const t = useTranslations("homePage.componentTwo");
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.upperDiv}>
          <h2 className=" heading2 color4">რატომ ჩვენი სკოლა?</h2>
          <h3 className="heading3 gray5">
            გარანტირებული შედეგი სპორტული აქტივობა და მეგობრული ატმოსფერო{" "}
          </h3>
        </div>
        <div className={styles.middleDiv}>
          <div className={styles.firstBox}>
            <h3 className="heading2 white">რატომ ჩვენი სკოლა?</h3>
            <p className="paragraph gray3">
              გარანტირებული შედეგი სპორტული აქტივობა და მეგობრული ატმოსფერო{" "}
            </p>
          </div>
          <Image
            width={800}
            height={300}
            alt=""
            src={childrenTeam}
            className={styles.secondBox}
          ></Image>
          <div className={styles.thirdBox}>
            <h3 className="heading3 white">მეგობრული ატმოსფერო</h3>
            <p className="paragraph gray3">
              განვითარება მეგობრულობის, სპორტული აქტივობის და დისციპლინის
              განხრით
            </p>
          </div>
        </div>
        <div className={styles.lowerDiv}>
          <div className={styles.fourthBox}>
            <h3 className="heading2 white">შეჯიბრი ბოლო ერთი წელში</h3>
            <p className="paragraph gray3">
              ბოლო ერთ წელში ჩვენი მოსწავლეები არაერთ შეჯიბრში მონაწილეობდნენ და
              დამსახურებულად მოიპოვეს ოქროს, ვერცხლის და ბრინჯაოს მედლები!
            </p>
          </div>
          <Image
            width={800}
            height={300}
            alt=""
            src={childrenTeam}
            className={styles.fifthBox}
          ></Image>
        </div>
      </div>
    </section>
  );
}
