import React from "react"
import styled, { keyframes } from "styled-components"

import externalLink from "../assets/icons/external-link.svg"
import resume from "../assets/documents/Michael-Rascati-Resume.pdf"


const GridWrapper = styled.div`
  display: grid;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  width: calc(70vw - 1.5em);
  position: fixed;
  padding: 1.5em;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    border: 2px solid black;
    position: initial;
  }

  @media only screen and (max-height: 850px) { 
    padding: 1.5em;
  }
`

const SubgridName = styled.div`
  @media only screen and (min-width: 1000px) {
    font-size: 2.3rem;
  }
`

const SubgridIntro = styled.div`
  @media only screen and (max-height: 850px) { 
    display: flex;
    align-items: center;
  }
`

const SubgridSocial = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: max-content;
  
  @media only screen and (max-width: 1000px) {
    font-size: .9em; 
    max-width: 60vw;
  }
`

const SubgridWork = styled.div`
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
  position: absolute;
  right: -10px;
  bottom: 100px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

const MainGrid = () => (
  <GridWrapper>

    <SubgridName>
      <h1>Michael Rascati</h1>
    </SubgridName>

    <SubgridIntro>
      <h3>Web developer and designer <br />// Boston</h3>
    </SubgridIntro>

    <SubgridWork>
      <ul>
        <span>Previously at</span>
        <li>
          <span>2018 - </span>
          <a
            href="http://www.proglove.de/"
            className="flag-de" target="_blank" rel="noopener noreferrer">
            ProGlove</a>
        </li>
        <li>
          <span>2017 - </span>
          <a
            href="https://tankdesign.com/"
            target="_blank" rel="noopener noreferrer">
            Tank Design</a>
        </li>
      </ul>
    </SubgridWork>


    <SubgridSocial>
      <a
        href="mailto:rascatimichael@gmail.com" 
        className="button" target="_blank" rel="noopener noreferrer">
        Email me</a>
      <a
        href={resume}
        className="button" target="_blank" rel="noopener noreferrer">
        Download my resume</a>
      <a
        href="https://github.com/rascati"
        className="button button-external" target="_blank" rel="noopener noreferrer">
        GitHub
        <img src={externalLink} alt="external link icon"/></a>
      <a 
        href="https://www.linkedin.com/in/rascati"
        className="button button-external" target="_blank" rel="noopener noreferrer">
        LinkedIn
        <img src={externalLink} alt="external link icon"/></a>
    </SubgridSocial>


    <ScrollHelper>
      &#8592; scroll
    </ScrollHelper>
  </GridWrapper>
)

export default MainGrid
