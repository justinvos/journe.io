import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SETUP_ENCRYPTION_KEY_DIALOG_KEY = "set-up-encryption-key";

export function useSetupEncryptionKeyDialogState() {
  const [searchParams, setSearchParams] = useSearchParams();

  function openSetupEncryptionKeyDialog() {
    setSearchParams({ dialog: SETUP_ENCRYPTION_KEY_DIALOG_KEY });
  }

  function closeSetupEncryptionKeyDialog() {
    setSearchParams({});
  }

  const isSetupEncryptionKeyDialogOpen =
    searchParams.get("dialog") === SETUP_ENCRYPTION_KEY_DIALOG_KEY;

  return {
    isSetupEncryptionKeyDialogOpen,
    openSetupEncryptionKeyDialog,
    closeSetupEncryptionKeyDialog,
  };
}
