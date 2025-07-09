import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Subtext from './Subtext';

const Container = styled.div`
  border-bottom: 2px solid #0c0c0c;
  border-right: 2px solid #0c0c0c;
  padding: 1.5em;
`;

interface PieceProps extends React.PropsWithChildren {
  category: string,
  link: string,
  title: string,
  description: string,
}

// const Link = ({ to, children }) => <a href={to}>{children}</a>;

const Piece: FC<PieceProps> = ({ category, link, title, description }) => (
  <Container>
    <Subtext>{category}</Subtext>
    <h2>
      {/* <Link to={link}>{title}</Link> */}
      <Link to={link}>{title}</Link>
    </h2>
    <p>{description}</p>
  </Container>
);

export default Piece;
