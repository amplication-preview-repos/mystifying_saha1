import { DynamicFieldUpdateManyWithoutStagesInput } from "./DynamicFieldUpdateManyWithoutStagesInput";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";

export type StageUpdateInput = {
  name?: string | null;
  dynamicFields?: DynamicFieldUpdateManyWithoutStagesInput;
  scheme?: SchemeWhereUniqueInput | null;
};
