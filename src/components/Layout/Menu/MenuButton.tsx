import React from "react";
import { IconButton } from "../../IconButton";
import { MenuIcon } from "../../../icons/MenuIcon";

export function MenuButton({ onClick }: MenuButtonProps) {
  return <IconButton icon={MenuIcon} onClick={onClick} title="Open menu" />;
}

type MenuButtonProps = {
  onClick: () => void;
};
