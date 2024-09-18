import React, { FormEvent, useState } from "react";
import { Dialog } from "../Dialog";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { TextInput } from "../TextInput";
import { useSetupEncryptionKeyDialogState } from "./useSetupEncryptionKeyDialogState";
import { useEntryContext } from "../../contexts/EntriesContext/EntriesContext";
import { writeIsEncrypted } from "../../contexts/EntriesContext/localStorage";

export function SetupEncryptionKeyDialog() {
  const [formState, setFormState] = useState({
    encryptionKey: "",
  });
  const { isSetupEncryptionKeyDialogOpen, closeSetupEncryptionKeyDialog } =
    useSetupEncryptionKeyDialogState();
  const { save } = useEntryContext();

  function handleChange(value: string) {
    setFormState({
      ...formState,
      encryptionKey: value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /** @todo form validation here */

    writeIsEncrypted(true);
    save(formState.encryptionKey);
  }

  return (
    <Dialog
      className="flex flex-col"
      isOpen={isSetupEncryptionKeyDialogOpen}
      onClose={closeSetupEncryptionKeyDialog}
    >
      <h2 className="font-bold text-5xl">Set up encryption</h2>
      <p className="text-xl mt-4">
        This key will be used in AES-256 encryption of your entries.
      </p>
      <p className="text-xl">It will never be sent to a server.</p>
      <form onSubmit={handleSubmit}>
        <TextInput
          className="mt-4 w-full"
          onChange={handleChange}
          placeholder="Your encryption key"
          type="password"
          value={formState.encryptionKey}
        />
        <div className="flex flex-row gap-6 mt-4">
          <SecondaryButton
            className="basis-1/2"
            onClick={closeSetupEncryptionKeyDialog}
            type="button"
          >
            Not now
          </SecondaryButton>
          <PrimaryButton className="basis-1/2" type="submit">
            Set up key
          </PrimaryButton>
        </div>
      </form>
    </Dialog>
  );
}
