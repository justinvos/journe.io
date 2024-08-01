import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export function HistoryPage() {
  return (
    <Layout>
      <h1>History</h1>
      <ul>
        {entries.map((entry) => (
          <Link key={entry.date} to={`/?date=${entry.date}`}>
            <li className="text-2xl">{entry.date}</li>
          </Link>
        ))}
      </ul>
    </Layout>
  );
}
