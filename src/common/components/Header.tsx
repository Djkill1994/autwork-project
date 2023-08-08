import { FC } from "react";
import { AppBar, Box, Button, Stack } from "@mui/material";
import { ReactComponent as Logo } from "../../../public/svg/autwork-logo.svg";

export const Header: FC = () => {
  return (
    <AppBar>
      <Stack
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        borderBottom="1px solid #dbdbdb"
        p="0 10px"
        gap="20px"
      >
        <Box m={1}>
          <Logo />
        </Box>
        <Button color="secondary" variant="contained">
          Войти
        </Button>
      </Stack>
    </AppBar>
  );
};
