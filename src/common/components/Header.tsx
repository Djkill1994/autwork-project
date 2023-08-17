import { FC } from "react";
import { AppBar, Box, Button, Stack } from "@mui/material";
import { ReactComponent as Logo } from "../../../public/svg/autwork-logo.svg";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
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
        <Stack flexDirection="row" gap={1}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => navigate(ROUTE_PATHS.Login, { replace: true })}
          >
            Войти
          </Button>
          {/*<Button*/}
          {/*  color="secondary"*/}
          {/*  variant="contained"*/}
          {/*  onClick={() =>*/}
          {/*    navigate(ROUTE_PATHS.Registration, { replace: true })*/}
          {/*  }*/}
          {/*>*/}
          {/*  Регистрация*/}
          {/*</Button>*/}
          <Button
            color="secondary"
            variant="contained"
            onClick={() =>
              navigate(ROUTE_PATHS.TimesheetTable, { replace: true })
            }
          >
            Table
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
};
