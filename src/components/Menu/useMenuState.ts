import { useState } from "react";

export function useMenuState() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return {
    isMenuOpen,
    openMenu: () => setMenuOpen(true),
    closeMenu: () => setMenuOpen(false),
  };
}
