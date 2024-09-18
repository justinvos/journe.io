import React from "react";
import classNames from "classnames";

export function SecondaryButton({
  children,
  className,
  onClick,
  type,
}: SecondaryButtonProps) {
  return (
    <button
      className={classNames(
        "px-8 h-12 border-2 border-neutral-300 font-bold text-neutral-800 rounded outline-none focus:border-neutral-400 hover:border-neutral-400",
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

type SecondaryButtonProps = React.PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  type: "button" | "submit";
}>;
