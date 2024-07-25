import { Scheme } from "../scheme/Scheme";

export type Application = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  scheme?: Scheme | null;
};
