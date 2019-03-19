import React from 'react'
import styled, { keyframes } from 'styled-components'

import Subtext from './Subtext'
import FancyLink from './FancyLink'

import externalLink from '../assets/icons/external-link.svg'
import resume from '../assets/documents/Michael-Rascati-Resume.pdf'

const Container = styled.div`
  border: 2px solid #0c0c0c;
  padding: 1.5em;
  margin: 1.5em;
  margin-bottom: 0em;
`

const Name = styled.div`
  font-size: 1.5rem;

  @media only screen and (min-width: 1000px) {
    font-size: 2rem;
  }
`

const Social = styled.div`
  width: max-content;
  /* font-size: 1.75rem; */
`

const rotate = keyframes`
  from {
    transform: rotate(-90deg) translateX(0);
  }

  to {
    transform: rotate(-90deg) translateX(-15px);
  }
`

const ScrollHelper = styled.div`
  animation: ${rotate} 350ms ease-in-out infinite alternate;
  /* position: absolute; */
  display: none;
  /* right: -10px; */
  /* bottom: 100px; */

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

const MainGrid = () => (
  <Container>
    <Name>
      <h1>Michael Rascati</h1>
    </Name>

    <h2>
      Web developer and designer <br />
      // Boston
    </h2>

    <ul>
      <Subtext>Previously at</Subtext>
      <li>
        <Subtext>2018 - </Subtext>
        <a
          href="http://www.proglove.de/"
          className="flag-de"
          target="_blank"
          rel="noopener noreferrer"
        >
          ProGlove
        </a>
      </li>
      <li>
        <Subtext>2017 - </Subtext>
        <a
          href="https://tankdesign.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tank Design
        </a>
      </li>
    </ul>

    <Social>
      <FancyLink
        href="mailto:rascatimichael@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email me
      </FancyLink>
      <FancyLink href={resume} target="_blank" rel="noopener noreferrer">
        Download my resume
      </FancyLink>
      <FancyLink
        href="https://github.com/rascati"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
        <img src={externalLink} alt="external link icon" />
      </FancyLink>
      <FancyLink
        href="https://www.linkedin.com/in/rascati"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
        <img src={externalLink} alt="external link icon" />
      </FancyLink>
    </Social>

    <ScrollHelper>&#8592; scroll</ScrollHelper>
  </Container>
)

export default MainGrid
