import { useContext } from "react";
import { Descendant } from "slate";
import { v4 as uuid } from "uuid";
import {
  EntriesContext,
  useEntryContext,
} from "../../contexts/EntriesContext/EntriesContext";
import { Entry } from "../../contexts/EntriesContext/Entry";

const EMPTY_VALUE: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export function useEntry({
  dateString,
}: UseLocalStorageEntryProps): UseEntryReturn {
  const { upsertEntry, getEntry, loadingState } = useEntryContext();

  const entry = getEntry(dateString);

  function handleChange(newContent: Descendant[]) {
    if (entry == null) {
      upsertEntry({
        id: uuid(),
        content: newContent,
        date: dateString,
      });
      return;
    }
    upsertEntry({
      ...entry,
      content: newContent,
    });
  }

  return {
    initialValue: fallbackToEmptyContent(entry),
    handleChange,
    isReady: loadingState === "success",
  };
}

type UseLocalStorageEntryProps = {
  dateString: string;
};

type UseEntryReturn = {
  initialValue: Descendant[];
  handleChange: (value: Descendant[]) => void;
  isReady: boolean;
};

function fallbackToEmptyContent(entry: Entry | null): Descendant[] {
  if (entry === null) {
    return EMPTY_VALUE;
  }

  return entry.content;
}
