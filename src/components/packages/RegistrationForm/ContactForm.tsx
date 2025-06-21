import styles from "./ContactForm.module.css";
import Contact from "./CotactForm/Contact";

export default async function RegistrationForm({ title1 }: { title1: string }) {
  return (
    <section className="section no-padding-y">
      <div className="container">
        <div className={styles.reservationWrapper}>
          <div className={styles.reservation}>
            {title1 && <p className="heading3 primary8">{title1}</p>}
            <Contact
              userEmail
              userName
              userSurname
              phone
              message
              address
              nationality
              avsNumber
              birth
              boolean
              terms1
              terms2
              groups
            />
          </div>
        </div>
      </div>
    </section>
  );
}
