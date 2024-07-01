import classNames from "classnames";
import React, { useState } from "react";
import { createEditor } from "slate";
import { BaseEditor, Descendant } from "slate";
import { Slate, Editable, ReactEditor, withReact } from "slate-react";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export function Editor({ className }: EditorProps) {
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        className={classNames("grow outline-none", className)}
        placeholder="Take a note..."
      />
    </Slate>
  );
}

type EditorProps = {
  className?: string;
};
