import classNames from "classnames";
import React from "react";

export function Backdrop({ children, className, onClose }: BackdropProps) {
  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-screen h-screen bg-black/50",
        className
      )}
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );
}

type BackdropProps = React.PropsWithChildren<{
  className?: string;
  onClose: () => void;
}>;
