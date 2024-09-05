import React, { FormEvent, useState } from "react";
import { EncryptionGate } from "../components/EncryptionGate";
import { Layout } from "../components/Layout";
import {
  readIsEncrypted,
  writeIsEncrypted,
} from "../contexts/EntriesContext/localStorage";
import { useEntryContext } from "../contexts/EntriesContext/EntriesContext";
import { useUserContext } from "../contexts/UserContext/UserContext";
import { PrimaryButton } from "../components/PrimaryButton";
import { TextInput } from "../components/TextInput";

export function SettingsPage() {
  const { encryptionKey, setEncryptionKey } = useUserContext();
  const { save } = useEntryContext();

  const [formState, setFormState] = useState({
    shouldEncrypt: readIsEncrypted(),
    encryptionKey: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("formState", formState);
    if (encryptionKey && formState.encryptionKey !== encryptionKey) {
      console.warn("Encryption key does not match");
      alert("Encryption key does not match");
      return;
    }
    if (!encryptionKey) {
      setEncryptionKey(formState.encryptionKey);
    }
    writeIsEncrypted(formState.shouldEncrypt);
    save();
  }

  return (
    <EncryptionGate>
      <Layout>
        <h1 className="text-xl">Settings</h1>
        <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
          <TextInput
            type="password"
            onChange={(value: string) =>
              setFormState({
                ...formState,
                encryptionKey: value,
              })
            }
            placeholder="Enter encryption key"
            value={formState.encryptionKey}
          />
          <label className="flex flex-row gap-2">
            <input
              type="checkbox"
              name="shouldEncrypt"
              checked={formState.shouldEncrypt}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  shouldEncrypt: event.target.checked,
                })
              }
            />
            <p>Should encrypt</p>
          </label>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </form>
      </Layout>
    </EncryptionGate>
  );
}
