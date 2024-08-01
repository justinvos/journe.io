import React from "react";
import { Link } from "react-router-dom";

const ITEMS = [
  {
    key: "today",
    label: "Today",
    path: "/",
  },
  {
    key: "history",
    label: "History",
    path: "/history",
  },
  {
    key: "search",
    label: "Search",
    path: "/search",
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
  },
];

export function Menu({ onClose }: MenuProps) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/50"
      onClick={onClose}
    >
      <nav className="fixed top-0 left-0 w-[30rem] h-screen bg-white shadow p-24">
        <ul className="flex flex-col gap-10">
          {ITEMS.map((item) => (
            <Link key={item.key} to={item.path}>
              <li className="text-2xl">{item.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

type MenuProps = {
  onClose: () => void;
};
