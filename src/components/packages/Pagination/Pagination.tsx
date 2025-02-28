{
  /* usage <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />; */
}

import styles from "./Pagination.module.css";
import { HiOutlineArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            className={`${styles.pageButton} ${styles.navButton} ${
              currentPage === i ? styles.active : ""
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      } else if (i === 2 && currentPage > 3) {
        pages.push(
          <span key="dots1" className={styles.dots}>
            ...
          </span>
        );
      } else if (i === totalPages - 1 && currentPage < totalPages - 2) {
        pages.push(
          <span key="dots2" className={styles.dots}>
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.arrows}
      >
        <HiOutlineArrowSmLeft />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.arrows}
      >
        <HiArrowSmRight />
      </button>
    </div>
  );
}
