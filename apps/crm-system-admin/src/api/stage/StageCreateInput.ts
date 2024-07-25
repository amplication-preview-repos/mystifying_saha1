import { DynamicFieldCreateNestedManyWithoutStagesInput } from "./DynamicFieldCreateNestedManyWithoutStagesInput";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";

export type StageCreateInput = {
  name?: string | null;
  dynamicFields?: DynamicFieldCreateNestedManyWithoutStagesInput;
  scheme?: SchemeWhereUniqueInput | null;
};
