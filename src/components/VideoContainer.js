import styled from "styled-components"

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;

    @media only screen and (min-width: 1200px) {
      margin-left: 1em;
    } 
  }
`

export default VideoContainer