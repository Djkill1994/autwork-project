import { FC } from "react";
import { Box } from "@mui/material";
import { Header } from "./common/components/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./features/Auth/components/LoginPage.tsx";
import { RegistrationPage } from "./features/Auth/components/RegistrationPage.tsx";
import { TimesheetTable } from "./features/TimesheetTable/components/TimesheetTable.tsx";

export const ROUTE_PATHS = {
  Home: "/",
  Login: "/login",
  Registration: "/registration",
  Admin: "/admin",
  MyProfile: "/me/:userId",
  TimesheetTable: "table/:userId",
};

export const App: FC = () => {
  return (
    <Box height="100vh">
      <Header />
      <Box m="22px 0">
        <Routes>
          <Route path={ROUTE_PATHS.Login} element={<LoginPage />} />
          <Route
            path={ROUTE_PATHS.Registration}
            element={<RegistrationPage />}
          />
          <Route
            path={ROUTE_PATHS.TimesheetTable}
            element={<TimesheetTable />}
          />
        </Routes>
      </Box>
    </Box>
  );
};
