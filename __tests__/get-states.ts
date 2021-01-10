import { getStates } from "../src";

describe("getStates", (): void => {
  test("is an function", (): void => {
    expect(typeof getStates).toEqual("function");
  });

  test("returns an array of 37 items", (): void => {
    expect(Array.isArray(getStates())).toEqual(true);
    expect(getStates().length).toEqual(37);
  });

  test("contains randomly selected Nigerian states", (): void => {
    expect(getStates().map((s) => s.name)).toEqual(
      expect.arrayContaining(["Lagos", "Benue", "Kebbi", "Yobe", "FCT-Abuja"])
    );
  });
});
