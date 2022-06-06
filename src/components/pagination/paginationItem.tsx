import React from "react";

// Components

export interface PaginationItemProps {
  className?: string;
  isActive?: boolean;
  isHidden?: boolean;
  updatePageIndex: (index: number) => void;
  pageCount: number;
  index: number;
}

export const PaginationItem = ({
  className,
  isActive = false,
  updatePageIndex,
  pageCount,
  index,
  isHidden,
}: PaginationItemProps) => {
  const pageIndex = index + 1;

  const scrollTop = () => {
    if (typeof window != "undefined") {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <li
      className={[
        "pagination-item",
        isActive ? "pagination-item--active" : "pagination-item--not-active",
        isHidden ? "pagination-item---hidden" : "",
      ].join(" ")}
    >
      <span className="pagination-item__text">
        Page {pageIndex} of {pageCount}
      </span>
      <a
        href="#"
        aria-current={isActive ? "page" : "step"}
        aria-label={`Page ${pageIndex} of ${pageCount}`}
        className={`pagination-item__link`}
        onClick={() => {
          updatePageIndex(index);
          scrollTop();
        }}
      >
        <span className="sr-only">
          Page {pageIndex} of {pageCount}
        </span>
        <span className="pagination-item__page-index">{pageIndex}</span>
      </a>
    </li>
  );
};
