import Nav from "./nav";
import Scripts from "./scripts";
export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      {children}
      <Scripts />
    </>
  );
}
