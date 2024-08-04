import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import {
  EntriesContext,
  EntriesProvider,
} from "../contexts/EntriesContext/EntriesContext";

export function HistoryPage() {
  return (
    <EntriesProvider>
      <Layout>
        <h1>History</h1>
        <EntriesList />
      </Layout>
    </EntriesProvider>
  );
}

function EntriesList() {
  const { entries } = React.useContext(EntriesContext)!;

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
