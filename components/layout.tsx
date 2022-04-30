import Nav from "./nav";
import Script from "next/script";

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Script
        src="https://accounts.google.com/gsi/client"
        async
        defer
        strategy="lazyOnload"
      ></Script>
      <Script id="gsi" strategy="lazyOnload">
        {`function handleCredentialResponse(response) {
            console.log("Encoded JWT ID token: " + response.credential);
          }
          window.onload = function () {
            google.accounts.id.initialize({
              client_id: "${process.env.CLIENT_ID}",
              callback: handleCredentialResponse,
            });
            google.accounts.id.renderButton(
              document.getElementById("buttonDiv"),
              { theme: "outline", size: "large" } // customization attributes
            );
            google.accounts.id.prompt(); // also display the One Tap dialog
          };`}
      </Script>
    </>
  );
}
