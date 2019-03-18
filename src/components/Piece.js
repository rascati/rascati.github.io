import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  padding: 1.5em;

  @media only screen and (max-width: 1000px) {
    /* border-top: none;  */
    /* border-bottom: 2px solid black; */
  }
`

const Title = styled.h3`
  /* font-size: 2.5rem; */
`

const Piece = props => (
  <Container>
    {props.children}
    <Title>
      <Link to={props.link}>{props.title}</Link>
    </Title>
    <p>{props.description}</p>
  </Container>
)

export default Piece
