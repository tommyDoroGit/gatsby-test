import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  padding: 10px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
  width: 100%;
`

export default class Navigation extends React.Component {
  render() {
    return (
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/skills/">Skills</StyledLink>
        <StyledLink to="/projects/">Projects</StyledLink>
        <StyledLink to="/contact/">Contact</StyledLink>
      </Nav>
    )
  }
}
