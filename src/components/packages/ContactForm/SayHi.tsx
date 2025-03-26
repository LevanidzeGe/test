import { getTranslations } from "next-intl/server";
import styles from "./SayHi.module.css";
import ContactForm from "./cotactForm/ContactForm";

export default async function SayHi() {
  const t = await getTranslations("contactForm");
  return (
    <section className="section">
      <div className="container">
        <div className={styles.sayHiWrapper}>
          <div className={styles.sayHiLeo}>
            <span className={`heading2 font2 gray7`}>Say hi to </span>
            <span className={`heading2 font2 ${styles.levani}`}>levani</span>
          </div>
          <p className="header6">
            If you need a designer for your project send me an email.
          </p>
        </div>
      </div>
      <ContactForm
        head1={t("head1")}
        head2={t("head2")}
        name={t("name")}
        email={t("email")}
        phone={t("phone")}
        date={t("date")}
        time={t("time")}
        quantity={t("quantity")}
        message={t("message")}
        button={t("button")}
        send={t("send")}
        thankYou={t("thankYou")}
        comfirmation={t("comfirmation")}
      />
    </section>
  );
}
