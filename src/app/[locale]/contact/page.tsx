import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { childrenTeam } from "@/public/image";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";
import ContactForm from "@/src/components/packages/ContactForm/ContactForm";
import Accordion from "@/src/components/packages/FAQ/Accordion";

export async function generateMetadata() {
  const t = await getTranslations("contactPage.metadata");
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
      <PageHeadImage
        image={childrenTeam}
        // value={t("forms.headComponent.title")}
      />
      <ContactForm title1={t("contactPage.title1")} />
      <Accordion title1={t("FAQPage.faq")} />

      <Testimonials title1={t("homePage.testimonials.title1")} />
    </div>
  );
}
