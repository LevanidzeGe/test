import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";

export async function generateMetadata() {
  const t = await getTranslations("storyPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function StoryPage() {
  const t = await getTranslations("");
  return (
    <div className="fadeOut">
      <Testimonials title1={t("homePage.testimonials.title1")} />
    </div>
  );
}
