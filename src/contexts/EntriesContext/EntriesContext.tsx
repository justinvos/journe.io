import { replaceOrAppend } from "radash";
import React, { useEffect } from "react";
import { loadEntries } from "./loadEntries";
import { Entry } from "./Entry";
import { readIsEncrypted, writeEntries } from "./localStorage";
import { useUserContext } from "../UserContext/UserContext";
import { encrypt } from "./encryption";

export const EntriesContext = React.createContext<EntriesContextValue | null>(
  null
);

export function EntriesProvider({ children }: { children: React.ReactNode }) {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!encryptionKey) {
  //     navigate("/locked");
  //   }
  // }, []);

  const [entries, setEntries] = React.useState<Entry[]>(
    // loadEntries(encryptionKey) ?? []
    []
  );
  const [loadingState, setLoadingState] =
    React.useState<EntriesContextLoadingState>("initial");

  function save(encryptionKey: string) {
    if (!readIsEncrypted()) {
      writeEntries(JSON.stringify(entries));
      return;
    }

    if (!encryptionKey) {
      console.warn("No encryption key to encrypt entries");
      return;
    }

    const encryptedEntries = encrypt({
      entries,
      key: encryptionKey,
    });
    writeEntries(encryptedEntries);
  }

  function upsertEntry({ encryptionKey, updatedEntry }: UpsertEntryParameter) {
    const newEntries = replaceOrAppend(
      entries,
      updatedEntry,
      (entry) => entry.date === updatedEntry.date
    );
    setEntries(newEntries);

    if (!readIsEncrypted()) {
      writeEntries(JSON.stringify(entries));
      return;
    }

    if (!encryptionKey) {
      console.warn("No encryption key to encrypt entries");
      return;
    }
    const encryptedEntries = encrypt({
      entries: newEntries,
      key: encryptionKey,
    });
    writeEntries(encryptedEntries);
  }

  function getEntry(dateString: string) {
    if (!entries) {
      return null;
    }

    return entries.find((entry) => entry.date === dateString) ?? null;
  }

  function load(encryptionKey: string | null): void {
    const loadedEntries = loadEntries(encryptionKey);
    setEntries(loadedEntries ?? []);
    setLoadingState("success");
  }

  useEffect(() => {
    if (!readIsEncrypted()) {
      load(null);
    }
  }, []);

  const value = {
    entries,
    loadingState,
    upsertEntry,
    getEntry,
    load,
    save,
  };

  return (
    <EntriesContext.Provider value={value}>{children}</EntriesContext.Provider>
  );
}

type EntriesContextValue = {
  entries: Entry[] | null;
  upsertEntry: (param: UpsertEntryParameter) => void;
  getEntry: (dateString: string) => Entry | null;
  load: (encryptionKey: string) => void;
  loadingState: EntriesContextLoadingState;
  save: (encryptionKey: string) => void;
};

type EntriesContextLoadingState = "initial" | "loading" | "success" | "error";

export function useEntryContext() {
  const context = React.useContext(EntriesContext);
  if (!context) {
    throw new Error("useEntryContext must be used within a EntriesContext");
  }
  return context;
}

type UpsertEntryParameter = {
  encryptionKey: string | null;
  updatedEntry: Entry;
};
