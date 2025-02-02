import { getTranslations } from "next-intl/server";
import Events from "./menuComponents/events";

export async function generateMetadata() {
  const t = await getTranslations("eventsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function MenuPage() {
  return (
    <div className="fadeOut">
      <Events />
    </div>
  );
}
