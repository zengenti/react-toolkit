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
  return (
    <li
      className={[
        "pagination-item",
        isActive ? "pagination-item--active" : "pagination-item--not-active",
        isHidden ? "pagination-item---hidden" : "",
      ].join(" ")}
    >
      <a
        uri="#"
        className={`pagination-item__link`}
        onClick={() => updatePageIndex(index)}
      >
        <span className="sr-only">
          Page {pageIndex} of {pageCount}
        </span>
        <span className="pagination-item__page-index">{pageIndex}</span>
      </a>
    </li>
  );
};
