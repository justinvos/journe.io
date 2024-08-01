import React from "react";
import { Menu } from "./Menu/Menu";
import { MenuButton } from "./Menu/MenuButton";

import { useMenuState } from "./Menu/useMenuState";

export function Layout({ children }: LayoutProps) {
  const { isMenuOpen, closeMenu, openMenu } = useMenuState();

  return (
    <>
      <div className="h-screen flex flex-col p-8 items-center">
        <div className="flex flex-row gap-4 w-full">
          <MenuButton onClick={openMenu} />
        </div>
        {children}
      </div>
      {isMenuOpen ? <Menu onClose={closeMenu} /> : null}
    </>
  );
}

type LayoutProps = React.PropsWithChildren<{}>;
