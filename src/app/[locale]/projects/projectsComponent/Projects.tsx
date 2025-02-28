"use client";

import styles from "./Projects.module.css";
import ServerCard from "./card/ServerCard";
import { projects, ProjectProps } from "../projectsData";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import TopBorder from "@/src/components/components/borderShapes/TopBorder";
import BottomBorder from "@/src/components/components/borderShapes/BottomBorder";
import Pagination from "@/src/components/packages/Pagination/Pagination";

export const revalidate = 86400; // Revalidate once a day
const ITEMS_PER_PAGE = 9; // Number of projects per page

export default function Projects({ mini }: { mini?: boolean }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get the current page from URL or default to 1
  const currentPage = Number(searchParams.get("page")) || 1;

  // Sort and slice projects for pagination
  const sortedProjects = projects.sort(
    (a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0)
  );

  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = sortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <TopBorder />
      <section className="section section-medium no-padding-y">
        <div className={`container ${!mini && styles.container}`}>
          <div className={`${!mini && styles.paddingBottom}`}>
            <div className="sideLineWrap">
              <div className="sideLine"></div>
              <h2 className="heading4">Our work</h2>
            </div>
            <h3 className={`heading2 color4 ${styles.title}`}>
              Completed Projects
            </h3>
            <div className={styles.eventsWrapper}>
              {(mini ? paginatedProjects.slice(0, 3) : paginatedProjects).map(
                (event: ProjectProps) => (
                  <ServerCard key={event.id} {...event} />
                )
              )}
            </div>
            {/* Pagination Controls */}
            {!mini && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </section>
      {mini && <BottomBorder />}
    </>
  );
}
