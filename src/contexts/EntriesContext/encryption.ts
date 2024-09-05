import CryptoJS from "crypto-js";
import z from "zod";
import { Entry, entrySchema } from "./Entry";

export function decrypt({ value, key }: DecryptParameter): Entry[] | null {
  try {
    const entries = JSON.parse(
      CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8)
    );
    console.log("decrypt", { entries });

    return z.array(entrySchema).parse(entries);
  } catch (error) {
    console.log("Decryption error", error);
    return null;
  }
}

type DecryptParameter = {
  value: string;
  key: string;
};

export function encrypt({ entries, key }: EncryptParameter): string {
  return CryptoJS.AES.encrypt(JSON.stringify(entries), key).toString();
}

type EncryptParameter = {
  entries: Entry[];
  key: string;
};
