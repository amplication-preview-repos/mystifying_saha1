import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DynamicFieldListRelationFilter } from "../dynamicField/DynamicFieldListRelationFilter";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";

export type StageWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  dynamicFields?: DynamicFieldListRelationFilter;
  scheme?: SchemeWhereUniqueInput;
};
