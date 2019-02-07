import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainGrid from "../components/MainGrid"
import PieceGrid from "../components/PieceGrid"
import Piece from "../components/Piece"
import Pill from "../components/Pill"

const IndexPage = () => (
  <Layout>
    <SEO title="Michael Rascati" keywords={[`michael`, `rascati`, `web`, `developer`]} />

    <MainGrid />

    <PieceGrid>

      <Piece 
        title="Letterforms"
        description="A study in typographic geometry combining glyphs and creating novel shapes"
        link="../work/letterforms">
        <Pill color="SkyBlue">Design</Pill>
      </Piece>

      <Piece 
        title="FedEx Icon System"
        description="A responsive SVG icon system for FedEx"
        link="../work/fedex">
        <Pill color="LightCoral">Development</Pill>
      </Piece>

      <Piece 
        title="J!Mate Jeopardy Companion App"
        description="A companion app for Jeopardy targeted at elders"
        link="../work/jmate">
        <Pill color="SkyBlue">Design</Pill>
        <Pill color="MediumSeaGreen">UX</Pill>
      </Piece>

      <Piece 
        title="Planet Queen"
        description="A JSON-driven wildlife conservation website"
        link="../work/planet-queen">
        <Pill color="LightCoral">Development</Pill>
      </Piece>

      <Piece 
        title="TEDxCambridge"
        description="An animated presentation page for one of the largest TEDx events in the country"
        link="../work/tedx">
        <Pill color="LightCoral">Development</Pill>
      </Piece>

      <Piece 
        title="Gorgiality"
        description="A showcase website for a photography exhibition and book sale by Erez Sabag"
        link="../work/gorgiality">
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

    </PieceGrid>

  </Layout>
)

export default IndexPage
