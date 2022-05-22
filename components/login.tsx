import * as React from "react";

const jose = require("jose");

const Login = () => {
  // Google login script

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
  };

  return (
    <>
      {/* <div id="buttonDiv"></div> */}
      <button onClick={loginHandler}>Log into YouTube</button>
    </>
  );
};

export default Login;
