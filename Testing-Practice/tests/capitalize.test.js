import { capitalize } from "../src/capitalize";

test("capitalizes the first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("")).toBe("");
  expect(capitalize("a")).toBe("A");
  expect(capitalize("A")).toBe("A");
});
