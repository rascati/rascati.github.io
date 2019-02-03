import React, { Component } from 'react'
// import { Link } from "gatsby"
import styled from "styled-components"

// import Layout from "./layout"
// import Image from "./image"
// import SEO from "./seo"

const Container = styled.span`
  font-size: .8rem;
  background-color: ${props => props.color };
  border-radius: 100px;
  padding: 4px 12px;
  margin: 0 3px;
  color: white;
  font-family: sans-serif;
`

// const Pill = (props) => (
//   <Container>
//     {props.children}
//   </Container>
// )

class Pill extends Component {
  render() {
    return (
      <Container color={this.props.color}>
        {this.props.children}
      </Container>
    )
  }
}

export default Pill
