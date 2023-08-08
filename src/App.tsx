import { FC } from "react";
import { Box } from "@mui/material";
import { Header } from "./common/components/Header.tsx";

export const ROUTE_PATHS = {
  Home: "/",
  Login: "/login",
  Registration: "/registration",
  Admin: "/admin",
  Collection: "/collections/:userId",
  CollectionId: "/collection/:userId/:id",
  MyProfile: "/me/:userId",
  Items: "/collection/:collectionId/:collectionName/items",
  Item: "/item",
  FoundTags: "/tag/:id/:tagName",
};

export const App: FC = () => {
  return (
    <Box height="100vh">
      <Header />
    </Box>
  );
};
