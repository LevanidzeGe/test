import { Metadata } from "next";
import { projects } from "../projectsData";
import { companyDomain } from "@/Manager/info";
import AlbumSlider from "@/src/components/packages/AlbumSlider/AlbumSlider";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";
import styles from "./page.module.css";
import { defaultLocale } from "@/Manager/navigation";

interface Props {
  params: {
    itemId: string;
    locale: string;
  };
}

// Generate metadata for SEO
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const project = projects.find((e) => e.id === params.itemId);
  const locale = params.locale;

  if (!project) {
    return {
      title: "Not Found",
      description: "The project you are looking for does not exist",
    };
  }

  // Ensure translations exist and provide a fallback
  // const title = project.title[locale] ?? project.title[defaultLocale];

  return {
    title: project.title[locale] || defaultLocale,
    description: project.description[locale] || defaultLocale,
    alternates: {
      canonical: `/${locale}/projects/${params.itemId}`,
    },
    openGraph: {
      title: project.title[locale] || defaultLocale,
      description: project.description[locale] || defaultLocale,
      url: `${companyDomain}/${locale}/projects/${params.itemId}`,
      images: [
        {
          url:
            project.images[0] ||
            `${companyDomain}/images/openGraph/mainOpenGraph.jpg`,
          width: 500,
          height: 300,
          alt: project.title[locale] || defaultLocale,
        },
      ],
    },
  };
};

export default async function EventDetailsPage({ params }: Props) {
  const project = projects.find((e) => e.id === params.itemId);
  const locale = params.locale;

  if (!project) {
    return {
      title: "Not Found",
      description: "The project you are looking for does not exist",
    };
  }

  return (
    <>
      <Pageshead value1="Project" value2={project.title[locale]} />
      <section className={`section ${styles.eventDetailsWrapper}`}>
        <div className="">
          <div className={styles.container}>
            <div className="sideLineWrap">
              <div className="sideLine"></div>
              <p className="heading4">{project.category[locale]}</p>
            </div>
            <h2 className={`heading3 font1 color3 ${styles.title}`}>
              {project.title[locale]}
            </h2>
            <div className={styles.infoWrapper}>
              <p className={`paragraph gray7 ${styles.description}`}>
                {project.description[locale]}
              </p>
            </div>
          </div>
          {project.timestamp && (
            <p className={`gray5 paragraph ${styles.date}`}>
              {new Date(project.timestamp).toLocaleDateString(locale)}
            </p>
          )}
          <div className={styles.imgWrapper}>
            <AlbumSlider images={project.images} />
          </div>
        </div>
      </section>
    </>
  );
}
