import { Entry } from "./Entry";

const LOCAL_STORAGE_KEY = "journe.entries";

export function readLocalStorage(): Entry[] {
  const entries = localStorage.getItem(LOCAL_STORAGE_KEY);
  return entries ? JSON.parse(entries) : [];
}

export function writeLocalStorage(entries: Entry[]): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
}
