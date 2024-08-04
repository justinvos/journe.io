import { Descendant } from "slate";

export type Entry = {
  id: string;
  date: string;
  content: Descendant[];
};
