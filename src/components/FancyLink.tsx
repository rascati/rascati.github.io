import styled from 'styled-components';

const FancyLink = styled.a`
  color: #0c0c0c;
  background-color: white;
  padding: 0.3em 0.6em 0.3em 0.8em;
  margin: 0 0.6em 0 0;
  background-color: white;
  font-size: 1.2rem;
  font-style: italic;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #0c0c0c;
  transition: all 0.1s ease 0s;
  margin-top: -2px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:hover {
    color: #0c0c0c;
    background-color: white;
    transform: translate(-6px, -6px);
    box-shadow: 6px 6px 0px 0px #0c0c0c;
  }

  img {
    margin: 0;
    height: 1.4rem;
  }
`;

export default FancyLink;
