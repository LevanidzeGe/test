"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/image";
import LanguageFlag from "./Navigations/LanguageSwitcher/LanguageFlag";
import { companyName } from "@/Manager/info";
import StandartNav from "./Navigations/StandartNav/StandartNav";
import BurgerNav from "./Navigations/BurgerNav/BurgerNav";
// import LanguageAlphabet from "./Navigations/LanguageSwitcher/LanguageAlphabet";
import { MdManageAccounts } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => setIsNavOpen((prev) => !prev);
  const navClose = () => setIsNavOpen(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className={styles.extraWrap}>
      <section className="section header">
        <div className="container">
          <div className={styles.navigationWrapper}>
            <Link href={`/`} onClick={navClose} className={styles.logoWrapper}>
              <Image
                className="logo"
                src={logo}
                height={200}
                width={200}
                alt={`${companyName} logo`}
              />
            </Link>
            <div className={styles.middleNav}>
              <StandartNav />
              <LanguageFlag />
            </div>

            {/* <LanguageAlphabet /> */}
            <Link
              className={styles.loginIcon}
              href="https://levanidze.vercel.app"
            >
              <MdManageAccounts />
            </Link>
            {/* buurger menu opener - closer */}
            <div
              className={styles.openCloseIconDiv}
              onClick={() => {
                setOpenDropdown(null);
                navToggler();
              }}
            >
              {isNavOpen ? (
                <IoClose className={styles.openCloseIcon} />
              ) : (
                <GiHamburgerMenu className={styles.openCloseIcon} />
              )}
            </div>
          </div>
        </div>
      </section>
      <BurgerNav
        navClose={navClose}
        navToggler={navToggler}
        isNavOpen={isNavOpen}
        setOpenDropdown={setOpenDropdown}
        openDropdown={openDropdown}
      />
    </header>
  );
}
