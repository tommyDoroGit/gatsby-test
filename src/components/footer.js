import React from 'react'
import styled from "styled-components"

const FooterStyles = styled.footer`
    background-color: #ffffff; 
    padding: 20px 0;
`;

const Footer = () => (
    <FooterStyles>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterStyles>
    )

    export default Footer

