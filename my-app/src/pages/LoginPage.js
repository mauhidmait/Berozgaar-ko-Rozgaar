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
} from "@mui/material";
import React from "react";
import blueGradient from "../assests/blueGradient.jpg";
import womenWithTab from "../assests/womenWithTab.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import "../pages/login-page.css";
export default function LoginPage() {
  const mainGrid = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    height: "100vh",
  };

  const rightSide = {
    backgroundImage: `url(${blueGradient})`,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const womenStyle = {
    width: "375px",
    height: "375px",
    padding: "1rem",
    background: `url(${womenWithTab}) no-repeat`,
    backgroundSize: "contain",
    position: "relative",
    borderRadius: "20px",
  };

  const leftSide = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e7eff9",
    backgroundImage: "linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)",
    width: "100%",
    height: "100vh",
  };

  const content = {
    padding: "1rem",
    width: "300px",
    height: "450px",
  };

  const textRightSide = {
    position: "absolute",
    width: "200px",
    height: "200px",
    fontSize: "1.25rem",
    fontFamily: "'Lumanosimo', 'cursive'",
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
                      style={{ backgroundColor: "#1976d2" }}
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
                  ></TextField>
                  <TextField
                    label="Password"
                    placeholder="Enter Password"
                    type="text"
                    fullWidth
                    required
                    variant="standard"
                    margin="normal"
                  ></TextField>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{ marginTop: "0.5rem" }}
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
                      <FacebookIcon style={{ color: "blue" }}></FacebookIcon>
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
