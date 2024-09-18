import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { readIsEncrypted } from "../contexts/EntriesContext/localStorage";

export function EncryptionGate({ children }: EncryptionGateProps) {
  const { encryptionKey } = useUserContext();
  const navigate = useNavigate();

  const needsEncryptionKey = !encryptionKey && readIsEncrypted();

  console.log("EncryptionGate", { needsEncryptionKey });

  useEffect(() => {
    if (needsEncryptionKey) {
      navigate("/locked");
    }
  }, [needsEncryptionKey]);

  if (needsEncryptionKey) {
    return null;
  }

  return children;
}

type EncryptionGateProps = React.PropsWithChildren<{}>;
