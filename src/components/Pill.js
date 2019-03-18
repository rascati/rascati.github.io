import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.span`
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 100px;
  padding: 4px 12px;
  margin: 0 10px 0 0;
  color: white;
  /* font-family: monospaced; */
`

class Pill extends Component {
  render() {
    return <Container color={this.props.color}>{this.props.children}</Container>
  }
}

export default Pill
