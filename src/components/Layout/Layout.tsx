import React, { useState } from "react";
import { Menu } from "./Menu/Menu";
import { MenuButton } from "./Menu/MenuButton";

import { useMenuState } from "./Menu/useMenuState";
import { useSetupEncryptionKeyDialogState } from "../SetupEncryptionKeyDialog/useSetupEncryptionKeyDialogState";
import { SetupEncryptionKeyDialog } from "../SetupEncryptionKeyDialog/SetupEncryptionKeyDialog";
import { readIsEncrypted } from "../../contexts/EntriesContext/localStorage";
import { NoEncryptionButton } from "./NoEncryptionButton";

export function Layout({ children, shouldHideMenu = false }: LayoutProps) {
  const { isMenuOpen, closeMenu, openMenu } = useMenuState();
  const {
    isSetupEncryptionKeyDialogOpen,
    closeSetupEncryptionKeyDialog,
    openSetupEncryptionKeyDialog,
  } = useSetupEncryptionKeyDialogState();
  const shouldShowNoEncryptionButton = !readIsEncrypted();

  return (
    <>
      <div className="h-screen flex flex-col p-8">
        <div className="flex flex-row gap-4 w-full">
          {shouldHideMenu ? null : <MenuButton onClick={openMenu} />}
          {shouldShowNoEncryptionButton ? (
            <NoEncryptionButton onClick={openSetupEncryptionKeyDialog} />
          ) : null}
        </div>
        {children}
      </div>
      {isMenuOpen ? <Menu onClose={closeMenu} /> : null}
      {isSetupEncryptionKeyDialogOpen ? (
        <SetupEncryptionKeyDialog
          isOpen={isSetupEncryptionKeyDialogOpen}
          onClose={closeSetupEncryptionKeyDialog}
        />
      ) : null}
    </>
  );
}

type LayoutProps = React.PropsWithChildren<{
  shouldHideMenu?: boolean;
}>;
