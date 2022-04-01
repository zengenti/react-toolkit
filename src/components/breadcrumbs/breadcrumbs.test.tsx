import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Breadcrumbs } from "./breadcrumbs";
import { nodesTrail } from "./breadcrumbs.mock";

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

  it("it should link to parent pages", () => {
    renderBreadcrumbs();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(breadcrumbAssumptions.length);
    links.map((link, index) => {
      expect(link).toHaveAccessibleName(breadcrumbAssumptions[index].title);
      expect(link).toHaveAttribute("href", breadcrumbAssumptions[index].href);
    });
  });
});

function renderBreadcrumbs() {
  render(
    <MemoryRouter>
      <Breadcrumbs nodes={nodesTrail} />
    </MemoryRouter>
  );
}
