import { getTranslations } from "next-intl/server";
import Collections from "./collection/Collection";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";
import { childrenTeam } from "@/public/image";

export async function generateMetadata() {
  const t = await getTranslations("eventsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ProjectsPage() {
  return (
    <div className="fadeOut">
      <PageHeadImage image={childrenTeam} short />

      <Collections />
    </div>
  );
}
