import { DynamicField as TDynamicField } from "../api/dynamicField/DynamicField";

export const DYNAMICFIELD_TITLE_FIELD = "name";

export const DynamicFieldTitle = (record: TDynamicField): string => {
  return record.name?.toString() || String(record.id);
};
