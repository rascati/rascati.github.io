import styled from 'styled-components';
import SEO from '../components/Seo';
import VideoContainer from '../components/VideoContainer';
import OutlineContainer from '../components/OutlineContainer';
import Navbar from '../components/Navbar';


const Wrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  grid-template-columns: 1fr;
`;

const TEDx = () => (
  <OutlineContainer>
    <SEO
      title='TEDxCambridge'
      description='DESCRIPTION'
      // keywords={['FedEx', 'SVG', 'icon system', 'design system']}
    />
    <Navbar />

    <h1>TEDxCambridge - 2017</h1>

    <a
      href='http://www.tedxcambridge.com/our-story/'
      target='_blank'
      rel='noopener noreferrer'
    >
      www.tedxcambridge.com/our-story/
    </a>

    <br />
    <br />

    <Wrapper>
      <div>
        <p>
          This is a heavily animated 'About Us' presentation page I built while
          at Tank Design for one of the largest TEDx events in the country.
        </p>
        <p>
          The page makes good use of CSS keyframe animations and SVG artwork. A
          good improvement would be to explore alternatives with the designer in
          order to limit pageload times and animation lag, improving overall
          user experience.
        </p>
      </div>

      <VideoContainer>
        <iframe
          title='tedx'
          src='https://www.youtube.com/embed/uVr0obB8bDY?rel=0'
          style={{ border: 0 }}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </VideoContainer>
    </Wrapper>
  </OutlineContainer>
);

export default TEDx;
