import React, { useState, FormEvent, ChangeEvent } from "react";
import { Layout } from "../components/Layout/Layout";
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
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="-mt-14 w-[700px]">
        <h1 className="mt-4 font-bold text-4xl w-full max-w-[50rem]">Locked</h1>
        <form
          className="mt-14 text-lg w-full max-w-[50rem] flex flex-row gap-6"
          onSubmit={handleSubmit}
        >
          <TextInput
            className="flex-grow"
            type="password"
            onChange={(value) => setFormState({ key: value })}
            placeholder="Enter encryption key"
            value={formState.key}
          />
          <PrimaryButton className="w-44" type="submit">
            Unlock
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
