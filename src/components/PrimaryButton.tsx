import classNames from "classnames";
import React from "react";

export function PrimaryButton({
  children,
  className,
  onClick,
  type,
}: PrimaryButtonProps) {
  return (
    <button
      className={classNames(
        "px-8 h-12 bg-primary font-bold text-white rounded outline-none hover:bg-primary-dark focus:bg-primary-dark",
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

type PrimaryButtonProps = React.PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  type: "button" | "submit";
}>;
