import { Box, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../../common/constans/regex";
import { LoadingButton } from "@mui/lab";
import { FormInputPassword } from "../../../common/components/FormInputPassword";
// import { useTranslation } from "react-i18next";
// import { useRegistrationMutation } from "../api/auth.api";
// import { UploadImages } from "../../../common/components/UploadImages";

export interface IRegistrationForm {
  userName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  avatarSrc: string;
}

export const RegistrationForm: FC = () => {
  const { register } = useForm<IRegistrationForm>();

  return (
    <Box component="form" noValidate>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12} width="100%">
          <TextField
            {...register("email", { required: true, pattern: EMAIL_REGEX })}
            // error={!!errors.email}
            // helperText={!!errors.email && "features.Auth.form.errors.email"}
            size="small"
            autoComplete="email"
            label="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("userName", { required: true })}
            // error={!!errors.userName}
            // helperText={!!errors.userName && "features.Auth.form.errors.name"}
            size="small"
            label="first name"
            autoComplete="fullName"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("userName", { required: true })}
            // error={!!errors.userName}
            // helperText={!!errors.userName && "features.Auth.form.errors.name"}
            size="small"
            label="last name"
            autoComplete="fullName"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <FormInputPassword
            id="password"
            // error={errors.password && "features.Auth.form.errors.password"}
            label="password"
            inputProps={register("password", {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <FormInputPassword
            id="confirmPassword"
            // error={
            //   errors.passwordConfirm &&
            //   "features.Auth.form.errors.confirmPassword"
            // }
            label="confirmPassword"
            inputProps={register("passwordConfirm", {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <LoadingButton
            type="submit"
            color="secondary"
            variant="contained"
            sx={{ mt: 3 }}
            fullWidth
          >
            signUp
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};
