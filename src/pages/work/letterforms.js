import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../../components/seo'

import yv from '../../assets/images/yv-01.svg'
import amperquote from '../../assets/images/amperquote.svg'
import qi from '../../assets/images/qi.svg'
import jseven from '../../assets/images/jseven.svg'
import uf from '../../assets/images/uf.svg'
import ampersands from '../../assets/images/ampersands.svg'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;

  @media only screen and (max-width: 1200px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-gap: 4em 2em;

  img {
    margin: 0 auto;
  }

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    img {
      min-width: 200px;
      margin: 1.5em 1em;
    }
  }
`

const Letterforms = () => (
  <div className="outline-container">
    <SEO title="Work | Letterforms" />
    <Link to="/">Home</Link>

    <h1>Letterforms</h1>

    <Wrapper>
      <div>
        <p>
          This project from Northeastern's Typography 1 course is to explore
          letterform geometry.
        </p>
        <p>
          Each form is made of two different glyphs from the same typeface, with
          parts of the glyphs removed to create a new form.
        </p>
        <p>
          These are great starting points for logo brainstorming. There's
          potential for some cool marks especially with more work messing around
          with stroke weight and pathing to add a bit more playfullness and
          movement to the shapes.
        </p>
      </div>

      <Images>
        <img src={yv} alt="letterform example" />
        <img src={amperquote} alt="letterform example" />
        <img src={qi} alt="letterform example" />
        <img src={jseven} alt="letterform example" />
        <img src={uf} alt="letterform example" />
        <img src={ampersands} alt="letterform example" />
      </Images>
    </Wrapper>
  </div>
)

export default Letterforms
