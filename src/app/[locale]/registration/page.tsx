import { getTranslations } from "next-intl/server";
import RegistrationForm from "@/src/components/packages/RegistrationForm/RegistrationForm";
import { childrenTeam, giorgiSofia } from "@/public/image";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";

export async function generateMetadata() {
  const t = await getTranslations("registrationPage.metadata");
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
        image={giorgiSofia}
        // value={t("forms.headComponent.title")}
      />
      <RegistrationForm
        head={t("forms.contactForm.head2")}
        name={t("forms.contactForm.name")}
        email={t("forms.contactForm.email")}
        phone={t("forms.contactForm.phone")}
        people={t("forms.contactForm.people")}
        text={t("forms.contactForm.message")}
        button={t("forms.contactForm.button")}
        thank={t("forms.contactForm.thank")}
      />
    </div>
  );
}
