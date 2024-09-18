import React from "react";
import { useSearchParams } from "react-router-dom";
import { Dialog } from "../../components/Dialog";
import { readHasWelcomed, writeHasWelcomed } from "./hasWelcomedLocalStorage";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import { useSetupEncryptionKeyDialogState } from "../../components/SetupEncryptionKeyDialog/useSetupEncryptionKeyDialogState";

export function WelcomeDialog() {
  const [isOpen, setOpen] = React.useState(!readHasWelcomed());
  const { openSetupEncryptionKeyDialog } = useSetupEncryptionKeyDialogState();

  function handleClose() {
    setOpen(false);
    writeHasWelcomed(true);
  }

  function handleSetUpKeyClick() {
    handleClose();
    openSetupEncryptionKeyDialog();
  }

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <div className="flex flex-row items-center w-[700px]">
        <div>
          <h2 className="font-bold text-5xl">Welcome!</h2>
          <p className="mt-8 text-xl">
            Journe.io is a daily journal that is fully encrypted for you and
            only you.
          </p>
          <p className="text-xl mt-4">
            Get started by creating an encryption key.
          </p>
        </div>
        <img
          alt="Person journaling"
          className="h-56"
          src="/sitting-reading.svg"
        />
      </div>
      <div className="flex flex-row gap-6 mt-10">
        <SecondaryButton className="basis-1/2" type="button">
          Not now
        </SecondaryButton>
        <PrimaryButton
          className="basis-1/2"
          onClick={handleSetUpKeyClick}
          type="button"
        >
          Set up encryption
        </PrimaryButton>
      </div>
    </Dialog>
  );
}
