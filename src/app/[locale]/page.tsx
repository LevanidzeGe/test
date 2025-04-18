import Hero from "@/src/components/components/Hero/Hero";
import { oldImage } from "@/public/image";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import Story from "@/src/components/components/Story/Story";
import SquaresTextPhoto from "@/src/components/components/SquaresTextPhoto/SquaresTextPhoto";
import MeetTeacher from "@/src/components/components/MeetTeacher/MeetTeacher";
import Sale from "@/src/components/components/Sale/Sale";
import ContactDetails from "@/src/components/components/ContactDetails/ContactDetails";
import Collection from "@/src/app/[locale]/events/collection/Collection";
import { getTranslations } from "next-intl/server";
import Album from "@/src/components/packages/Album/Album";
import { GoogleMapsEmbed, YouTubeEmbed } from "@next/third-parties/google";
import Levanidze from "@/src/components/packages/Levanidze/Levanidze";

export default async function Home() {
  const t = await getTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <Levanidze />
      <Story image={oldImage} />
      <SquaresTextPhoto />
      <Collection mini={true} />
      <MeetTeacher />
      <Album />
      <Sale />
      <Testimonials title1={t("testimonials.title1")} />
      <ContactDetails />
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || ""}
        height={400}
        width="100%"
        mode="place"
        maptype="satellite"
        q="LevaniDze - Web Agency Geneva"
      />
    </div>
  );
}
