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
  const t = await getTranslations("");
  return (
    <div className="fadeOut">
      <Pageshead value1="Services" value2="everythhing that we do" />
      <ServicesList />
    </div>
  );
}
