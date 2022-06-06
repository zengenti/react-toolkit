import React, { useEffect } from "react";

// Components
import { PaginationItem } from "./paginationItem";
import { Dots } from "./dots";

// Styling
import "./pagination.css";
import { Size, useWindowSize } from "./useWindowSize";

export interface PaginationProps {
  className?: string;
  pageCount: number;
  pageIndex: number;
  totalCount: number;
  pageSize: number;
  updatePageIndex: (index: number) => void;
  hideNext?: boolean;
  hidePrevious?: boolean;
  NextPageComponent?: React.ReactNode;
  PreviousPageComponent?: React.ReactNode;
}

export const Pagination = ({
  className,
  pageIndex,
  pageCount,
  totalCount,
  pageSize,
  updatePageIndex,
  hideNext = false,
  hidePrevious = false,
  NextPageComponent,
  PreviousPageComponent,
}: PaginationProps) => {
  const { width }: Size = useWindowSize();

  const getPaging = (width: number) => {
    const minPages = width > 768 && pageCount >= 5 ? 5 : 2;

    let Pages: any = [];

    for (let i = 0; i < Math.ceil(totalCount / pageSize); i++) {
      const isActive = i === pageIndex ? true : false;
      const PaginationItemProps = {
        index: i,
        pageCount,
        isActive,
        updatePageIndex,
        key: i,
      };

      if (minPages + 2 > pageCount) {
        Pages.push(<PaginationItem {...PaginationItemProps} />);
      } else if (pageIndex < minPages - 1) {
        /* Start */
        let isHidden = false;
        if (i >= minPages && i < pageCount - 1) isHidden = true;

        if (i === minPages) Pages.push(<Dots key={`${i}-dots`} />);
        Pages.push(
          <PaginationItem {...PaginationItemProps} isHidden={isHidden} />
        );
      } else if (pageIndex < pageCount - 2 && pageIndex >= minPages - 1) {
        /* Mid */
        let isHidden = false;
        if (minPages === 5) {
          if (
            i !== pageIndex &&
            i !== pageIndex + 1 &&
            i !== pageIndex + 2 &&
            i !== pageIndex - 1 &&
            i !== pageIndex - 2 &&
            i !== pageCount - 1 &&
            i !== 0
          )
            isHidden = true;
          if (i === pageIndex - 3 || i === pageIndex + 3)
            Pages.push(<Dots key={`${i}-dots`} />);
        } else {
          if (i !== pageIndex && i !== 0 && i !== pageCount - 1)
            isHidden = true;
          if (i === minPages || i === pageIndex + 1)
            Pages.push(<Dots key={`${i}-dots`} />);
        }

        Pages.push(
          <PaginationItem {...PaginationItemProps} isHidden={isHidden} />
        );
      } else {
        /* End */
        let isHidden = false;
        if (i < pageCount - minPages && i !== 0) isHidden = true;
        if (i === minPages) Pages.push(<Dots key={`${i}-dots`} />);
        Pages.push(
          <PaginationItem {...PaginationItemProps} isHidden={isHidden} />
        );
      }
    }
    return Pages;
  };

  const hasNext = pageIndex + 1 < pageCount && !hideNext;
  const hasPrevious = pageIndex > 0 && !hidePrevious;

  const Pages = getPaging(width);
  return (
    <div className={className} aria-label="Pagination">
      <ul className="pagination">
        {hasPrevious && (
          <li className="pagination__item--previous">
            <a
              href="#"
              aria-label="Previous page"
              onClick={() => updatePageIndex(pageIndex - 1)}
              className="pagination__item--prev"
            >
              {PreviousPageComponent && PreviousPageComponent}
              {!PreviousPageComponent && <span>Previous page</span>}
            </a>
          </li>
        )}
        {Pages}
        {hasNext && (
          <li className="pagination__item--next">
            <a
              href="#"
              aria-label="Next page"
              onClick={() => updatePageIndex(pageIndex + 1)}
              className="pagination__item--next"
            >
              {NextPageComponent && NextPageComponent}
              {!NextPageComponent && <span>Next page</span>}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
