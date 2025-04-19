import React from "react";
import styles from "./First.module.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";
import {
  address,
  email,
  phoneNumber,
  addressLink,
  phoneNumber2,
  address2,
} from "@/src/manager/info";
interface props {
  title: string;
}

export default function First({ title }: props) {
  return (
    <section>
      <h2 className="heading3">{title}</h2>
      <address className={styles.contactInfo}>
        <Link target="_blank" href={addressLink} className="paragraph ">
          {address}
        </Link>
        <Link target="_blank" href={addressLink} className="paragraph ">
          {address2}
        </Link>
        <Link href={`mailto:${email}`} className={`paragraph ${styles.email}`}>
          {email}
        </Link>
        <Link className="paragraph pargrapht-bold" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Link>
        <Link className="paragraph pargrapht-bold" href={`tel:${phoneNumber2}`}>
          {phoneNumber2}
        </Link>
      </address>
      <SocialMedia />
    </section>
  );
}
