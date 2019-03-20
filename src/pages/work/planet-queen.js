import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../../components/seo'
import planetQueenExample from '../../assets/images/planet-queen.png'

const Wrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  grid-template-columns: 1fr;
`

const PlanetQueen = () => (
  <div className="outline-container">
    <SEO title="Work | Planet Queen" />

    <Link to="/">Home</Link>

    <h1>Planet Queen</h1>
    <a href="http://planetqueen.org/" target="_blank" rel="noopener noreferrer">
      www.planetqueen.org/
    </a>
    <br />
    <br />

    <Wrapper>
      <div>
        <p>
          This wildlife conservation website is a JSON-driven project I worked
          on as a developer in my time at Tank Design.
        </p>
        <p>
          Making the hex grid design respond smoothly on differently sized
          devices was one of the largest challenges of the project. If I was
          starting the project over, I'd look for a more feature-complete hex
          grid JavaScript layout engine.
        </p>
        <p>
          The site features animal and environmental philanthropists, investors,
          and celebrities as a hub for discovery and education. The hexes are
          clickable with information within.
        </p>
      </div>
      <img
        src={planetQueenExample}
        alt="screenshot of the planet queen website"
      />
    </Wrapper>
  </div>
)

export default PlanetQueen
