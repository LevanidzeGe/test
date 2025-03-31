import Hero from "@/src/components/components/Hero/Hero";
import { oldImage } from "@/public/image";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import ComponentOne from "@/src/components/components/One/ComponentOne";
import ComponentTwo from "@/src/components/components/Two/ComponentTwo";
import ComponentThree from "@/src/components/components/Three/ComponentThree";
import ComponentFour from "@/src/components/components/Four/ComponentFour";
import ComponentFive from "@/src/components/components/Five/ComponentFive";
import Collection from "@/src/app/[locale]/events/collection/Collection";
import Levanidze from "@/src/components/packages/Levanidze/Levanidze";
import { getTranslations } from "next-intl/server";
import Album from "@/src/components/packages/Album/Album";

export default async function Home() {
  const t = await getTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={oldImage} />
      <Levanidze />
      <ComponentTwo />
      <Collection mini={true} />
      <ComponentThree />
      <Album />
      <ComponentFour />
      <Testimonials title1={t("testimonials.title1")} />
      <ComponentFive />
    </div>
  );
}
