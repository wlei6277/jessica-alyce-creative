import React from "react"
import "./layout.css"
import { NavBar } from "components";

const anchors = ["About", "Projects", "Skills", "Experience", "Education", "Interests", "Contact"];
const Layout = ({ children }) => {
  return (
    <div id="layout">
      <NavBar anchors={anchors} />
      <main>{children}</main>
      <footer>
        <p>© William Leitch {new Date().getFullYear()}, Built with</p>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
