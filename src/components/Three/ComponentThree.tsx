import Image from "next/image";
import styles from "./ComponentThree.module.css";
import { useLocale, useTranslations } from "next-intl";
import { childrenTeam, giSvg, giorgiSofia } from "@/public/image";
import Link from "next/link";

export default function ComponentThree() {
  const t = useTranslations("storyPage.componentThree");
  const locale = useLocale();
  return (
    <section className="section">
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.leftDiv}>
            <div className={styles.iconTextDiv}>
              <Image src={giSvg} height={70} width={50} alt="" />
              <h2 className="heading3 color4">მასწავლებელი</h2>
            </div>
            <div className={styles.middleDiv}>
              <h2 className="heading2 color4">გიორგი კურტანიძე</h2>
              <p className="paragraph">
                გიორგი კურტანიძე, ძიუდოს გამოცდილი ინსტრუქტორი საქართველოდან,
                სპორტში 20 წელზე მეტი გამოცდილებით გამოირჩევა. ბოლო 15 წლის
                განმავლობაში იგი ჟენევაში ასწავლის და 2-15 წლის ასაკის ბავშვებს
                უვითარებს ძიუდოს ტექნიკასა და ღირებულებებს, როგორიცაა
                პატივისცემა და გუნდური მუშაობა. გიორგის ერთგულება და
                პროფესიონალიზმი მას ადგილობრივი საზოგადოების პატივცემულ ფიგურად
                აქცევს.
              </p>
              <Link className="button button-reverse heading4" href="/">
                რეგისტრაცია
              </Link>
            </div>
            <div className={styles.lowerDiv}>
              <h4 className="heading3 white">100+ აქტიური მოსწავლე</h4>
              <p className="paragraph gray3">
                15 წლის მანძილზე დაგროვილი ცოდნა და გამოცდილება ჩვენი სკოლის
                მთავარი სიმდიდრეა
              </p>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <Image src={giorgiSofia} width={800} height={800} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
