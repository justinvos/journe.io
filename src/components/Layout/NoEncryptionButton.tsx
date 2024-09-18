import React from "react";
import { IconButton } from "../../components/IconButton";
import { NoEncryptionIcon } from "../../icons/NoEncryptionIcon";

export function NoEncryptionButton({ onClick }: NoEncryptionButtonProps) {
  return (
    <IconButton
      icon={NoEncryptionIcon}
      onClick={onClick}
      title="Set up encryption"
    />
  );
}

type NoEncryptionButtonProps = {
  onClick: () => void;
};
