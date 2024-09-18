import React from "react";
import { Link } from "react-router-dom";
import { Backdrop } from "../../Backdrop";
import { IconProps } from "../../../icons/IconProps";
import { DocumentIcon } from "../../../icons/DocumentIcon";
import { StickyNoteIcon } from "../../../icons/StickyNoteIcon";
import { CalendarMonthIcon } from "../../../icons/CalendarMonthIcon";
import { SearchIcon } from "../../../icons/SearchIcon";
import { LockIcon } from "../../../icons/LockIcon";
import { SettingsIcon } from "../../../icons/SettingsIcon";
import { useUserContext } from "../../../contexts/UserContext/UserContext";

const ITEMS = [
  {
    icon: StickyNoteIcon,
    key: "today",
    label: "Today",
    path: "/",
  },
  {
    icon: CalendarMonthIcon,
    key: "history",
    label: "History",
    path: "/history",
  },
  {
    icon: SearchIcon,
    key: "search",
    label: "Search",
    path: "/search",
  },
  {
    icon: SettingsIcon,
    key: "settings",
    label: "Settings",
    path: "/settings",
  },
  {
    icon: LockIcon,
    key: "lock",
    label: "Lock",
  },
];

export function Menu({ onClose }: MenuProps) {
  const { setEncryptionKey } = useUserContext();

  function handleClick(key: string) {
    if (key === "lock") {
      setEncryptionKey(null);
      onClose();
    }
  }

  return (
    <Backdrop onClose={onClose}>
      <nav className="fixed top-0 left-0 w-[30rem] max-w-[80%] h-screen bg-white shadow p-24">
        <ul className="flex flex-col gap-4">
          {ITEMS.map((item) => (
            <MenuItem {...item} onClick={() => handleClick(item.key)} />
          ))}
        </ul>
      </nav>
    </Backdrop>
  );
}

type MenuProps = {
  onClose: () => void;
};

function MenuItem({ label, path, icon: Icon, onClick }: MenuItemProps) {
  const content = (
    <li
      className="text-2xl flex flex-row gap-4 cursor-pointer p-4 rounded-lg outline-none hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-100"
      onClick={path ? undefined : onClick}
    >
      <Icon size={32} />
      <p>{label}</p>
    </li>
  );

  if (path) {
    return <Link to={path}>{content}</Link>;
  }

  return content;
}

type MenuItemProps = {
  key: string;
  icon: (props: IconProps) => JSX.Element;
  label: string;
  path?: string;
  onClick: () => void;
};
