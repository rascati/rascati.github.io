
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
`

const PlanetQueen = () => (
  <Layout border>
    <SEO title="Work | Planet Queen" />

    <Link to="/">Home</Link>

    <h1>Planet Queen</h1>
    <a
      href="http://planetqueen.org/" 
      target="_blank" rel="noopener noreferrer">
      www.planetqueen.org/</a>
      <br />

    <Wrapper>
      <div>
        <p>This wildlife conservation website is a JSON-driven project I worked on as a developer in my time at Tank Design.</p>
        <p>Making this hex grid design respond smoothly on different size devices was one of the largest challenges of the project.</p>
      </div>
    </Wrapper>

  </Layout>
)

export default PlanetQueen
