import * as React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { styled, alpha } from "@mui/material/styles";

// Not currently decoding JWT tokens
// const jose = require("jose");

const StyledLogin = styled("button")(({ theme }) => ({
  width: "100%",
  minWidth: "100px",
  height: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  border: `2px solid ${alpha(theme.palette.secondary.main, 0.7)}`,
  color: alpha(theme.palette.secondary.main, 0.7),
  cursor: "pointer",
  transition: "0.2s",
  "&:hover, &:focus": {
    border: `2px solid ${alpha(theme.palette.secondary.main, 1)}`,
    color: alpha(theme.palette.secondary.main, 1),
  },
}));

const Login = () => {
  const [profilePic, setProfilePic] = React.useState(undefined);
  const [loggedIn, setLoggedIn] = React.useState(false);

  // Login using Google Identity Services JavaScript SDK
  const loginHandler = () => {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: "1054045062799-s66i1vgtcg29cqlevk17i6lgm1htc9e4.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/youtube.force-ssl",
      callback: (response: any) => {
        localStorage.setItem("access_token", JSON.stringify(response?.access_token));
        console.log(response);
        console.log(response?.access_token);
      },
    });
    client.requestAccessToken();
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    google.accounts.oauth2.revoke(localStorage.getItem("access_token"));
    setLoggedIn(false);
  };
  return (
    <>
      <StyledLogin onClick={loggedIn ? logoutHandler : loginHandler}>
        <AccountCircleOutlinedIcon sx={{ marginRight: "10px" }} />
        <h4>{loggedIn ? "Log out" : "Log in"}</h4>
      </StyledLogin>
    </>
  );
};

export default Login;
