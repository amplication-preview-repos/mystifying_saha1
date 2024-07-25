import { StageCreateNestedManyWithoutSchemesInput } from "./StageCreateNestedManyWithoutSchemesInput";
import { DynamicFieldCreateNestedManyWithoutSchemesInput } from "./DynamicFieldCreateNestedManyWithoutSchemesInput";
import { ApplicationCreateNestedManyWithoutSchemesInput } from "./ApplicationCreateNestedManyWithoutSchemesInput";

export type SchemeCreateInput = {
  name?: string | null;
  stages?: StageCreateNestedManyWithoutSchemesInput;
  dynamicFields?: DynamicFieldCreateNestedManyWithoutSchemesInput;
  applications?: ApplicationCreateNestedManyWithoutSchemesInput;
};
