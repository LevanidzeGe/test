import { useLocale } from "next-intl";
import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { navItems } from "@/Manager/navigation";
import { NavItemProps } from "@/Manager/navigation";
interface props {
  title: string;
}
export default function Navigation({ title }: props) {
  const locale = useLocale(); // Get the current locale
  const items: NavItemProps[] = navItems[locale]; // Get items for the current locale
  return (
    <div className={styles.eachWrapper}>
      <h2 className="heading4">{title}</h2>
      <ul className={styles.menuWrap}>
        {items.map((item: NavItemProps) => {
          const localizedUrl =
            item.url === "/" ? `/${locale}` : `/${locale}${item.url}`;
          return (
            <Link key={item.title} className="caption" href={localizedUrl}>
              {item.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
