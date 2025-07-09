import React, { type FC } from 'react';
import styled from 'styled-components';


const Outline = styled.div`
  padding: 1.5em;
`;

const MainWrapper = styled.div`
  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

interface LayoutProps extends React.PropsWithChildren {
  border?: boolean
}

const Layout: FC<LayoutProps> = ({ border, children }) => (
  <Outline className={border ? 'border' : ''}>
    <main>
      <MainWrapper>{children}</MainWrapper>
    </main>
    <div className='background' />
  </Outline>
);

export default Layout;
