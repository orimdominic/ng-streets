import data from "./data/all.json";
import { IState } from "./utils";

/**
 * Returns an array of the contained of every state in Nigeria
 * @returns {Array<IState>}   an array containing the `name`, `areas` and `geoPol` of every state
 */
const getStates = (): Array<IState> => {name
  return [
    ...data.sort((s1, s2) => {
      if (s1.name.toLowerCase() < s2.name.toLowerCase()) {
        return -1;
      }
      if (s1.name.toLowerCase() > s2.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }),
  ];
};

/**
 * Returns the name, geoPol and areas data of a state
 * @param {string}  name - the name of the state
 * @returns {IState}   an object containing the name and areas data of a state
 */
const getState = (name: string): IState | undefined => {
  return data.find((state) => state.name.toLowerCase() === name.toLowerCase());
};

export { getStates, getState };
