import React, { Component } from 'react'
import styled from 'styled-components'

import Piece from '../components/Piece'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5em;
  margin-top: 0;
  border-left: 2px solid #0c0c0c;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-flow: column nowrap;
  }
`

class PieceGrid extends Component {
  render() {
    return (
      <GridWrapper>
        <Piece
          title="FedEx Icon System"
          description="A responsive SVG icon system for FedEx"
          link="../work/fedex"
          category="Development"
        />

        <Piece
          title="Letterforms"
          description="A study in typographic geometry combining glyphs and creating novel shapes"
          link="../work/letterforms"
          category="Design"
        />

        <Piece
          title="Planet Queen"
          description="A JSON-driven wildlife conservation website"
          link="../work/planet-queen"
          category="Development"
        />

        <Piece
          title="J!Mate Jeopardy Companion App"
          description="A companion app for Jeopardy targeted at elders"
          link="../work/jmate"
          category="Design, UX"
        />

        <Piece
          title="TEDxCambridge"
          description="An animated presentation page for one of the largest TEDx events in the country"
          link="../work/tedx"
          category="Development"
        />

        <Piece
          title="Gorgiality"
          description="A showcase website for a photography exhibition and book sale by Erez Sabag"
          link="../work/gorgiality"
          category="Development"
        />

        {/* <Piece 
        title="Venmo Case Study"
        description="Looking at improving the main workflows of the Venmo Android app - find a problematic mobile interface and
        redesign it to improve the user experience."
        link="../work/venmo"
        category="Design, UX" /> */}

        {/* <Piece 
        title="NUPT Logos"
        description="A new logo system for Northeastern's Personal Training department"
        link="../work/nupt"
        category="Design" /> */}
      </GridWrapper>
    )
  }
}

export default PieceGrid
