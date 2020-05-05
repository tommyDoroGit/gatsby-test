/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {ThemeProvider, createGlobalStyle} from "styled-components"
import storage from 'local-storage-fallback';


import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
  }
`;

function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : {mode: 'light'}
}

const Layout = ({ children }) => {

  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(
    () => {
    storage.setItem(
      "theme", JSON.stringify(theme)
      )
  }, 
  [theme]
  );

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <button 
      onClick={e=>
        setTheme(
          theme.mode === 'dark' 
          ? {mode: 'light'} 
          : {mode: 'dark'})
      }>Toggle Mode</button>
      <div>
        <main>{children}</main> 
      </div>
      <Footer /> 
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
