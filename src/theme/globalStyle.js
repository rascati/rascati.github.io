import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700');


  html {
    font-family: 'Inconsolata', monospace;
    font-size: 24px;
    line-height: 1.8em;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-size: 24px 24px;
    background-image: radial-gradient(circle, #b0b0b0 1px, #fcfcfc 1px);

    @media only screen and (max-width: 1200px) {
      font-size: 20px;
    }
  }

  body {
    border: 2px solid black;
  padding: 1.5em;
  margin: 1.5em;
  margin-bottom: 0em;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }


  a {
    color: inherit;

    &:hover {
      color: white;
      background: black;
    }
  }

  .flag-de:hover {
    color: white;
    background: linear-gradient(
      to bottom,
      black,
      black 33%,
      #dd0000 33%,
      #dd0000 66%,
      #ffce00 66%,
      #ffce00
    );
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: initial;
  }

  ul, li {
    list-style: none;
  }

  .border {
    border: 2px solid hsla(0, 0%, 0%, 0.8);
    padding: 1.5em;
    margin: 1.5em;
  }
`

export const theme = {
  softblack: '#00CCCC'
}

export default GlobalStyle
