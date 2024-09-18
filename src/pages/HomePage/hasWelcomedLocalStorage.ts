const LOCAL_STORAGE_HAS_WELCOMED_KEY = "journe.hasWelcomed";

export function readHasWelcomed(): boolean {
  return localStorage.getItem(LOCAL_STORAGE_HAS_WELCOMED_KEY) === "true";
}

export function writeHasWelcomed(hasWelcomed: boolean): void {
  localStorage.setItem(
    LOCAL_STORAGE_HAS_WELCOMED_KEY,
    hasWelcomed ? "true" : "false"
  );
}
