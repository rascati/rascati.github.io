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

const Gorgiality = () => (
  <div className="outline-container">
    <SEO title="Work | Gorgiality" />

    <Link to="/">Home</Link>

    <h1>Gorgiality</h1>
    <a
      href="http://www.gorgiality.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      www.gorgiality.com
    </a>
    <br />

    <Wrapper>
      <div>
        <p>
          This is a showcase website for a photography exhibition and book sale
          by Erez Sabag.
        </p>
        <p>
          I built this small website at Tank Design with Angular, the
          Instafeed.js library to pull from the client's Instagram feed, and an
          integrated Square online store.
        </p>
      </div>

      <VideoContainer>
        <iframe
          title="gorgiality"
          src="https://www.youtube.com/embed/c_aOIIMkPXM?rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </Wrapper>
  </div>
)

export default Gorgiality
