import React from 'react'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5em;
  margin-top: 0;
  border-left: 2px solid black;
  /* width: calc(30vw - 1.5em); */
  /* margin-left: auto; */
  @media only screen and (max-width: 750px) {
    display: flex;
    flex-flow: column nowrap;
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    /* height: 100%; */
    /* margin: 0; */
    /* border-left: 2px solid black; */
    /* border-right: 2px solid black; */
    /* border-bottom: none; */
    /* position: initial; */
  }
`

const PieceGrid = props => <GridWrapper>{props.children}</GridWrapper>

export default PieceGrid
