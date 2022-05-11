import * as React from "react";
import Script from "next/script";

const loginScripts = () => {
  return (
    <>
      <Script id="gsiClient" src="https://accounts.google.com/gsi/client" strategy="beforeInteractive"></Script>
    </>
  );
};

export default loginScripts;
