import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
        padding: 10px;
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
        <div>
        
        <StyledLink to="/skills/">Skills</StyledLink>
        <StyledLink to="/projects/">Projects</StyledLink>
        
        </div>
        )
    }
}