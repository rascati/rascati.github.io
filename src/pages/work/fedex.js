import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import VideoContainer from "../../components/VideoContainer"

const Wrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  } 

  grid-template-columns: 1fr;
`

const FedEx = () => (
  <Layout border>
    <SEO title="Work | FedEx" />
    <Link to="/">Home</Link>

    <h1>FedEx Icon System</h1>

    <Wrapper>
    
      <div>
        <p>I worked on this project for FedEx internal developers while at Tank Design.</p> 
        <p>
          This is a responsive SVG icon system where the icon pathing updates based on the padding of the parent element.
          Scalable iconography should be part of any good design system, and this implementation is a way to ensure the icons are legible and meaningful at all sizes.
        </p>
        <p>
          Developers can easily view all of the icons in each size and color, as well as download the files and copy the embed code directly.
        </p>
      </div>

      <VideoContainer>
        <iframe title="fedex"
          src="https://www.youtube.com/embed/FmRLI0ocy7M?rel=0"
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </VideoContainer>

    </Wrapper>
  </Layout>
)

export default FedEx
