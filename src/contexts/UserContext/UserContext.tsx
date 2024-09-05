import React, { useState } from "react";

export const UserContext = React.createContext<UserContextValue | null>(null);

type UserContextValue = {
  encryptionKey: string | null;
  setEncryptionKey: (encryptionKey: string) => void;
};

export function UserProvider({ children }: React.PropsWithChildren<{}>) {
  const [encryptionKey, setEncryptionKey] = useState<string | null>(null);

  const value = {
    encryptionKey,
    setEncryptionKey,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
