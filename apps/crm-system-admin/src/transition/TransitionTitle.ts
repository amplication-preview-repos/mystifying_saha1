import { Transition as TTransition } from "../api/transition/Transition";

export const TRANSITION_TITLE_FIELD = "sourceStage";

export const TransitionTitle = (record: TTransition): string => {
  return record.sourceStage?.toString() || String(record.id);
};
