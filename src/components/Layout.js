import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SongList from './SongList';
import SongDetails from './SongDetails';
import PlayerControls from './PlayerControls';

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Layout = ({ songs, selectedSong, onSelectSong }) => {
  return (
    <>
    <LayoutWrapper>
      <Sidebar />
      <SongList songs={songs} onSelectSong={onSelectSong} />
      <SongDetails song={selectedSong} />
    </LayoutWrapper>
    </>
  );
};

export default Layout;
