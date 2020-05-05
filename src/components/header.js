import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import Logo from "./logo"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;

  .logo {
    width: 50%;
  }

  .mainNav {
    width: 100%;
  }

`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <Logo className="logo" />
      <Navigation className="mainNav" />
  </StyledHeader>
) 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
