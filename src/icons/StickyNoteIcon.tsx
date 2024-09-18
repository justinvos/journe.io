import React from "react";
import { IconProps } from "./IconProps";

export function StickyNoteIcon({ fill = "#333333", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill={fill}
    >
      <path d="M640-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v440L640-120Zm-40-80v-80q0-33 23.5-56.5T680-360h80v-400H200v560h400ZM440-320h80v-240h120v-80H320v80h120v240Zm160 120Zm-400 0v-560 560Z" />
    </svg>
  );
}