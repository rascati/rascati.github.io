import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  padding: 1.5em;
`

const Title = styled.h3`
  font-size: 2.5rem;
`

const Description = styled.p`
  font-size: 1.75rem;
`

class Piece extends Component {
  render() {
    return (
      <Container>
        <span>{this.props.category}</span>
        <Title>
          <Link to={this.props.link}>{this.props.title}</Link>
        </Title>
        <Description>{this.props.description}</Description>
      </Container>
    )
  }
}

export default Piece
