import { companyDomain, companyName } from "@/Manager/info";
import ComponentFour from "@/src/components/ComponentFour/ComponentFour";
import ComponentTwo from "@/src/components/ComponentTwo/ComponentTwo";
import ComponentFive from "@/src/components/ComponentFive/ComponentFive";
import Hero from "@/src/components/Hero/Hero";
import { getTranslations } from "next-intl/server";
import {
  heroMain,
  croisant,
  pizza,
  pizza2,
  instagram1,
  instagram2,
  instagram3,
  instagram4,
  chefImage,
  womanChef,
} from "@/public/image";
import ComponentSix from "@/src/components/ComponentSix/ComponentSix";
import ComponentOne from "@/src/components/ComponentOne/ComponentOne";
import ComponentThree from "@/src/components/ComponentThree/ComponentThree";
import Testimonials from "@/src/components/Testimonials/Testimonials";

export async function generateMetadata() {
  const t = await getTranslations("homePage.metadata");
  return {
    metadataBase: new URL(companyDomain),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: companyName,
      description: t("description"),
      url: companyDomain,
      images: [
        {
          // url: "@/public/images/opengraph-image.jpg", MUST
          width: 800,
          height: 600,
          alt: `${companyName} ${companyDomain}`,
        },
      ],
    },
  };
}

export default async function Home() {
  const t = await getTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={chefImage} />
      <ComponentTwo />
      <ComponentThree image={womanChef} />
      <ComponentFour icon={instagram1} image={instagram2} />
      <ComponentFour icon={instagram2} image={instagram1} reverse />
      <ComponentFive image={instagram3} />

      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title2")}
      />
      <ComponentSix />
    </div>
  );
}
