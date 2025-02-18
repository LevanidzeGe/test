import React from "react";
import styles from "./ComponentSix.module.css";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";
import { team } from "@/public/image";

export default function ComponentSix() {
  const locale = useLocale();
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.container}>
          <h2 className="heading2 color4">Work with us</h2>
          <div className={styles.wrapper}>
            <div className={styles.textDiv}>
              <div className="sideLineWrap">
                <div className="sideLine"></div>
                <h3 className="heading4 ">Our Team</h3>
              </div>
              <h4 className="heading1 color4">
                We are always welcome to profesional stuff
              </h4>
              <p className="paragraph gray7">
                Vi tror på att bygga ett engagerat team där alla bidrar med sin
                passion och expertis. Hos oss får du möjlighet att utvecklas och
                arbeta i en inspirerande miljö. Är du motiverad och redo att
                göra skillnad? Då vill vi gärna höra från dig!
              </p>
              <Link
                className="button button-reverse"
                href={`${locale}/contact`}
              >
                Contact us
              </Link>
            </div>
            <div className={styles.imageDiv}>
              <Image src={team} width={800} height={800} alt="our team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
