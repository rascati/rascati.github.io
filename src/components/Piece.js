import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Subtext from './Subtext'

const Container = styled.div`
  border-bottom: 2px solid #0c0c0c;
  border-right: 2px solid #0c0c0c;
  padding: 1.5em;
`

class Piece extends Component {
  render() {
    return (
      <Container>
        <Subtext>{this.props.category}</Subtext>
        <h2>
          <Link to={this.props.link}>{this.props.title}</Link>
        </h2>
        <p>{this.props.description}</p>
      </Container>
    )
  }
}

export default Piece
