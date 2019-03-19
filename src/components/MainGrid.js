import React from 'react'
import styled, { keyframes } from 'styled-components'

import Subtext from './Subtext'
import FancyLink from './FancyLink'

import externalLink from '../assets/icons/external-link.svg'
import resume from '../assets/documents/Michael-Rascati-Resume.pdf'

const Name = styled.div`
  font-size: 1.5rem;

  @media only screen and (min-width: 1000px) {
    font-size: 2rem;
  }
`

const Social = styled.div`
  width: max-content;
`

const FlexRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 3rem;
`

const MainGrid = () => (
  <div className="outline-container">
    <Name>
      <h1>Michael Rascati</h1>
    </Name>

    <h2>
      Web developer and designer <br />
      // Boston
    </h2>

    <FlexRow>
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
    </FlexRow>
  </div>
)

export default MainGrid
