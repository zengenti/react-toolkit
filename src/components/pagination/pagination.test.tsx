import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Pagination, PaginationProps } from "./pagination";

const defaultProps: PaginationProps = {
  pageCount: 10,
  pageIndex: 0,
  pageSize: 20,
  totalCount: 200,
  updatePageIndex: () => {},
};

describe("Pagination", () => {
  it("should render", () => {
    // Render the pager with default values.
    renderPagination();

    // Ensure the pager is rendered.
    const pagination = screen.getByLabelText("Pagination");
    expect(pagination).toBeDefined();
  });

  it("should fire updatePageIndex on click", () => {
    // Setup mock functions.
    const updatePageIndex = jest.fn();
    window.scroll = jest.fn();

    // Render the pager with default values and mock function.
    renderPagination({ updatePageIndex });

    // Click the second page link.
    const page = screen.getByText("2");
    fireEvent.click(page);

    // Ensure the updatePageIndex function was called.
    expect(updatePageIndex).toHaveBeenCalledTimes(1);

    // Click the next page link.
    const nextPage = screen.getByRole("link", { name: "Next page" });
    expect(nextPage).toBeDefined();
    fireEvent.click(nextPage);

    // Ensure the updatePageIndex function was called again.
    expect(updatePageIndex).toHaveBeenCalledTimes(2);
  });

  it("should move aria-current to the current page", () => {
    // Setup some state for the render.
    let pageIndex = 2;
    const updatePageIndex = (index: number) => {
      pageIndex = index;
    };

    // Render the pager.
    renderPagination({ pageIndex, updatePageIndex });

    // Check the current page is the correct one.
    const currentPage = screen.getByRole("link", { current: "page" });
    expect(currentPage).toHaveTextContent("Page 3 of 10");

    // Click the next page link.
    const nextPage = screen.getByRole("link", { name: "Next page" });
    expect(nextPage).toBeDefined();
    fireEvent.click(nextPage);

    // Re-render the pager.
    cleanup();
    renderPagination({ pageIndex, updatePageIndex });

    // Check the current page is the correct one.
    const newCurrentPage = screen.getByRole("link", { current: "page" });
    expect(newCurrentPage).toHaveTextContent("Page 4 of 10");
  });

  it("should hide buttons when there is only one page", () => {
    renderPagination({ pageIndex: 1 });
    // Check the previous page link is hidden.
    let previousPage = screen.queryByRole("link", { name: "Previous page" });
    expect(previousPage).toBeTruthy();

    // Check the next page link is hidden.
    let nextPage = screen.queryByRole("link", { name: "Next page" });
    expect(nextPage).toBeTruthy();

    cleanup();
    renderPagination({ pageCount: 1 });

    // Check the previous page link is hidden.
    previousPage = screen.queryByRole("link", { name: "Previous page" });
    expect(previousPage).toBeFalsy();

    // Check the next page link is hidden.
    nextPage = screen.queryByRole("link", { name: "Next page" });
    expect(nextPage).toBeFalsy();
  });

  it("should hide next button when end is reached", () => {
    renderPagination({ pageIndex: 9, pageCount: 10 });

    // Check the next page link is hidden.
    const nextPage = screen.queryByRole("link", { name: "Next page" });
    expect(nextPage).toBeFalsy();
  });

  it("should hide prev button when on first index", () => {
    renderPagination();

    // Check the previousPage page link is hidden.
    const previousPage = screen.queryByRole("link", { name: "Previous page" });
    expect(previousPage).toBeFalsy();
  });

  it("should hide buttons when passed relevant props", () => {
    renderPagination({ pageIndex: 1, hideNext: true, hidePrevious: true });

    // Check the previous page link is hidden.
    const previousPage = screen.queryByRole("link", { name: "Previous page" });
    expect(previousPage).toBeFalsy();

    // Check the next page link is hidden.
    const nextPage = screen.queryByRole("link", { name: "Next page" });
    expect(nextPage).toBeFalsy();
  });

  it("should render custom nav buttons", () => {
    renderPagination({
      pageIndex: 1,
      NextPageComponent: <span>☺</span>,
      PreviousPageComponent: <span>☹</span>,
    });

    // Check the previous page link is hidden.
    const previousPage = screen.queryByRole("link", { name: "Previous page" });
    expect(previousPage).toHaveTextContent("☹");

    // Check the next page link is hidden.
    const nextPage = screen.queryByRole("link", { name: "Next page" });
    expect(nextPage).toHaveTextContent("☺");
  });
});

function renderPagination(props: Partial<PaginationProps> = defaultProps) {
  const paginationProps = { ...defaultProps, ...props };
  render(<Pagination {...paginationProps} />);
}
