import * as React from "react";

const jose = require("jose");

const Login = () => {
  // Google login script
  React.useEffect(() => {
    function handleCredentialResponse(response: any) {
      console.log("Encoded JWT ID token: " + response.credential);

      const responsePayload = jose.decodeJwt(response.credential);

      console.log("ID: " + responsePayload.sub);
      console.log("Full Name: " + responsePayload.name);
      console.log("Given Name: " + responsePayload.given_name);
      console.log("Family Name: " + responsePayload.family_name);
      console.log("Image URL: " + responsePayload.picture);
      console.log("Email: " + responsePayload.email);
    }
    const onload = function () {
      google.accounts.id.initialize({
        client_id: "1054045062799-s66i1vgtcg29cqlevk17i6lgm1htc9e4.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(document.getElementById("buttonDiv"), { theme: "outline", size: "large" });
      google.accounts.id.prompt();
    };

    onload();
  }, []);

  return <div id="buttonDiv"></div>;
};

export default Login;
