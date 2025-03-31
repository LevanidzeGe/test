import { navItems, NavItemProps } from "@/Manager/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import styles from "./DropDownNav.module.css"; // Assuming you have a Footer module CSS

export default function DropDownNav() {
  const locale = useLocale();
  const items: NavItemProps[] = navItems[locale] || [];

  // Filter items that have a dropdown
  const serviceItems = items.filter((item) => item.dropdown);

  return (
    <div className={styles.eachWrapper}>
      {serviceItems.map((item) => {
        return (
          <div key={item.url} className={styles.footerSection}>
            <h2 className="heading4">{item.title}</h2>
            <ul className={styles.menuWrap}>
              {item.dropdown?.map((subItem) => (
                <li key={subItem.url}>
                  <Link
                    className="caption"
                    href={`/${locale}${item.url}${subItem.url}`}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
