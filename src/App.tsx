import React from "react";
import { Editor } from "./components/Editor";
import { MenuIcon } from "./icons/MenuIcon";
import { IconButton } from "./components/IconButton";

export function App() {
  function handleMenuClick() {}

  return (
    <div className="h-screen flex flex-col p-8 items-center">
      <div className="flex flex-row gap-4 w-full">
        <IconButton
          icon={MenuIcon}
          onClick={handleMenuClick}
          title="Open menu"
        />
      </div>
      <h1 className="mt-4 text-lg w-[50rem]">Friday, 28th June</h1>
      <Editor className="mt-2 w-[50rem]" />
    </div>
  );
}
