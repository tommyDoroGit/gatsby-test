import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import Logo from "./logo"


const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Logo />
      <Navigation />
    </div>
  </header>
) 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
