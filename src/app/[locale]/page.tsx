import { useTranslations } from "next-intl";
import Projects from "./projects/collection/Collection";
import Photography from "./photography/collection/Collection";
import Levanidze from "@/src/components/packages/Levanidze/Levanidze";
import Hero from "@/src/components/components/Hero/Hero";
import WhatIDo from "@/src/components/components/WhatIDo/WhatIDo";
import PriceCards from "@/src/components/components/PriceCards/PriceCards";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="fadeOut">
      <Hero />
      <PriceCards />
      <Projects
        readMore={t("projectsPage.projects.readMore")}
        seeAll={t("projectsPage.projects.seeAll")}
        mini
      />
      <Photography
        readMore={t("photographyPage.photography.readMore")}
        seeAll={t("photographyPage.photography.seeAll")}
        mini
      />
      <WhatIDo />
      <Levanidze />
    </div>
  );
}
