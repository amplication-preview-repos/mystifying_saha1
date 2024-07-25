import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";

export type ApplicationUpdateInput = {
  description?: string | null;
  name?: string | null;
  scheme?: SchemeWhereUniqueInput | null;
};
