import React from "react";
import styles from "./ComponentFour.module.css";
import Image, { StaticImageData } from "next/image";

interface TextIntoPhotoProps {
  reverse?: boolean;
  icon: StaticImageData;
  image: StaticImageData;
}

export default function ComponentFour({
  reverse,
  icon,
  image,
}: TextIntoPhotoProps) {
  return (
    <section className="section section-medium">
      <div className="container">
        <div
          className={` ${styles.TextIntoPhotoWrapper} ${
            reverse ? styles.reverse : null
          }`}
        >
          <Image
            className={` fadeUp ${styles.image}`}
            src={image}
            width={1000}
            height={1000}
            alt=""
          ></Image>
          <div className={`${styles.slideSide} ${styles.textDivWrapper}`}>
            <div className={` ${styles.textDiv}`}>
              <Image src={icon} alt="chair" width={60} height={60}></Image>
              <h2 className="heading3 font1 ">The Secret of Oliv Oil</h2>
              <p className="twoLines"></p>
              <h5 className="paragraph gray7 textMedium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                quidem, modi sapiente sed perspiciatis fuga facilis laboriosam,
                necessitatibus accusamus temporibus id minima, doloremque
                tempora neque illo qui eveniet nobis optio?
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
