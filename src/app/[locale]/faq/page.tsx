import { childrenTeam } from "@/public/image";
import Lessons from "@/src/components/components/Lessons/Lessons";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";
import Accordion from "@/src/components/packages/FAQ/Accordion";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("FAQPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function ProjectsPage() {
  const t = await getTranslations("FAQPage");
  return (
    <div className="fadeOut">
      <PageHeadImage image={childrenTeam} short />
      <Lessons />
      <Accordion title1={t("faq")} />
    </div>
  );
}
