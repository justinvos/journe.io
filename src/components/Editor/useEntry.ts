import { Descendant } from "slate";
import { v4 as uuid } from "uuid";
import { useEntryContext } from "../../contexts/EntriesContext/EntriesContext";
import { Entry } from "../../contexts/EntriesContext/Entry";
import { useUserContext } from "../../contexts/UserContext/UserContext";

const EMPTY_VALUE: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export function useEntry({
  dateString,
}: UseLocalStorageEntryProps): UseEntryReturn {
  const { encryptionKey } = useUserContext();
  const { upsertEntry, getEntry, loadingState } = useEntryContext();

  const entry = getEntry(dateString);

  function handleChange(newContent: Descendant[]) {
    if (entry == null) {
      const updatedEntry = {
        id: uuid(),
        content: newContent,
        date: dateString,
      };
      upsertEntry({ updatedEntry, encryptionKey });
      return;
    }

    const updatedEntry = {
      ...entry,
      content: newContent,
    };
    upsertEntry({
      updatedEntry,
      encryptionKey,
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
