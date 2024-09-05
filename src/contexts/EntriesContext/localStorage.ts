const LOCAL_STORAGE_ENTRIES_KEY = "journe.entries";
const LOCAL_STORAGE_IS_ENCRYPTED_KEY = "journe.isEncrypted";

export function readEntries(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_ENTRIES_KEY) || null;
}

export function writeEntries(entriesValue: string): void {
  localStorage.setItem(LOCAL_STORAGE_ENTRIES_KEY, entriesValue);
}

export function readIsEncrypted(): boolean {
  return localStorage.getItem(LOCAL_STORAGE_IS_ENCRYPTED_KEY) === "true";
}

export function writeIsEncrypted(isEncrypted: boolean): void {
  return localStorage.setItem(
    LOCAL_STORAGE_IS_ENCRYPTED_KEY,
    isEncrypted ? "true" : "false"
  );
}
