import React from 'react'

import SEO from '../components/seo'
import '../components/layout.css'

import MainGrid from '../components/MainGrid'
import PieceGrid from '../components/PieceGrid'

const IndexPage = () => (
  <div>
    <SEO
      title="Michael Rascati"
      keywords={[`michael`, `rascati`, `web`, `developer` ,`software engineer`, `full stack`]}
    />

    <MainGrid />

    <PieceGrid />
  </div>
)

export default IndexPage
