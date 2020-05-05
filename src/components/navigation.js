import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
        padding: 10px;
        text-decoration: none;
    `;

const DesktopNav = styled.nav`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    width:50%;
    align-self: center;
`;

export default class Navigation extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {display: none}
    }
    */

    render() {

        return (
        <DesktopNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/skills/">Skills</StyledLink>
            <StyledLink to="/projects/">Projects</StyledLink>
        </DesktopNav>
        )
    }
}