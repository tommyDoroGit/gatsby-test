import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

import PageTitle from "../components/title"

const Col = styled.div`
  width: 50%;
`;

const contactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Col>
      <PageTitle title="Contact" />
    </Col>
    <Col>
      <p>This is a test</p>
    </Col>
  </Layout>
)

export default contactPage