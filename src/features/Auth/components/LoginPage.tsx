import { FC } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { ReactComponent as GoogleLogo } from "../../../../public/svg/google-logo.svg";

export const LoginPage: FC = () => {
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
            <IconButton>
              <GoogleLogo />
              Log in witch google
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};
