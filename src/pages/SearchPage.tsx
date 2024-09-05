import React from "react";
import { EncryptionGate } from "../components/EncryptionGate";
import { Layout } from "../components/Layout";

export function SearchPage() {
  return (
    <EncryptionGate>
      <Layout>
        <h1 className="text-xl">Search</h1>
        <p>This feature is in development.</p>
      </Layout>
    </EncryptionGate>
  );
}
