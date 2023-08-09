import { FC } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../../common/constans/regex";
import { FormInputPassword } from "../../../common/components/FormInputPassword";

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<ILoginForm>();

  return (
    <Box component="form" noValidate>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item sm={12} width="100%">
          <TextField
            {...register("email", { required: true, pattern: EMAIL_REGEX })}
            error={!!errors.email}
            helperText={!!errors.email && "email"}
            size="small"
            autoComplete="email"
            fullWidth
            label="email"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputPassword
            id="password"
            error={errors.password && "password"}
            label="password"
            inputProps={register("password", {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <LoadingButton
            loadingPosition="center"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 3 }}
            type="submit"
          >
            Войти
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};
