import React from 'react'

import SEO from '../components/seo'

import MainGrid from '../components/MainGrid'
import PieceGrid from '../components/PieceGrid'

const IndexPage = () => (
  <div className="background">
    <SEO
      title="Michael Rascati"
      keywords={[`michael`, `rascati`, `web`, `developer`]}
    />

    <MainGrid />

    <PieceGrid />
  </div>
)

export default IndexPage
