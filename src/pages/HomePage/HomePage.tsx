import React from "react";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import { Editor } from "../../components/Editor/Editor";
import { Layout } from "../../components/Layout/Layout";
import { EncryptionGate } from "../../components/EncryptionGate";
import { WelcomeDialog } from "./WelcomeDialog";

export function HomePage() {
  const [searchParams] = useSearchParams();

  const dateString = searchParams.get("date") ?? dayjs().format("YYYY-MM-DD");

  const dateLabel = dayjs(dateString, "YYYY-MM-DD").format("dddd, D MMMM");

  return (
    <EncryptionGate>
      <Layout>
        <h1 className="mt-4 text-xl w-full max-w-[50rem]">{dateLabel}</h1>
        <Editor className="mt-2 w-full max-w-[50rem]" dateString={dateString} />
      </Layout>
      <WelcomeDialog />
    </EncryptionGate>
  );
}
