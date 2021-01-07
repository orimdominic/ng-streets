import { IStreet } from "./IStreet";

export interface IArea{
  name: string
  type: string
  streets: Array<IStreet>
}
