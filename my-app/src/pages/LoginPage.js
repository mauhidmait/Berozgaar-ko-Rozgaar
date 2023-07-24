import {
  Grid,
  Box,
  Paper,
  TextField,
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";

import {
  leftSide,
  rightSide,
  content,
  womenStyle,
  textRightSide,
  mainGrid,
} from "./login_page_style";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const emailHandler = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const passwordHandler = (e) => {
    const newPass = e.target.value;
    setEmail(newPass);
    setIsValidPassword(validatePassword(newPass));
  };

  const submitHandler = () => {
    console.log(email + " " + password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Grid style={leftSide}>
              <Paper style={content} elevation={3}>
                <Grid>
                  <Grid align="center" marginTop={2}>
                    <Avatar
                      marginBottom={2}
                      style={{ backgroundColor: "#9181F4" }}
                    ></Avatar>
                    <h3 style={{ marginTop: "1rem" }}>LOGIN</h3>
                  </Grid>
                  <TextField
                    label="Username"
                    placeholder="Enter Username"
                    type="text"
                    fullWidth
                    required
                    variant="standard"
                    onChange={emailHandler}
                  ></TextField>
                  {!isValidEmail && (
                    <Typography
                      variant="caption"
                      display="block"
                      color={"#de1414"}
                      gutterBottom
                    >
                      Please enter a valid email address.
                    </Typography>
                  )}
                  <TextField
                    label="Password"
                    placeholder="Enter Password"
                    type="text"
                    fullWidth
                    required
                    variant="standard"
                    margin="normal"
                    onChange={passwordHandler}
                  ></TextField>
                  {!isValidPassword && (
                    <Typography
                      variant="caption"
                      display="block"
                      color={"#de1414"}
                      gutterBottom
                    >
                      Password must be at least 8 characters and contain one
                      uppercase letter, one symbol, and one digit.
                    </Typography>
                  )}
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{ marginTop: "0.5rem", backgroundColor: "#9181F4" }}
                    onClick={submitHandler}
                  >
                    Sign in
                  </Button>
                  <Grid marginTop={1}>
                    <h5 align="center">Login with others</h5>

                    <Stack
                      marginTop={1}
                      direction="row"
                      style={{ display: "flex", justifyContent: "center" }}
                      spacing={2}
                    >
                      <GoogleIcon style={{ color: "red" }}></GoogleIcon>oogle
                      <FacebookIcon style={{ color: "#9181F4" }}></FacebookIcon>
                      acebook
                    </Stack>
                  </Grid>
                  <Grid container marginTop={2}>
                    <Grid item xs={12}>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item xs={12} marginTop={1}>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Container style={rightSide}>
              <Container style={womenStyle}>
                <Container style={textRightSide}>
                  Very good jobs are waiting for you Login Now!!!
                </Container>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
