import { companyDomain } from "@/Manager/info";
import { logo2 } from "@/public/image";
import Image from "next/image";
import Link from "next/link";
import styles from "./LogoFooter.module.css";

export default function LogoFooter() {
  return (
    <div
      // className={styles.eachWrapper}
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "3%",
        paddingBottom: "40px",
      }}
    >
      <Link href="/">
        <Image
          style={{
            width: "280px",
            height: "auto",
            objectFit: "contain",
          }}
          src={logo2}
          alt={`${companyDomain} logo`}
          width={150}
          height={150}
        />
      </Link>
    </div>
  );
}
