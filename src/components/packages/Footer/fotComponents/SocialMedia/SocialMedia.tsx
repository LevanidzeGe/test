// SocialMedia.tsx
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./SocialMedia.module.css";
import {
  facebookUrl,
  foodUrl,
  instagramUrl,
  linkedinUrl,
} from "@/Manager/info";
import { IoFastFood } from "react-icons/io5";

export default function SocialMedia() {
  const socialLinks = [
    { url: instagramUrl, icon: <FaInstagram /> },
    { url: facebookUrl, icon: <FaFacebook /> },
    { url: linkedinUrl, icon: <FaLinkedin /> },
    { url: foodUrl, icon: <IoFastFood /> },
  ];

  return (
    <div className={styles.mediaWrapper}>
      {socialLinks
        .filter(({ url }) => Boolean(url)) // only keep links with valid URLs
        .map(({ url, icon }, index) => (
          <Link href={url} key={index}>
            {icon}
          </Link>
        ))}
    </div>
  );
}
