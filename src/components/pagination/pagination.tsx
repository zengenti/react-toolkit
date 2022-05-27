import React, { useEffect } from "react";

// Components
import { PaginationItem } from "./paginationItem";
import { Dots } from "./dots";

// Styling
import "./pagination.css";
// import { Size, useWindowSize } from "./useWindowSize";

export interface PaginationProps {
  className?: string;
  pageCount: number;
  pageIndex: number;
  totalCount: number;
  pageSize: number;
  updatePageIndex: (index: number) => void;
}

export const Pagination = ({
  className,
  pageIndex,
  pageCount,
  totalCount,
  pageSize,
  updatePageIndex,
}: PaginationProps) => {
  const Pages = [];

  // const { width }: Size = useWindowSize();

  if (pageCount >= 4) {
    for (let i = 0; i < Math.ceil(totalCount / pageSize); i++) {
      const isActive = i === pageIndex ? true : false;

      if (pageIndex < 2) {
        let isHidden = false;
        if (i >= 2 && i < pageCount - 1) isHidden = true;
        console.info({ i, pageIndex, pageCount });

        if (i === 2) Pages.push(<Dots />);
        Pages.push(
          <PaginationItem
            index={i}
            pageCount={pageCount}
            isActive={isActive}
            updatePageIndex={updatePageIndex}
            isHidden={isHidden}
            key={i}
          />
        );
      } else if (pageIndex < pageCount - 2) {
        let isHidden = false;
        if (i !== pageIndex && i !== 0 && i !== pageCount - 1) isHidden = true;

        if (i === 2 || i === pageIndex + 1) Pages.push(<Dots />);
        Pages.push(
          <PaginationItem
            index={i}
            pageCount={pageCount}
            isActive={isActive}
            updatePageIndex={updatePageIndex}
            isHidden={isHidden}
            key={i}
          />
        );
      } else {
        let isHidden = false;
        if (i !== pageIndex && i !== 0 && i < pageCount - 2) isHidden = true;

        if (i === 2) Pages.push(<Dots />);
        Pages.push(
          <PaginationItem
            index={i}
            pageCount={pageCount}
            isActive={isActive}
            updatePageIndex={updatePageIndex}
            isHidden={isHidden}
            key={i}
          />
        );
      }
    }
  }

  const hasNext = pageIndex + 1 < pageCount;
  const hasPrevious = pageIndex > 0;

  return (
    <div className={className} aira-label="Pagination">
      <ul className="pagination">
        {hasPrevious && (
          <li className="pagination__item--previous">
            <a
              uri=""
              onClick={() => updatePageIndex(pageIndex - 1)}
              className="pagination__item--link"
            >
              Previous page
            </a>
          </li>
        )}
        {Pages}
        {hasNext && (
          <li className="pagination__item--next">
            <a
              uri="#"
              onClick={() => updatePageIndex(pageIndex + 1)}
              className="pagination__item--link"
            >
              Next page
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
