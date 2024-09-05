import { z } from "zod";
import { Entry, entrySchema } from "./Entry";
import { readEntries, readIsEncrypted } from "./localStorage";
import { decrypt } from "./encryption";

export function loadEntries(encryptionKey: string | null): Entry[] | null {
  const localStorageValue = readEntries();
  if (!localStorageValue) {
    return null;
  }

  const isEncrypted = readIsEncrypted();

  console.log("loadEntries", { isEncrypted, localStorageValue });

  if (!isEncrypted) {
    return z.array(entrySchema).parse(JSON.parse(localStorageValue));
  }

  if (!encryptionKey) {
    return null;
  }

  return decrypt({
    value: localStorageValue,
    key: encryptionKey,
  });
}
