import styles from "./Divider.module.css";

export default function Divider() {
  return (
    <section className="section no-padding-y">
      <div className="container">
        <div className={styles.thinLine}></div>
      </div>
    </section>
  );
}
