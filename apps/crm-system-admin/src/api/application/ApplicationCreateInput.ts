import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";

export type ApplicationCreateInput = {
  description?: string | null;
  name?: string | null;
  scheme?: SchemeWhereUniqueInput | null;
};
