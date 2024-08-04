import React from "react";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import { Editor } from "../components/Editor/Editor";
import { Layout } from "../components/Layout";
import { EntriesProvider } from "../contexts/EntriesContext/EntriesContext";

export function HomePage() {
  const [searchParams] = useSearchParams();

  const dateString = searchParams.get("date") ?? dayjs().format("YYYY-MM-DD");

  const dateLabel = dayjs(dateString, "YYYY-MM-DD").format("dddd, D MMMM");

  return (
    <EntriesProvider>
      <Layout>
        <h1 className="mt-4 text-lg w-full max-w-[50rem]">{dateLabel}</h1>
        <Editor className="mt-2 w-full max-w-[50rem]" dateString={dateString} />
      </Layout>
    </EntriesProvider>
  );
}
