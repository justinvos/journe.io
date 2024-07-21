import { useMemo } from "react";
import { Descendant } from "slate";

const EMPTY_VALUE: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export function useLocalStorageEntry({
  dateString,
}: UseLocalStorageEntryProps) {
  const localStorageKey = buildLocalStorageKey(dateString);

  const initialValue = useMemo(() => {
    const rawValue = localStorage.getItem(localStorageKey);
    if (rawValue === null) {
      return EMPTY_VALUE;
    }
    return JSON.parse(rawValue);
  }, [localStorageKey]);

  function handleChange(value: Descendant[]) {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }

  return { initialValue, handleChange };
}

type UseLocalStorageEntryProps = {
  dateString: string;
};

function buildLocalStorageKey(dateString: string) {
  const LOCAL_STORAGE_KEY = "journe.entry";
  return `${LOCAL_STORAGE_KEY}.${dateString}`;
}
