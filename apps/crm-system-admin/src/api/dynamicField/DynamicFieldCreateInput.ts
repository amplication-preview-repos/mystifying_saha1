import { InputJsonValue } from "../../types";
import { StageWhereUniqueInput } from "../stage/StageWhereUniqueInput";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";

export type DynamicFieldCreateInput = {
  name?: string | null;
  value?: InputJsonValue;
  stage?: StageWhereUniqueInput | null;
  scheme?: SchemeWhereUniqueInput | null;
};
