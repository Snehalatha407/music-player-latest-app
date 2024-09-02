import React from 'react';
import styled from 'styled-components';
import PlayerControls from './PlayerControls';
import theme from '../styles/theme';

const SongDetailsWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: ${theme.colors.text}
`;

const CoverImage = styled.img`
  width: 80%;
  max-width: 300px;
  border-radius: 10px;
`;

const SongTitle = styled.h2`
  margin: 20px 0;
`;

const SongDetails = ({ song }) => {

  return (
    <SongDetailsWrapper>
      {song ? (
        <>
          <CoverImage src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.name} />
          <SongTitle>{song.name}</SongTitle>
          <p>{song.artist}</p>
          <PlayerControls song={song} />
        </>
      ) : (
        <div>Select a song to see the details</div>
      )}
    </SongDetailsWrapper>
  );
};

export default SongDetails;
