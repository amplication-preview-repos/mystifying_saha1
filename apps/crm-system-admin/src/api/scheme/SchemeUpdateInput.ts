import { StageUpdateManyWithoutSchemesInput } from "./StageUpdateManyWithoutSchemesInput";
import { DynamicFieldUpdateManyWithoutSchemesInput } from "./DynamicFieldUpdateManyWithoutSchemesInput";
import { ApplicationUpdateManyWithoutSchemesInput } from "./ApplicationUpdateManyWithoutSchemesInput";

export type SchemeUpdateInput = {
  name?: string | null;
  stages?: StageUpdateManyWithoutSchemesInput;
  dynamicFields?: DynamicFieldUpdateManyWithoutSchemesInput;
  applications?: ApplicationUpdateManyWithoutSchemesInput;
};
