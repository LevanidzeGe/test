import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const t = await getTranslations("errorPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function NotFound() {
  const t = useTranslations("notFoundPage");
  return (
    <section className={`section section-dark `}>
      <div className="container">
        <div
          style={{
            textAlign: "center",
            margin: "0 auto",
            padding: "50px 20px",
            maxWidth: "600px",
          }}
        >
          <h1 className="heading3">{t("title")}</h1>
          <p className="paragraph">{t("description")}</p>
          <Link href="/" className={`button `}>
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
