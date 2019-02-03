import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

// import Layout from "./layout"
// import Image from "./image"
// import SEO from "./seo"


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 2px solid black;
  padding: 1.5em;
  /* margin: 1.5em; */
  /* padding: 1em; */

  & > div {
    @media only screen and (max-width: 800px) {
      grid-column: 1;
    }
  }

  @media only screen and (min-width: 800px + 1) and (max-width: 1200px - 1) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1em;
  }
`

const SubgridIntro = styled.div`
  grid-column: 3 / 5;
  grid-row: 1 / 2;  

  @media only screen and (min-width: 800px + 1) and (max-width: 1200px - 1) {
    grid-column: 2 / span 2;    
  }
`

const SubgridName = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
`

const SubgridSocial = styled.div`
  grid-column: 4 / 5;
  grid-row: 4 / 5;
  display: flex;
  flex-flow: column nowrap;
`

const SubgridWork = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  
  @media only screen and (min-width: 800px + 1) and (max-width: 1200px - 1) {
    grid-column: 2 / span 2;    
  }
`



const MainGrid = () => (
  <GridWrapper>

    <SubgridIntro>
      I&rsquo;m a web developer and designer from <a href="http://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">Northeastern University</a> studying Computer Science + Interactive Media.
    </SubgridIntro>
    
    <SubgridName>
      <h1>Michael Rascati</h1>
    </SubgridName>

    <SubgridSocial>
      <a href="mailto:rascatimichael@gmail.com" className="button" target="_blank" rel="noopener noreferrer">Email me</a>
      <a href="documents/Michael-Rascati-Resume.pdf" className="button" target="_blank" rel="noopener noreferrer">Download my resume</a>
      <a href="https://github.com/rascati" className="button button-external" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/rascati" className="button button-external" target="_blank" rel="noopener noreferrer">LinkedIn </a>
    </SubgridSocial>

    <SubgridWork>
      <ul>
        <span>Previously at</span>
        <li><span>2018 - </span> <a href="http://www.proglove.de/" target="_blank" rel="noopener noreferrer" className="flag-de">ProGlove</a></li>
        <li><span>2017 - </span> <a href="https://tankdesign.com/" target="_blank" rel="noopener noreferrer">Tank Design</a></li>
      </ul>
    </SubgridWork>

  </GridWrapper>
  // <Layout>
  //   <SEO title="Michael Rascati" keywords={[`michael`, `rascati`, `web`, `developer`]} />
  //   <h1>Hi people</h1>`
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
)

export default MainGrid
