import React from "react";
// import assetsJson from "@/Restaurant-01/json/assets.json";
import styles from "./ComponentFive.module.css";
import EachFourBox from "./EachFourBox";
import { address, email, phoneNumber } from "@/Manager/info";
import { heroMain } from "@/public/image";
import { StaticImageData } from "next/image";

export default function ComponentFive({ image }: { image: StaticImageData }) {
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.FourBoxMainWrapper}>
          <EachFourBox image={heroMain} alt="arrows" title={address} />
          <EachFourBox image={heroMain} alt="phone" title={phoneNumber} phone />
          <EachFourBox image={heroMain} alt="postbox" title={email} email />
          <EachFourBox image={heroMain} alt="chat" title="Get In Touch" link />
          {/* //must fix  */}
        </div>
      </div>
    </section>
  );
}
