import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
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
      <Piece title="Piece #1">
        Portfolio Piece
        <Pill color="LightCoral">Development</Pill>
      </Piece>

      <Piece title="Piece #1">
        Portfolio Piece
        <Pill color="SkyBlue">Design</Pill>
        <Pill color="MediumSeaGreen">UX</Pill>
      </Piece>

      <Piece title="Piece #1">
        Portfolio Piece
        <Pill color="LightCoral">Development</Pill>
      </Piece>

      <Piece title="Piece #1">
        Portfolio Piece
        <Pill color="LightCoral">Development</Pill>
        <Pill color="SkyBlue">Design</Pill>
        <Pill color="MediumSeaGreen">UX</Pill>
      </Piece>

      <Piece title="Piece #1">
        Portfolio Piece
        <Pill color="SkyBlue">Design</Pill>
      </Piece>

    </PieceGrid>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      {/* <Image /> */}
    {/* </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
