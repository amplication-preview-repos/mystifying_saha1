import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  schemeId?: SortOrder;
};
