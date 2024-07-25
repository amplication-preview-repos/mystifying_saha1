import { StageWhereInput } from "./StageWhereInput";
import { StageOrderByInput } from "./StageOrderByInput";

export type StageFindManyArgs = {
  where?: StageWhereInput;
  orderBy?: Array<StageOrderByInput>;
  skip?: number;
  take?: number;
};
