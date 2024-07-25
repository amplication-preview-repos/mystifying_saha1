import { DynamicFieldWhereInput } from "./DynamicFieldWhereInput";
import { DynamicFieldOrderByInput } from "./DynamicFieldOrderByInput";

export type DynamicFieldFindManyArgs = {
  where?: DynamicFieldWhereInput;
  orderBy?: Array<DynamicFieldOrderByInput>;
  skip?: number;
  take?: number;
};
