import { getStates } from "../src";

describe("getStates", (): void => {
  test("is an function", (): void => {
    expect(typeof getStates).toEqual("function");
  });

  test("returns an array with 37 items", (): void => {
    expect(Array.isArray(getStates())).toEqual(true);
    expect(getStates().length).toEqual(37);
  });

  test("returns an array containing randomly selected Nigerian states", (): void => {
    expect(getStates().map((s) => s.name)).toEqual(
      expect.arrayContaining(["Lagos", "Benue", "Kebbi", "Yobe", "FCT-Abuja"])
    );
  });

  test("returns an array with every object having <IState> members", (): void => {
    getStates().forEach((s) => {
      expect(s).toStrictEqual(
        expect.objectContaining({
          name: expect.any(String),
          areas: expect.any(Array),
          geoPol: expect.any(String),
        })
      );
    });
  });
});
