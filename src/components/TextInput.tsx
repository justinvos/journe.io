import React from "react";

export function TextInput({
  onChange,
  placeholder,
  type,
  value,
}: TextInputProps) {
  return (
    <input
      className="border border-gray-300 rounded p-2"
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}

type TextInputProps = {
  onChange: (value: string) => void;
  placeholder: string;
  type: "text" | "password";
  value: string;
};
