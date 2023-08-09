import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../App";
import { LoginForm } from "./LoginForm.tsx";
import { ReactComponent as GoogleLogo } from "../../../../public/svg/google-logo.svg";

export const LoginPage: FC = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <img alt="img" src="../../../../public/svg/img-work.png" />
      </Box>
      <Box m="0 auto">
        <Box>
          <Stack mb="20px" alignItems="center">
            <LockOutlined
              sx={{ width: "36px", height: "36px", margin: "10px" }}
            />
            <Typography fontSize="1.5rem">Войти</Typography>
          </Stack>
          <Stack
            alignItems="stretch"
            border="1px solid #dbdbdb"
            borderRadius="10px"
            padding="30px"
          >
            <LoginForm />
            <Stack flexDirection="row-reverse" justifyContent="space-between">
              <Link
                to={ROUTE_PATHS.Registration}
                replace={true}
                style={{ color: "#009e4f", textDecoration: "inherit" }}
              >
                <Typography fontSize="14px" fontWeight="bolder" mt="20px">
                  Войти
                </Typography>
              </Link>
              <Link
                to={ROUTE_PATHS.Registration}
                replace={true}
                style={{ color: "#009e4f", textDecoration: "inherit" }}
              >
                <Stack flexDirection="row" alignItems="flex-end" gap={1}>
                  <GoogleLogo />
                  <Typography fontSize="14px" fontWeight="bolder" mt="20px">
                    Log in to google
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};
