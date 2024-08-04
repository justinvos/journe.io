import { useContext } from "react";
import { Descendant } from "slate";
import { v4 as uuid } from "uuid";
import { EntriesContext } from "../../contexts/EntriesContext/EntriesContext";
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
  const contextValue = useContext(EntriesContext);
  if (contextValue === null) {
    throw new Error("useEntry must be used within a EntriesProvider");
  }
  const { upsertEntry, getEntry } = contextValue;

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
  };
}

type UseLocalStorageEntryProps = {
  dateString: string;
};

type UseEntryReturn = {
  initialValue: Descendant[];
  handleChange: (value: Descendant[]) => void;
};

function fallbackToEmptyContent(entry: Entry | null): Descendant[] {
  if (entry === null) {
    return EMPTY_VALUE;
  }

  return entry.content;
}
