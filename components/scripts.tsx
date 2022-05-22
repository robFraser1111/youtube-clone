import * as React from "react";
import Script from "next/script";

const loginScripts = () => {
  return (
    <>
      {/* Google 3P Authorization JavaScript library */}
      <Script id="gsiClient" src="https://accounts.google.com/gsi/client" strategy="beforeInteractive"></Script>
    </>
  );
};

export default loginScripts;
