import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../../components/seo'
import VideoContainer from '../../components/VideoContainer'

const Wrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  grid-template-columns: 1fr;
`

const TEDx = () => (
  <div className="outline-container">
    <SEO title="Work | TEDxCambridge" />
    <Link to="/">Home</Link>

    <h1>TEDxCambridge</h1>

    <a
      href="http://www.tedxcambridge.com/our-story/"
      target="_blank"
      rel="noopener noreferrer"
    >
      www.tedxcambridge.com/our-story/
    </a>

    <br />

    <Wrapper>
      <div>
        <p>
          This is a heavily animated "About Us" presentation page I built while
          at Tank Design for one of the largest TEDx events in the country.
        </p>
      </div>

      <VideoContainer>
        <iframe
          title="tedx"
          src="https://www.youtube.com/embed/uVr0obB8bDY?rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </Wrapper>
  </div>
)

export default TEDx
