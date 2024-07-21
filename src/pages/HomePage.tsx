import React from "react";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import { Editor } from "../components/Editor";
import { IconButton } from "../components/IconButton";
import { MenuIcon } from "../icons/MenuIcon";

export function HomePage() {
  const [searchParams] = useSearchParams();

  const dateString = searchParams.get("date") ?? dayjs().format("YYYY-MM-DD");

  function handleMenuClick() {}

  const dateLabel = dayjs(dateString, "YYYY-MM-DD").format("dddd, D MMMM");

  return (
    <div className="h-screen flex flex-col p-8 items-center">
      <div className="flex flex-row gap-4 w-full">
        <IconButton
          icon={MenuIcon}
          onClick={handleMenuClick}
          title="Open menu"
        />
      </div>
      <h1 className="mt-4 text-lg w-full max-w-[50rem]">{dateLabel}</h1>
      <Editor className="mt-2 w-full max-w-[50rem]" dateString={dateString} />
    </div>
  );
}
