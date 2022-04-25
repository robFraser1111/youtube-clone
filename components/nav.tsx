import Image from "next/image";
import Search from "./search";
import logo from "../public/yt_logo_rgb_dark.png"

const Nav: React.FC = () => {
  return (
      <>
          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
          <Image src={logo} width={120} height={27} alt="YouTube logo"/>
          <Search />
          <p>Login</p>
      </>
  );
};

export default Nav;
