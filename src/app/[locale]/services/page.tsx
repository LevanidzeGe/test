import { getTranslations } from "next-intl/server";
import ServicesList from "./ServicesComponent/ServicesList";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";

export async function generateMetadata() {
  const t = await getTranslations("servicesPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function ServicesPage() {
  const t = await getTranslations("servicesPage");
  return (
    <div className="fadeOut">
      <Pageshead value1={t("pageHead.title1")} value2={t("pageHead.title2")} />

      <ServicesList
        title1={t("services.title1")}
        title2={t("services.title2")}
      />
    </div>
  );
}
