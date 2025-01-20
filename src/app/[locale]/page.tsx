import Hero from "@/src/components/Hero/Hero";
import { chefImage, khachapuri1, dishIcon, dumplings } from "@/public/image";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { useTranslations } from "next-intl";
import ComponentOne from "@/src/components/One/ComponentOne";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={chefImage} />
      <Testimonials
        title1={t("testimonials.title1")}
        title2={t("testimonials.title2")}
      />
      {/* <ComponentSix /> */}
    </div>
  );
}
