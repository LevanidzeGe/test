import Hero from "@/src/components/Hero/Hero";
import { oldImage } from "@/public/image";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { useTranslations } from "next-intl";
import ComponentOne from "@/src/components/One/ComponentOne";
import ComponentTwo from "@/src/components/Two/ComponentTwo";
import ComponentThree from "@/src/components/Three/ComponentThree";
import AlbumSlider from "@/src/components/AlbumSlider/AlbumSlider";
import ComponentFour from "@/src/components/Four/ComponentFour";
import ComponentFive from "@/src/components/Five/ComponentFive";
import Events from "./events/menuComponents/events";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={oldImage} />
      <Events mini={true} />
      <ComponentTwo />
      <ComponentThree />
      <AlbumSlider />
      <ComponentFour />
      <Testimonials title1={t("testimonials.title1")} />
      <ComponentFive />
    </div>
  );
}
