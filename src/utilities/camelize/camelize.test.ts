import { camelize } from "./camelize";

describe("Camelize string", () => {
  const stringWithSpaces = "contensis delivery  api";
  const expectedResult = "contensisDeliveryApi";

  it("Should return the same string with no spaces & only the first letter of each word in Uppercase", () => {
    expect(camelize(stringWithSpaces)).toBe(expectedResult);
  });
});
