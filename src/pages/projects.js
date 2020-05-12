import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

import PageTitle from "../components/title"

const Col = styled.div`
  width: 50%;
`; 

const ThirdPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Col>
      <PageTitle title="Projects" />
      
    </Col>
    <Col>
      <img src="https://source.unsplash.com/random/1920x800" alt="" />
    </Col>
  </Layout>
)

export default ThirdPage
