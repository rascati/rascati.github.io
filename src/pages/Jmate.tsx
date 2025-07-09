import styled from 'styled-components';
import SEO from '../components/Seo';
import VideoContainer from '../components/VideoContainer';
import jmateLogo from '../assets/images/jmate-logo.svg';
import profile from '../assets/images/jmate-profile.png';
import archive from '../assets/images/jmate-archive.png';
import OutlineContainer from '../components/OutlineContainer';
import Navbar from '../components/Navbar';


const FirstWrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 3em;
  }

  grid-template-columns: 1fr;
`;

const SecondWrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2em;
  }

  grid-template-columns: 1fr;
`;

const ThirdWrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 2em;
  }

  grid-template-columns: 1fr;
`;

const JMate = () => (
  <OutlineContainer>
    <SEO
      title='J!Mate'
      description='JEOPARDY DESCRIPTION'
    />
    <Navbar />

    <h1>J!Mate Jeopardy Companion App - 2018</h1>

    <FirstWrapper>
      <div>
        <p>
          In this service design project for Northeastern's Interaction Design 2
          course, I designed a mobile companion app for the game show Jeopardy
          targeted to elders.
        </p>
      </div>
      <img src={jmateLogo} alt='jmate logo' />
      <br />
    </FirstWrapper>

    <SecondWrapper>
      <VideoContainer>
        <iframe
          title='jmate'
          src='https://www.youtube.com/embed/4UGMTnykcEk?rel=0'
          style={{ border: 0 }}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </VideoContainer>
      <div>
        <p>
          The app let's users play along with the game live on their phone.
          Buzzing in while watching live on TV, the app acts as a remote to
          pause the show, giving time to answer outloud. As the user
          self-verifies answer correctness, the app keeps track of current game
          winnings. There is also functionality to go back and play any episode
          from Jeopardy's massive archive of over 50 years.
        </p>
        <p>
          The app easily helps elders who are already in the habit of watching
          Jeopardy stay more engaged with the show. In addition to making the
          show more interactive and challenging, the app makes Jeopardy a bit
          more social.
        </p>
      </div>
      <br />
    </SecondWrapper>

    <ThirdWrapper>
      <div>
        <p>
          Players can invite friends to play along as well as share questions
          with other contacts they have within the app. With the ability to
          share questions, the app gives elders another option to spark more
          casual conversation with their long-distance family members.
        </p>
      </div>

      <img src={profile} alt='user profile screenshot' />
      <img src={archive} alt='episode archive screenshot' />
      <br />
    </ThirdWrapper>
  </OutlineContainer>
);

export default JMate;
