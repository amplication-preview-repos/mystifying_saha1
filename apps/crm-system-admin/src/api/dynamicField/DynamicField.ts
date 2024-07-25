import { JsonValue } from "type-fest";
import { Stage } from "../stage/Stage";
import { Scheme } from "../scheme/Scheme";

export type DynamicField = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  value: JsonValue;
  stage?: Stage | null;
  scheme?: Scheme | null;
};
