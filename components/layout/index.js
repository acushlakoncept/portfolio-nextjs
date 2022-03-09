

import { useState } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import Sidebar from "../sidebar";


const BaseLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      { children }
      <Footer />
    </>
  )
}

export default BaseLayout;