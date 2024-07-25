import { Stage as TStage } from "../api/stage/Stage";

export const STAGE_TITLE_FIELD = "name";

export const StageTitle = (record: TStage): string => {
  return record.name?.toString() || String(record.id);
};
