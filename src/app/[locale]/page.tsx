import Hero from "@/src/components/components/Hero/Hero";
import { brush } from "@/public/image";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { useTranslations } from "next-intl";
import ComponentOne from "@/src/components/components/One/ComponentOne";
import ComponentFive from "@/src/components/components/Five/ComponentFive";
import ServicesList from "./services/ServicesComponent/ServicesList";
import Projects from "./projects/projectsComponent/Projects";
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
