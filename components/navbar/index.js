/* eslint-disable @next/next/no-img-element */
import logo from "../../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../../constants/links"
import Image from "next/image"

const Navbar = ({ toggleSidebar }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Image src={logo} alt="logo" />
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
