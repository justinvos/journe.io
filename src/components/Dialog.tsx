import React from "react";
import { Backdrop } from "./Backdrop";
import classNames from "classnames";

export function Dialog({ children, className, isOpen, onClose }: DialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Backdrop className="flex justify-center items-center" onClose={onClose}>
      <dialog
        className={classNames("rounded-lg py-24 px-48", className)}
        open={isOpen}
      >
        {children}
      </dialog>
    </Backdrop>
  );
}

type DialogProps = React.PropsWithChildren<{
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}>;
