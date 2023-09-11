import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AUTH_TOKEN_KEY } from "../../../common/constans/localStorage.ts";

export const LoginPage: FC = () => {
  // const navigate = useNavigate();

  const responseGoogle = (response: any) => {
    //console.log(response);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(userObject.aud));
    // const { name, sub, picture } = userObject;
    // const doc = {
    //   _id: sub,
    //   _type: "user",
    //   userName: name,
    //   image: picture,
    // };
  };

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
              onSuccess={responseGoogle}
              onError={() => {
                console.log("Login Failed");
              }}
              // cookiePolicy="single_host_origin"
            />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};
