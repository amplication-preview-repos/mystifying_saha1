import { TransitionWhereInput } from "./TransitionWhereInput";
import { TransitionOrderByInput } from "./TransitionOrderByInput";

export type TransitionFindManyArgs = {
  where?: TransitionWhereInput;
  orderBy?: Array<TransitionOrderByInput>;
  skip?: number;
  take?: number;
};
