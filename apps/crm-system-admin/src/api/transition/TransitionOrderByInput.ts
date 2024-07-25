import { SortOrder } from "../../util/SortOrder";

export type TransitionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sourceStage?: SortOrder;
  destinationStage?: SortOrder;
};
