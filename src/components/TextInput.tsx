import classNames from "classnames";
import React from "react";

export function TextInput({
  className,
  onChange,
  placeholder,
  type,
  value,
}: TextInputProps) {
  return (
    <input
      className={classNames(
        "border-2 border-neutral-300 rounded p-2 focus:border-neutral-400 outline-none",
        className
      )}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}

type TextInputProps = {
  className?: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: "text" | "password";
  value: string;
};
