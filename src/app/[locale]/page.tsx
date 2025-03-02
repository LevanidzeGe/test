import Hero from "@/src/components/components/Hero/Hero";
import { brush } from "@/public/image";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { useTranslations } from "next-intl";
import ComponentOne from "@/src/components/components/One/ComponentOne";
import ComponentFive from "@/src/components/components/Five/ComponentFive";
import ServicesList from "./services/ServicesComponent/ServicesList";
import Projects from "./projects/projectsComponent/Projects";
import ComponentSix from "@/src/components/components/Six/ComponentSix";
import Levanidze from "@/src/components/packages/Levanidze.com/Levanidze";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={brush} />
      <Levanidze />
      <Projects
        mini={true}
        title1={t("homePage.projects.title1")}
        title2={t("homePage.projects.title2")}
        readMore={t("projectsPage.projects.readMore")}
        seeAll={t("projectsPage.projects.seeAll")}
      />
      <ServicesList
        title1={t("homePage.services.title1")}
        title2={t("homePage.services.title2")}
      />
      <Testimonials title1={t("homePage.testimonials.title1")} />
      <ComponentSix />
      <ComponentFive />
    </div>
  );
}
