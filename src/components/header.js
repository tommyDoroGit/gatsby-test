import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 10vh;

  .logo {
    width: 50%;
  }

  .mainNav {
    width: 100%;
  }
`

const Header = ({ siteTitle }) => <StyledHeader></StyledHeader>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
