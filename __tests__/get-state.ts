import { getState } from "../src";
import { IArea } from "../src/utils";

const testState = "Lagos";

describe("getState", (): void => {
  test("is a function", (): void => {
    expect(typeof getState).toEqual("function");
  });

  test(`contains randomly selected areas in ${testState}`, (): void => {
    const testStateAreaNames = getState(testState)?.areas.map(
      (area: IArea) => area.name
    );
    expect(testStateAreaNames).toEqual(
      expect.arrayContaining(["Surulere", "Itire-Ikate"])
    );
  });

  test("returns an object of type <IState>", (): void => {
    expect(getState(testState)).toStrictEqual(
      expect.objectContaining({
        name: expect.any(String),
        areas: expect.any(Array),
        geoPol: expect.any(String),
      })
    );
  });
});
