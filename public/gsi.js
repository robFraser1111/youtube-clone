function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
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
