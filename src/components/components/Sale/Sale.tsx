import Image from "next/image";
import styles from "./Sale.module.css";
import { giSale1, giSale2, giSale3 } from "@/public/image";
import { useTranslations } from "next-intl";
import HeadLine from "../miniComponents/HeadLine";

const giItems = [
  {
    image: giSale1,
    price: 40,
  },
  {
    image: giSale2,
    price: 50,
  },
  {
    image: giSale3,
    price: 60,
  },
];

export default function ComponentFour() {
  const t = useTranslations("homePage.componentFour");

  return (
    <section className="section ">
      <div className="container">
        <HeadLine title={t("title1")} />
        <div className={styles.mainWraper}>
          <div className={styles.items}>
            {giItems.map((item, i) => (
              <div key={i} className={styles.eachItemWrap}>
                <Image width={400} height={800} src={item.image} alt="" />
                <div className={styles.priceWrap}>
                  <div className={styles.price}>
                    <span className="heading3">{item.price}</span>
                    <p className="paragraph">Chf</p>
                  </div>
                  <div className={styles.line}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
