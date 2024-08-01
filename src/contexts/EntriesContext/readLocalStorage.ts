const LOCAL_STORAGE_KEY = "journe.entries";

export function readLocalStorage() {
  const entries = localStorage.getItem(LOCAL_STORAGE_KEY);
  return entries ? JSON.parse(entries) : [];
}
