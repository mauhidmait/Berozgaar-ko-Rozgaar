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
import PersonIcon from "@mui/icons-material/Person";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

import {
  leftSide,
  rightSide,
  content,
  womenStyle,
  textRightSide,
  mainGrid,
} from "./login_page_style";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const emailHandler = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const passwordHandler = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    setIsValidPassword(validatePassword(newPass));
  };

  const confirmPasswordHandler = (e) => {
    const cpass = e.target.value;
    setConfirmPassword(cpass);
    setIsValidConfirmPassword(validConfirmPassword(cpass));
  };

  const submitHandler = () => {
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validConfirmPassword = (cpass) => {
    return cpass === password;
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
                    <h3 style={{ marginTop: "1rem" }}>Register</h3>
                  </Grid>

                  <TextField
                    id="input-with-icon-textfield"
                    label="Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                    type="text"
                    fullWidth
                    required
                    variant="standard"
                    onChange={emailHandler}
                  />
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
                    type="password"
                    fullWidth
                    required
                    variant="standard"
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
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
                  <TextField
                    label="Confirm Password"
                    placeholder=""
                    type="password"
                    fullWidth
                    required
                    variant="standard"
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={confirmPasswordHandler}
                  ></TextField>
                  {!isValidConfirmPassword && (
                    <Typography
                      variant="caption"
                      display="block"
                      color={"#de1414"}
                      gutterBottom
                    >
                      Password doesnot matched
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
                    style={{
                      marginTop: "0.5rem",
                      backgroundColor: "#9181F4",
                    }}
                    onClick={submitHandler}
                  >
                    Register
                  </Button>
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
