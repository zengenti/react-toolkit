import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Breadcrumbs, BreadcrumbsProps } from "./breadcrumbs";
import { nodesTrail } from "./breadcrumbs.mock";

const defaultProps: BreadcrumbsProps = {
  nodes: nodesTrail,
};

describe("Parent links", () => {
  const breadcrumbAssumptions = [
    { title: "Home", href: "/" },
    { title: "News", href: "/news/" },
    { title: "Podcasts", href: "/news/podcasts/" },
    {
      title: "Why the world needs more women leaders in science and business",
      href: "/news/podcasts/women-leaders/",
    },
  ];

  it("should link to parent pages", () => {
    renderBreadcrumbs();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(breadcrumbAssumptions.length + 1);
    links.map((link, index) => {
      expect(link).toHaveAccessibleName(breadcrumbAssumptions[index].title);
      expect(link).toHaveAttribute("href", breadcrumbAssumptions[index].href);
    });
  });
});

function renderBreadcrumbs(props: BreadcrumbsProps = defaultProps) {
  render(
    <MemoryRouter>
      <Breadcrumbs {...props} />
    </MemoryRouter>
  );
}
