import React from "react"
import styled from "styled-components"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-left: 2px solid black;


  @media only screen and (max-width: 800px) {
    grid-template-columns: auto;
  }

  /* @media only screen and (min-width: 800px + 1) and (max-width: 1200px - 1) {
    grid-template-columns: repeat(3, 1fr);
  } */
`

const PieceGrid = (props) => (
  <GridWrapper>
    {props.children}
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

export default PieceGrid
