import data from "./data/all.json";
import { IState } from "./utils";

/**
 * Returns an array of the name of every state in Nigeria
 * @returns {Array}   an array containing the name of every state in Nigeria
 */
const getStates = (): Array<string> => {
  return data.map((state: { name: string }) => state.name);
};

/**
 * Returns the name and areas data of a state
 * @param {string}  name - the name of the state
 * @returns {IState}   an object containing the name and areas data of a state
 */
const getState = (name: string): IState | undefined => {
  return data.find((state) => state.name.toLowerCase() === name.toLowerCase());
};

export { getStates, getState };
