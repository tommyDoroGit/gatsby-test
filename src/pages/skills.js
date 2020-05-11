import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const Col = styled.div`
  width: 50%;
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Skills" />
    <Col>
      <h1>Skills</h1>
      <p>These are some of the things I've picked up over the years.</p>
    </Col>
    <Col>
      <p>This is a test</p>
    </Col>
  </Layout>
)

export default SecondPage
