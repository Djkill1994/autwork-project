import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../App";
import { AUTH_TOKEN_KEY } from "../../../common/constans/localStorage.ts";

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
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
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                localStorage.setItem(
                  AUTH_TOKEN_KEY,
                  credentialResponse.credential ?? "",
                );
                navigate(ROUTE_PATHS.TimesheetTable, { replace: true });
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};
