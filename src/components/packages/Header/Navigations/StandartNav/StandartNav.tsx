import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./StandartNav.module.css";
import { navItems, NavItemProps } from "@/src/PPPmanager/navigation";
import { useLocale } from "next-intl";

export default function StandartNav({
  noButton,
  button,
}: {
  noButton?: boolean;
  button?: boolean;
}) {
  const pathname = usePathname();
  const locale = useLocale();
  const items: NavItemProps[] = navItems[locale];

  return (
    <nav className={`${styles.mainNavWrap} ${noButton && styles.middleNav}`}>
      <ul className={styles.listWrap}>
        {items.map((item: NavItemProps) => {
          const localizedUrl =
            item.url === "/" ? `/${locale}` : `/${locale}${item.url}`;
          const isActive =
            item.url === "/"
              ? pathname === `/${locale}`
              : pathname.startsWith(localizedUrl);

          // Render only links if `noButton` is true
          if (noButton && !item.button) {
            return (
              <li key={item.url} className={styles.navItem}>
                <Link
                  href={localizedUrl}
                  className={`link ${isActive ? "active-link" : ""}`}
                >
                  {item.title}
                </Link>
              </li>
            );
          }

          // Render only buttons if `button` is true
          if (button && item.button) {
            return (
              <li key={item.url} className={styles.navItem}>
                <Link href={localizedUrl} className="link">
                  {item.title}
                </Link>
              </li>
            );
          }

          return null; // Avoid rendering anything if conditions are not met
        })}
      </ul>
    </nav>
  );
}
