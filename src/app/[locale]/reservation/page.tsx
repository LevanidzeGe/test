import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { chroisant2, heroReservation } from "@/public/image";
import PageHeadImage from "@/src/components/PageHeadImage/PageHeadImage";
import ReservationContactForm from "@/src/components/ReservationContactForm/ReservationContactForm";

export async function generateMetadata() {
  const t = await getTranslations("reservationPage.metadata");
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
      <PageHeadImage image={chroisant2} value="Our Story" />
      <ReservationContactForm />

      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
    </div>
  );
}
