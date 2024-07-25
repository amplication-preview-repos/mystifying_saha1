import { Stage } from "../stage/Stage";
import { DynamicField } from "../dynamicField/DynamicField";
import { Application } from "../application/Application";

export type Scheme = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  stages?: Array<Stage>;
  dynamicFields?: Array<DynamicField>;
  applications?: Array<Application>;
};
