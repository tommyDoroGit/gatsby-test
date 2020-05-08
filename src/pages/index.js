import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {welcome: ""};
    this.onLoad = this.onLoad.bind(this);
  }

  onLoad() {
    this.setState({
      welcome: this.props.welcome
    });
  }

  render() {
    return(
      <>
      <p>{this.state.welcome}</p> 
      </> 
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero welcome="How cool"/>  
  </Layout>
)

export default IndexPage
