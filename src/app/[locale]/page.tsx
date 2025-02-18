import Hero from "@/src/components/components/Hero/Hero";
import { brush, childrenTeam, oldImage } from "@/public/image";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { useTranslations } from "next-intl";
import ComponentOne from "@/src/components/components/One/ComponentOne";
import ComponentTwo from "@/src/components/components/Two/ComponentTwo";
import ComponentThree from "@/src/components/components/Three/ComponentThree";
import AlbumSlider from "@/src/components/packages/AlbumSlider/AlbumSlider";
import ComponentFour from "@/src/components/components/Four/ComponentFour";
import ComponentFive from "@/src/components/components/Five/ComponentFive";
import { images } from "@/src/components/packages/AlbumSlider/images-data";
import ServicesList from "./services/Services/ServicesList";
import Projects from "./projects/menuComponents/Projects";
import ComponentSix from "@/src/components/components/Six/ComponentSix";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={brush} />
      <Projects mini={true} />
      <ServicesList />
      <Testimonials title1={t("testimonials.title1")} />
      <ComponentSix />
      <ComponentFive />
    </div>
  );
}
