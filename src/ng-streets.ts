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

// /**
//  * Returns the data (name, streets) of every area in a state
//  * @param {string}  stateName - the name of the state
//  * @returns {Array<IArea>} an array containing the name of each area in `stateName`
//  */
// const getAreas = (stateName: string): Array<IArea> | undefined => {
//   const state = data.find(
//     (state) => state.name.toLowerCase() === stateName.toLowerCase()
//   );
//   if (state === undefined) return undefined;
//   return state.areas.map((area) => area);
// };

// /**
//  * Returns data of an area in a state
//  * @param {string}  stateName - the name of the state
//  * @returns {Array<IArea>} an array containing the name of each area in `stateName`
//  */
// const getArea = (areaName: string): IArea | undefined => {
//   return undefined
// };

// /**
//  * Returns the name of every street in an area
//  * @param {string}  area - the name of the state
//  * @returns {Array<string>} an array containing the name of each street in `area`
//  */
// const getStreets = (area: string): Array<string> | undefined => {
//   const state = data.find((state) => state.name === stateName);
//   if (state === undefined) return undefined;
//   return state.areas.map((area) => area["name"]);
// };

export { getStates, getState };
