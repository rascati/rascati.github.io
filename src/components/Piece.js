import React from "react"
// import { Link } from "gatsby"
import styled from 'styled-components'

// import Image from "./image"
// import SEO from "./seo"

const Container = styled.div`
  /* border: 2px solid black; */
  /* border-top: 1px solid black; */
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  padding: 1.5em;

`

const Piece = (props) => (
  <Container>
    <h2>{props.title}</h2>
    {props.children}
  </Container>
  
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

export default Piece
