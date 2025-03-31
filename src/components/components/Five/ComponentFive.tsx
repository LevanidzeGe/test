import styles from "./ComponentFive.module.css";
import {
  address,
  address2,
  addressLink,
  email,
  phoneNumber,
} from "@/Manager/info";
import { useTranslations } from "next-intl";
import emailIcon from "./icons/email.svg";
import phoneIcon from "./icons/phone-call.svg";
import addresslIcon from "./icons/address.svg";
import Link from "next/link";
import Image from "next/image";

export default function ComponentFive() {
  const t = useTranslations("homePage.componentFive");
  return (
    <section className="section ">
      <div className="container">
        <div className="container">
          <div className={styles.FourBoxMainWrapper}>
            {/* Location Box */}
            <Link href={addressLink} className="shadow1 lift">
              <Image
                src={addresslIcon}
                width={70}
                height={70}
                alt="Location Icon"
              />
              <h3 className="heading4">{t("title1")}</h3>
              <p className="paragraph gray7">{address}</p>
              <p className="paragraph gray7">{address2}</p>
            </Link>

            {/* Email Box */}
            <Link href={`mailto: ${email}`} className="shadow1 lift">
              <Image src={emailIcon} width={70} height={70} alt="Email Icon" />
              <h3 className="heading4">{t("title2")}</h3>
              <p className="paragraph gray7">{email}</p>
            </Link>

            {/* phone number box */}
            <Link href={`tel: ${phoneNumber}`} className="shadow1 lift">
              <Image src={phoneIcon} width={70} height={70} alt="Mobile Icon" />
              <h3 className="heading4">{t("title3")}</h3>
              <p className="paragraph gray7">{phoneNumber}</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
