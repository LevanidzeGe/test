import styles from "./ContactDetails.module.css";
import {
  address,
  address2,
  addressLink,
  email,
  phoneNumber,
} from "@/src/manager/info";
import emailIcon from "./icons/email.svg";
import phoneIcon from "./icons/phone-call.svg";
import addresslIcon from "./icons/address.svg";
import Link from "next/link";
import Image from "next/image";
import HeadLine from "../miniComponents/HeadLine";
import { getTranslations } from "next-intl/server";

export default async function ContactDetails() {
  const t = await getTranslations("homePage.contactDetails");
  return (
    <section className="section ">
      <div className="container">
        <HeadLine title={t("tag1")} />
        <div className={styles.wrapper}>
          {/* Email Box */}
          <Link href={`mailto: ${email}`} className="lift shadow1">
            <div>
              <h3 className="heading3 white">{t("title2")}</h3>
              <Image src={emailIcon} width={70} height={70} alt="Email Icon" />
            </div>

            <p className="heading4 gray0">{email}</p>
          </Link>

          {/* Location Box */}
          <Link href={addressLink} className="lift shadow1">
            <div>
              <h3 className="heading3 white">{t("title1")}</h3>
              <Image
                src={addresslIcon}
                width={70}
                height={70}
                alt="Location Icon"
              />
            </div>
            <p className="heading4 gray0">{address}</p>
            <p className="heading4 gray0">{address2}</p>
          </Link>

          {/* phone number box */}
          <Link href={`tel: ${phoneNumber}`} className="lift shadow1">
            <div>
              <h3 className="heading3 white">{t("title3")}</h3>
              <Image src={phoneIcon} width={70} height={70} alt="Mobile Icon" />
            </div>
            <p className="heading4 gray0">{phoneNumber}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
