import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {motion} from "framer-motion";



class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {welcome: ""};
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.onLoad(),
      1000
    );
  }

  onLoad() {
    this.setState({
      welcome: "Hello I'm a Front End Web Developer from Perth, Western Australia."
    });
  }

  render() {
    return(
      <>
      <motion.p 
      animate={{x:100}}
      transition={{ ease: "easeOut", duration: 2 }}
      >
        {this.state.welcome}
      </motion.p> 
      </> 
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>  
  </Layout>
)

export default IndexPage
