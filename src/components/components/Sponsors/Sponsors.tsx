import Image from "next/image";
import styles from "./Sponsors.module.css";
import { giSale1, giSale2, giSale3, sponsor1 } from "@/public/image";
import { useTranslations } from "next-intl";
import HeadLine from "../miniComponents/HeadLine";

const giItems = [
  {
    image: giSale1,
    price: "",
  },
  {
    image: giSale2,
    price: "",
  },
  {
    image: giSale3,
    price: "",
  },
];

export default function Sponsors() {
  const t = useTranslations("homePage.sponsors");

  return (
    <section className="section ">
      <div className="container">
        <HeadLine title={t("title1")} />
        <div className={styles.wrapper}>
          <Image src={sponsor1} height={200} width={500} alt="Dukascopy" />
        </div>
      </div>
    </section>
  );
}
