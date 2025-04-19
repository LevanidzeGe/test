"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/image";
import LanguageFlag from "./Navigations/LanguageSwitcher/LanguageFlag";
import StandartNav from "./Navigations/StandartNav/StandartNav";
import BurgerNav from "./Navigations/BurgerNav/BurgerNav";
import LanguageAlphabet from "./Navigations/LanguageSwitcher/LanguageAlphabet";
import { companyName } from "@/src/manager/info";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => setIsNavOpen((prev) => !prev);
  const navClose = () => setIsNavOpen(false);

  return (
    <header className={styles.headWrapper}>
      <section className="section header no-padding-x no-padding-y">
        <div className="container header">
          <div className={styles.wrapper}>
            <div className={styles.navigationWrapper}>
              <Link
                href={`/`}
                onClick={navClose}
                className={styles.logoWrapper}
              >
                <Image
                  className="logo"
                  src={logo}
                  height={200}
                  width={200}
                  alt={`${companyName} logo`}
                />
              </Link>
              <StandartNav noButton />
              <div className={styles.buttonLanguageWrap}>
                <LanguageFlag navClose={navClose} />
                {/* <LanguageAlphabet navClose={navClose} /> */}
                <StandartNav button />
                {/* navigation open / close */}
                <div
                  className={`${styles.burger} ${isNavOpen ? styles.open : ""}`}
                  onClick={navToggler}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <BurgerNav navClose={navClose} isNavOpen={isNavOpen} />
          </div>
        </div>
        <div
          className={` ${styles.navBackground} ${isNavOpen && styles.show} `}
        ></div>
      </section>
    </header>
  );
}
