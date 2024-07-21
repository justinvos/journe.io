import classNames from "classnames";
import React, { useState } from "react";
import { createEditor } from "slate";
import { BaseEditor, Descendant } from "slate";
import { Slate, Editable, ReactEditor, withReact } from "slate-react";
import { useLocalStorageEntry } from "./useLocalStorageEntry";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

export function Editor({ className, dateString }: EditorProps) {
  const [editor] = useState(() => withReact(createEditor()));

  const { initialValue, handleChange } = useLocalStorageEntry({ dateString });

  return (
    <Slate editor={editor} initialValue={initialValue} onChange={handleChange}>
      <Editable
        className={classNames("grow outline-none", className)}
        placeholder="Take a note..."
      />
    </Slate>
  );
}

type EditorProps = {
  className?: string;
  dateString: string;
};
