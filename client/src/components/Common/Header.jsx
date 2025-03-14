import TopBar from "../Layout/TopBar";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="border-b border-gray-200">
      <TopBar />
      <NavBar />
    </div>
  )
}

export default Header;