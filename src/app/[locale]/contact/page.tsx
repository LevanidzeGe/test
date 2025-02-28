import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
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
export default async function ContactPage() {
  const t = await getTranslations("");
  return (
    <div className="fadeOut">
      <Pageshead
        value1={t("contactPage.pageHead.title1")}
        value2={t("contactPage.pageHead.title2")}
      />

      <ContactForm
        name={t("forms.contactForm.name")}
        email={t("forms.contactForm.email")}
        phone={t("forms.contactForm.phone")}
        people={t("forms.contactForm.people")}
        text={t("forms.contactForm.message")}
        button={t("forms.contactForm.button")}
        thank={t("forms.contactForm.thankYou")}
        title1={t("contactPage.contactForm.title1")}
        title2={t("contactPage.contactForm.title2")}
        title3={t("contactPage.contactForm.title3")}
      />
      <Accordion title={t("contactPage.faq")} />

      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
    </div>
  );
}
