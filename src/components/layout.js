import React, { Component } from "react"
import styled from "styled-components"

import "./layout.css"

const Outline = styled.div`
  padding: 1.5em;
`

const MainWrapper = styled.div`
  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-flow: column nowrap;
  }
`

class Layout extends Component {
  render() {
    return (
      <Outline className={this.props.border ? "border" : null}>
        <main>
          <MainWrapper>
            {this.props.children}
          </MainWrapper>
        </main>
        <div className="background"></div>
      </Outline>
    )
  }
}

export default Layout
