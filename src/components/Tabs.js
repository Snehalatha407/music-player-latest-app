import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;


const Tab = styled.button`
  border: none;
  background-color: inherit;
  color: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.gray};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;


const Tabs = ({onTabSelect}) => {
  const [activeTab, setActiveTab] = useState('forYou');

  const tabSelect = (tab) => {
    setActiveTab(tab)
    onTabSelect(tab === 'topTracks')
  }

  return (
    <TabContainer>
      <Tab isActive={activeTab === 'forYou'} onClick={() => tabSelect('forYou')}>
        <h2>
        For You
        </h2>
        
      </Tab>
      <Tab isActive={activeTab === 'topTracks'} onClick={() => tabSelect('topTracks')}>
        
        <h2>
        Top Tracks
        </h2>
      </Tab>
    </TabContainer>
  );
};

export default Tabs;
