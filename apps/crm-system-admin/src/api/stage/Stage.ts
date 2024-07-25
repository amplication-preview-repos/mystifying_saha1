import { DynamicField } from "../dynamicField/DynamicField";
import { Scheme } from "../scheme/Scheme";

export type Stage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  dynamicFields?: Array<DynamicField>;
  scheme?: Scheme | null;
};
