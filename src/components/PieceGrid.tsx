import { type FC } from 'react';
import styled, { keyframes } from 'styled-components';
import Piece from './Piece';


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5em;
  margin-top: 0;
  border-left: 2px solid #0c0c0c;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s ease-in-out infinite;
  width: min-content;
  height: min-content;
  font-size: 1.5rem;
`;

const work: Record<string, WorkItem> = {
  fedex: {
    title: 'FedEx Icon System',
    description: 'A responsive SVG icon system for FedEx',
    link: '../work/fedex',
    category: 'Development',
  },
  letterforms: {
    title: 'Letterforms',
    description: 'A study in typographic geometry combining glyphs and creating novel shapes',
    link: '../work/letterforms',
    category: 'Design',
  },
  planetQueen: {
    title: 'Planet Queen',
    description: 'A JSON-driven wildlife conservation website',
    link: '../work/planet-queen',
    category: 'Development',
  },
  jmate: {
    title: 'J!Mate Jeopardy Companion App',
    description: 'A companion app for Jeopardy targeted at elders',
    link: '../work/jmate',
    category: 'Design, UX',
  },
  tedx: {
    title: 'TEDxCambridge',
    description: 'An animated presentation page for one of the largest TEDx events in the country',
    link: '../work/tedx',
    category: 'Development',
  },
  gorgiality: {
    title: 'Gorgiality',
    description: 'A showcase website for a photography exhibition and book sale by Erez Sabag',
    link: '../work/gorgiality',
    category: 'Development',
  },
  venmo: {
    title: 'Venmo Case Study',
    description: 'Looking at improving the main workflows of the Venmo Android app - find a problematic mobile interface and redesign it to improve the user experience.',
    link: '../work/venmo',
    category: 'Design, UX',
    visible: false,
  },
  nupt: {
    title: 'NUPT Logos',
    description: 'A new logo system for Northeastern\'s Personal Training department',
    link: '../work/nupt',
    category: 'Design',
    visible: false,
  }
};

type WorkItem = {
  title: string;
  description: string;
  link: string;
  category: string;
  visible?: boolean;
}

const PieceGrid: FC = () => (
  <GridWrapper>
    {Object.entries(work).map(([key, args]) => (
      (args.visible ?? true) ? <Piece key={key} {...args} /> : null
    ))}
    
    <div
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5em',
        borderBottom: '2px solid #0c0c0c',
        borderRight: '2px solid #0c0c0c'
      }}
    >
      More coming soon...
      <Rotate>
        <div style={{ transform: 'scale(-1, 1)' }}>🦆</div>
      </Rotate>
    </div>

  </GridWrapper>
);

export default PieceGrid;
