import React, { Component } from 'react'
import styled from 'styled-components'

import Piece from '../components/Piece'
import Pill from '../components/Pill'

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

// const PieceGrid = props => <GridWrapper>{props.children}</GridWrapper>

class PieceGrid extends Component {
  render() {
    return (
      <GridWrapper>
        <Piece
          title="Letterforms"
          description="A study in typographic geometry combining glyphs and creating novel shapes"
          link="../work/letterforms"
        >
          <Pill color="SkyBlue">Design</Pill>
        </Piece>

        <Piece
          title="FedEx Icon System"
          description="A responsive SVG icon system for FedEx"
          link="../work/fedex"
        >
          <Pill color="LightCoral">Development</Pill>
        </Piece>

        <Piece
          title="J!Mate Jeopardy Companion App"
          description="A companion app for Jeopardy targeted at elders"
          link="../work/jmate"
        >
          <Pill color="SkyBlue">Design</Pill>
          <Pill color="MediumSeaGreen">UX</Pill>
        </Piece>

        <Piece
          title="Planet Queen"
          description="A JSON-driven wildlife conservation website"
          link="../work/planet-queen"
        >
          <Pill color="LightCoral">Development</Pill>
        </Piece>

        <Piece
          title="TEDxCambridge"
          description="An animated presentation page for one of the largest TEDx events in the country"
          link="../work/tedx"
        >
          <Pill color="LightCoral">Development</Pill>
        </Piece>

        <Piece
          title="Gorgiality"
          description="A showcase website for a photography exhibition and book sale by Erez Sabag"
          link="../work/gorgiality"
        >
          <Pill color="LightCoral">Development</Pill>
        </Piece>

        {/* <Piece 
        title="Venmo Case Study"
        description="Looking at improving the main workflows of the Venmo Android app - find a problematic mobile interface and
        redesign it to improve the user experience."
        link="">
        <Pill color="SkyBlue">Design</Pill>
        <Pill color="MediumSeaGreen">UX</Pill>
      </Piece> */}

        {/* <Piece 
        title="NUPT Logos"
        description="A new logo system for Northeastern's Personal Training department"
        link="../work/nupt">
        <Pill color="SkyBlue">Design</Pill>
      </Piece> */}
      </GridWrapper>
    )
  }
}

export default PieceGrid
