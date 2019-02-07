import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  border-top: 2px solid black;
  padding: 1.5em;

  @media only screen and (max-width: 1000px) {
    border-top: none; 
    border-bottom: 2px solid black;
  }
`

const Piece = (props) => (
  <Container>
    {props.children}
    <h3>
      <Link to={props.link}>
        {props.title}
      </Link>
    </h3>
    <p>{props.description}</p>
  </Container>
)

export default Piece
