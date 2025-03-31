import React from "react";
import styles from "./ContactInfo.module.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";
import {
  address,
  email,
  phoneNumber,
  addressLink,
  phoneNumber2,
  address2,
} from "@/Manager/info";
interface props {
  title: string;
}

export default function ContactInfo({ title }: props) {
  return (
    <div className={styles.eachWrapper}>
      <h2 className="heading4">{title}</h2>
      <address className={styles.contactInfo}>
        <Link target="_blank" href={addressLink} className="caption ">
          {address}
        </Link>
        <Link target="_blank" href={addressLink} className="caption ">
          {address2}
        </Link>
        <Link href={`mailto:${email}`} className={` caption  ${styles.email}`}>
          {email}
        </Link>
        <Link className="caption pargrapht-bold " href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Link>
        <Link className="caption pargrapht-bold" href={`tel:${phoneNumber2}`}>
          {phoneNumber2}
        </Link>
      </address>
      <SocialMedia />
    </div>
  );
}
