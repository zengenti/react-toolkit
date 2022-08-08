import { cannonicalUrl } from "./cannonicalUrl";

describe("Get cannonical url", () => {
  const exampleUrl = "http://zengenti.com/";
  const expectedUrl = "https://www.zengenti.com";

  it("Should return the example url with: https enforced, www. added, & trailing / removed", () => {
    expect(cannonicalUrl(exampleUrl)).toBe(expectedUrl);
  });
});
