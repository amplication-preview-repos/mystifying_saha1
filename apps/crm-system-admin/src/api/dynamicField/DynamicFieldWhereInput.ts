import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StageWhereUniqueInput } from "../stage/StageWhereUniqueInput";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";

export type DynamicFieldWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: JsonFilter;
  stage?: StageWhereUniqueInput;
  scheme?: SchemeWhereUniqueInput;
};
