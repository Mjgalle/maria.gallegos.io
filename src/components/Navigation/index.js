import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 20px 40px;
  background: #ffe6f9;
  font-family: Quicksand, sans-serif;
  display:flex;
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  li {
    padding: 0 4px;
  }

`;

const InsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <InsideWrapper>
      Maria
      </InsideWrapper>
      <UnorderedList>
        <li>
          Home
        </li>
        <li>
          Portfolio
        </li>
        <li>
          Blog
        </li>
        <li>
          ICON
        </li>
      </UnorderedList>
    </Wrapper>
  )
};

export default Navigation;