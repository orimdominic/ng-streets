import { IArea } from "./IArea";

export interface IState {
  name: string;
  geoPol: string;
  areas: Array<IArea>;
}
