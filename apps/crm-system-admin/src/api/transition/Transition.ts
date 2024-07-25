export type Transition = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sourceStage: string | null;
  destinationStage: string | null;
};
