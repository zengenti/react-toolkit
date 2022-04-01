import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./breadcrumbs.css";

export type BreadcrumbsProps = {
  nodes: {
    displayName: string;
    path: string;
    id: string;
    isCurrent?: boolean;
  }[];
  /**
   Can be an SVG or simple bit of text, even an emoji
  */
  separator?: string | React.SVGProps<SVGSVGElement> | null;
};

/**
   This is still WIP, please don't actually use this yet
  */
export function Breadcrumbs({ nodes, separator = ">" }: BreadcrumbsProps) {
  if (!nodes || !nodes.length) return null;

  return (
    <div className="breadcrumbs">
      <ol className="breadcrumbs__list">
        {nodes.map((node, index) => {
          const currentNode = node.isCurrent ? "current" : "";
          if (!node.displayName) return null;
          return (
            <Fragment key={node.id}>
              {separator && index !== 0 && (
                <span
                  className="breadcrumbs__list-separator"
                  aria-hidden="true"
                >
                  {separator}
                </span>
              )}
              <li className={["breadcrumbs__list-item", currentNode].join(" ")}>
                <Link className="breadcrumbs__link" to={node.path}>
                  {node.displayName}
                </Link>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
}
