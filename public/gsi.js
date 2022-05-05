function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);

  // to decode the credential response.
  // const responsePayload = decodeJwtResponse(response.credential);

  // console.log("ID: " + responsePayload.sub);
  // console.log("Full Name: " + responsePayload.name);
  // console.log("Given Name: " + responsePayload.given_name);
  // console.log("Family Name: " + responsePayload.family_name);
  // console.log("Image URL: " + responsePayload.picture);
  // console.log("Email: " + responsePayload.email);
}
const onload = function () {
  google.accounts.id.initialize({
    client_id:
      "1054045062799-s66i1vgtcg29cqlevk17i6lgm1htc9e4.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};

onload();
