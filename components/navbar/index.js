/* eslint-disable @next/next/no-img-element */
import logo from "../../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../../constants/links"
import Image from "next/image"
import Link from "next/link"

const Navbar = ({ toggleSidebar }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link href="/">
          <a><Image src={logo} alt="logo" /></a>
        </Link>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
