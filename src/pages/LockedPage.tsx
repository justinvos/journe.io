import React, { useState, FormEvent, ChangeEvent } from "react";
import { Layout } from "../components/Layout";
import { useUserContext } from "../contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { useEntryContext } from "../contexts/EntriesContext/EntriesContext";
import { loadEntries } from "../contexts/EntriesContext/loadEntries";
import { TextInput } from "../components/TextInput";
import { PrimaryButton } from "../components/PrimaryButton";

export function LockedPage() {
  console.log("LockedPage");
  const [formState, setFormState] = useState({ key: "" });
  const { setEncryptionKey } = useUserContext();
  const navigate = useNavigate();
  const { load } = useEntryContext();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setFormState({ key: event.target.value });
  }

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    setEncryptionKey(formState.key);

    load(formState.key);
    navigate("/");
  }

  return (
    <Layout shouldHideMenu>
      <h1 className="mt-4 text-xl w-full max-w-[50rem]">Locked</h1>
      <form
        className="mt-4 text-lg w-full max-w-[50rem] flex flex-row gap-6"
        onSubmit={handleSubmit}
      >
        <TextInput
          type="password"
          onChange={(value) => setFormState({ key: value })}
          placeholder="Enter encryption key"
          value={formState.key}
        />
        <PrimaryButton type="submit">Unlock</PrimaryButton>
      </form>
    </Layout>
  );
}
