import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNotification } from "../../context/NotificationProvider";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";

type LoginType = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { getError, getSuccess } = useNotification();

  // const [loginData, setLoginData] = useState<LoginType>({
  //   username: "",
  //   password: "",
  // });

  // const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoginData({ ...loginData, [e.target.name]: e.target.value });

  // };

  // const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
  //   e.preventDefault()

  //   LoginValidate.validate(loginData).then(()=>{
  //     getSuccess(JSON.stringify(loginData))
  //   }).catch((error)=>{
  //     getError(error.message)
  //   })

  //   console.log(loginData);

  // };

  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values));
    },
  });

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar Sesion
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <Stack direction="column" spacing={2}>
                <TextField
                  fullWidth
                  label="username"
                  sx={{ mt: 2, mb: 1.5 }}
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                  fullWidth
                  label="password"
                  sx={{ mt: 1.5, mb: 1.5 }}
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                  fullWidth
                  type="submit"
                  typeof="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 1.5 }}
                >
                  Iniciar Sesion
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
