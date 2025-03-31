import Image from "next/image";
import styles from "./Pageshead.module.css";
import { pageHead } from "@/public/image";

export default function Pageshead({
  value1,
  value2,
}: {
  value1: string;
  value2: string;
}) {
  return (
    <div className={styles.wrapper}>
      <section className="section no-padding-y ">
        <div className="container">
          <div className={styles.text}>
            <h1 className="heading1 color4 ">{value1}</h1>
            <h2 className=" paragraph ">{value2}</h2>
          </div>
        </div>
      </section>
      <Image
        className={styles.image}
        src={pageHead}
        width={1000}
        height={300}
        alt="vector"
      />
    </div>
  );
}
