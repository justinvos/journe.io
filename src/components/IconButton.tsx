import React from "react";
import { IconProps } from "../icons/IconProps";

export function IconButton({ icon: Icon, onClick, title }: IconButtonProps) {
  return (
    <button
      className="p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:bg-gray-100"
      onClick={onClick}
      title={title}
    >
      <Icon size={24} />
    </button>
  );
}

type IconButtonProps = {
  icon: (props: IconProps) => React.ReactNode;
  onClick: () => void;
  title: string;
};
