import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import Logo from "./logo"
import styled from "styled-components"

const HeaderStyles = styled.header`
  background-color: red;
  display: flex;
  flex-direction: row;

  .mainLogo {
    fill: #fff;
    width: 50%;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderStyles>
      <Logo className='mainLogo' />
      <Navigation className='mainMenu' />
  </HeaderStyles>
) 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
