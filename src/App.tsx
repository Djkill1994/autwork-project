import { FC } from "react";
import { Box } from "@mui/material";
import { Header } from "./common/components/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./features/Auth/components/LoginPage.tsx";

export const ROUTE_PATHS = {
  Home: "/",
  Login: "/login",
  Registration: "/registration",
  Admin: "/admin",
  MyProfile: "/me/:userId",
};

export const App: FC = () => {
  return (
    <Box height="100vh">
      <Header />
      <Box m="22px 0">
        <Routes>
          <Route path={ROUTE_PATHS.Login} element={<LoginPage />} />
        </Routes>
      </Box>
    </Box>
  );
};
