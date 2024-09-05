import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import {
  EntriesContext,
  EntriesProvider,
  useEntryContext,
} from "../contexts/EntriesContext/EntriesContext";
import { EncryptionGate } from "../components/EncryptionGate";

export function HistoryPage() {
  return (
    <EncryptionGate>
      <Layout>
        <h1 className="text-xl">History</h1>
        <EntriesList />
      </Layout>
    </EncryptionGate>
  );
}

function EntriesList() {
  // const { entries } = React.useContext(EntriesContext)!;
  const { entries } = useEntryContext();
  console.log("entries list", entries);

  if (entries == null) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {entries.map((entry) => (
        <Link key={entry.date} to={`/?date=${entry.date}`}>
          <li className="text-2xl">{entry.date}</li>
        </Link>
      ))}
    </ul>
  );
}
