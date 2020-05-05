import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"


const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
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
