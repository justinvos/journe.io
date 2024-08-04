import { replaceOrAppend } from "radash";
import React from "react";
import { readLocalStorage, writeLocalStorage } from "./readLocalStorage";
import { Entry } from "./Entry";

export const EntriesContext = React.createContext<EntriesContextValue | null>(
  null
);

export function EntriesProvider({ children }: { children: React.ReactNode }) {
  const [entries, setEntries] = React.useState<Entry[]>(readLocalStorage());

  function upsertEntry(updatedEntry: Entry) {
    const newEntries = replaceOrAppend(
      entries,
      updatedEntry,
      (entry) => entry.date === updatedEntry.date
    );
    setEntries(newEntries);
    writeLocalStorage(newEntries);
  }

  function getEntry(dateString: string) {
    if (!entries) {
      return null;
    }

    return entries.find((entry) => entry.date === dateString) ?? null;
  }

  const value = {
    entries,
    upsertEntry,
    getEntry,
  };

  return (
    <EntriesContext.Provider value={value}>{children}</EntriesContext.Provider>
  );
}

type EntriesContextValue = {
  entries: Entry[] | null;
  upsertEntry: (entry: Entry) => void;
  getEntry: (dateString: string) => Entry | null;
};
