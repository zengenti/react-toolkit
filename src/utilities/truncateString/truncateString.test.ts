import truncateString from "./truncateString";

describe("Truncate strings", () => {
  const shortString = "Hello";
  const longString =
    "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  const customEndsWith = "...";

  it("should return the same string if it is shorter than the length", () => {
    expect(truncateString(shortString, 8)).toBe(shortString);
  });

  it("should return the same string if it is equal to the length", () => {
    expect(truncateString(shortString, shortString.length)).toBe(shortString);
  });

  it("should return the truncated string if it is longer than the length", () => {
    expect(truncateString(longString, 5)).toBe(longString.slice(0, 5));
  });

  it("should return the elipsis if it is longer than the length", () => {
    expect(truncateString(longString, 5, customEndsWith)).toBe(
      longString.slice(0, 5) + "..."
    );
  });
});
