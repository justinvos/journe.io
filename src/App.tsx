import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { HistoryPage } from "./pages/HistoryPage";
import { SearchPage } from "./pages/SearchPage";
import { SettingsPage } from "./pages/SettingsPage";
import { EntriesProvider } from "./contexts/EntriesContext/EntriesContext";
import { UserProvider } from "./contexts/UserContext/UserContext";
import { LockedPage } from "./pages/LockedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/locked",
    element: <LockedPage />,
  },
]);

export function App() {
  return (
    <UserProvider>
      <EntriesProvider>
        <RouterProvider router={router} />
      </EntriesProvider>
    </UserProvider>
  );
}
