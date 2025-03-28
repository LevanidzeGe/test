import { getLocale } from "next-intl/server";
import styles from "./PriceCards.module.css";
import { plans } from "./priceData";
import Image from "next/image";
import bg from "./bg.svg";

import logoBlue from "./blue-logo.svg";
import logoYellow from "./yellow-logo.svg";
import logoRed from "./red-logo.svg";
import logo from "./logo.svg";
export default async function PricingCards() {
  const locale = await getLocale();

  return (
    <div className={styles.mainWrapper}>
      <Image
        className={styles.background}
        src={bg}
        height={500}
        width={1400}
        alt="levanidze.com vector background"
      />
      <section className="section">
        <div className="container">
          <div className={styles.container}>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`shadow5 lift ${styles.card} ${
                  plan.popular ? styles.popular : ""
                }`}
              >
                <Image
                  src={logo}
                  alt="svg levanidze"
                  width={100}
                  height={100}
                  className={styles.svgLogo}
                />{" "}
                <Image
                  src={
                    index === 0 ? logoBlue : index === 1 ? logoYellow : logoRed
                  }
                  alt="svg levanidze"
                  width={100}
                  height={100}
                  className={styles.svgLight}
                />
                <h3
                  className={`heading3 font2 ${styles.title} ${
                    index === 0
                      ? styles.blue
                      : index === 1
                      ? styles.yellow
                      : styles.red
                  }`}
                >
                  {plan.name[locale]}
                </h3>
                {plan.price ? (
                  <div>
                    <p className={`heading3 ${styles.price}`}>
                      {plan.price}
                      <span></span>
                    </p>
                    <p
                      className={`heading5 ${styles.price} ${
                        index === 0
                          ? styles.blue
                          : index === 1
                          ? styles.yellow
                          : styles.red
                      }`}
                    >
                      {plan.salePrice}
                    </p>
                  </div>
                ) : (
                  <p className={`heading3 ${styles.price}`}>Contact us</p>
                )}
                <p className={`gray3 ${styles.subtitle}`}>
                  {plan.subtitle[locale]}
                </p>
                <ul className={` ${styles.mainFeatures}`}>
                  {plan.main.map((feature, idx) => (
                    <li key={idx} className="grey3 caption ">
                      <span className={styles.icon}>{feature.icon}</span>
                      {feature.text[locale]}
                    </li>
                  ))}
                </ul>
                <div className={styles.dividerWrapper}>
                  <div className={styles.divider1}></div>
                  <div className={styles.divider2}></div>
                  <div className={styles.divider3}></div>
                  <div className={styles.divider4}></div>
                </div>
                <ul className={styles.features}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`caption font1 gray5`}>
                      <span className={styles.icon}>{feature.icon}</span>
                      {feature.text[locale]}
                    </li>
                  ))}
                </ul>
                <div className={`buttonCard ${styles.button}`}>
                  <span></span>
                  <p></p>
                  <button> Choose {plan.name[locale]}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
