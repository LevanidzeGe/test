import Image from "next/image";
import styles from "./ComponentFour.module.css";
import { giSale1, giSale2, giSvg } from "@/public/image";

export default function ComponentFour() {
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.mainWraper}>
          <div>
            <div className={`blueBg ${styles.iconTextDiv}`}>
              <Image src={giSvg} width={50} height={70} alt="" />
              <h2 className="heading3 color6">Geo Judo</h2>
            </div>
            <h3 className="color3 heading3">შეიძნეთ უნიფორმა Geo Judo -სგან</h3>
          </div>
          <div className={styles.items}>
            <div className={styles.eachItemWrap}>
              <div className={styles.imageWrapper}>
                <Image width={400} height={800} src={giSale1} alt=""></Image>
              </div>
              <h4 className="heading4 color4">ძიუდოს ფორმა შავი</h4>
              <div className={styles.priceWrap}>
                <span>150</span>
                <p>Chf</p>
              </div>
            </div>
            <div className={styles.eachItemWrap}>
              <div className={styles.imageWrapper}>
                <Image width={400} height={800} src={giSale2} alt=""></Image>
              </div>
              <h4 className="heading4 color4">ძიუდოს ფორმა თეთრი</h4>
              <div className={styles.priceWrap}>
                <span>150</span>
                <p>Chf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
