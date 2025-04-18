import styles from "./HeadLine.module.css";

export default function HeadLine({
  title,
  secondary,
}: {
  title: string;
  secondary?: boolean;
}) {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.greenLine2} ${
          !secondary ? "bg-primary5" : "bg-secondary5"
        }`}
      ></div>

      <h2 className={`heading2  ${!secondary ? "primary5" : "secondary7"}`}>
        {title}
      </h2>
      <div
        className={`${styles.greenLine} ${
          !secondary ? "bg-primary5" : "bg-secondary5"
        }`}
      ></div>
    </div>
  );
}
