import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  color: white;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Music Player</h1>
  </HeaderContainer>
);

export default Header;
