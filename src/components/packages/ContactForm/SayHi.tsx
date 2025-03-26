import styles from "./SayHi.module.css";
import ContactForm from "./cotactForm/ContactForm";

export default function SayHi() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.sayHiWrapper}>
          <div className={styles.sayHiLeo}>
            <span className={`heading2 font2 gray7`}>Say hi to </span>
            <span className={`heading2 font2`}>Levani.</span>
          </div>
          <p className="header6">
            If you need a designer for your project send me an email.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
