import data from "./data/all.json";
import { IState } from "./utils";

/**
 * Returns an array of the contained data of every state in Nigeria
 * @returns {Array<IState>}   an array containing the data of all states within the dataset
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
 * Returns the contained data of a state in the dataset
 * @param {string}  name - the name of the state
 * @returns {IState}   an object containing the contained data of the state
 */
const getState = (name: string): IState | undefined => {
  return data.find((state) => state.name.toLowerCase() === name.toLowerCase());
};

export { getStates, getState };
