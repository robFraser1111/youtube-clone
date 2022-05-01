import Nav from "./nav";
import LoginScripts from "./loginScripts";
export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <LoginScripts />
    </>
  );
}
