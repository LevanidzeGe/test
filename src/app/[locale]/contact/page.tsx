import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { childrenTeam } from "@/public/image";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";
import ContactForm from "@/src/components/packages/ContactForm/ContactForm";
import Accordion from "@/src/components/packages/Accordion/Accordion";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";

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
      <Pageshead value1="Contact us" value2="everythhing that we do" />

      <ContactForm
        head={t("forms.contactForm.head1")}
        name={t("forms.contactForm.name")}
        email={t("forms.contactForm.email")}
        phone={t("forms.contactForm.phone")}
        people={t("forms.contactForm.people")}
        text={t("forms.contactForm.message")}
        button={t("forms.contactForm.button")}
        thank={t("forms.contactForm.thank")}
        wait={t("forms.contactForm.wait")}
      />
      <Accordion title={t("contactPage.faq")} />

      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
    </div>
  );
}
