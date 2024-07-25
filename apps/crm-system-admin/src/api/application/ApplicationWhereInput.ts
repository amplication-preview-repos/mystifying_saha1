import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";

export type ApplicationWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  scheme?: SchemeWhereUniqueInput;
};
