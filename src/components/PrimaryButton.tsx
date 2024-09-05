import React from "react";

export function PrimaryButton({ children, type }: PrimaryButtonProps) {
  return (
    <button
      className="px-8 py-2 bg-violet-700 text-white rounded hover:bg-violet-800"
      type={type}
    >
      {children}
    </button>
  );
}

type PrimaryButtonProps = React.PropsWithChildren<{
  type: "button" | "submit";
}>;
