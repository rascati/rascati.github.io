import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.span`
  font-size: .8rem;
  background-color: ${props => props.color };
  border-radius: 100px;
  padding: 4px 12px;
  margin: 0 10px 0 0;
  color: white;
  font-family: sans-serif;
`

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
