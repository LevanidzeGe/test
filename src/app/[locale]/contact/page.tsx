import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { childrenTeam, chroisant2, heroReservation } from "@/public/image";
import PageHeadImage from "@/src/components/PageHeadImage/PageHeadImage";
import ReservationContactForm from "@/src/components/ReservationContactForm/ReservationContactForm";

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
      <ReservationContactForm
        name={t("forms.reservationForm.name")}
        email={t("forms.reservationForm.email")}
        phone={t("forms.reservationForm.phone")}
        people={t("forms.reservationForm.people")}
        text={t("forms.reservationForm.text")}
        button={t("forms.reservationForm.button")}
        thank={t("forms.reservationForm.thank")}
        wait={t("forms.reservationForm.wait")}
      />

      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
    </div>
  );
}
