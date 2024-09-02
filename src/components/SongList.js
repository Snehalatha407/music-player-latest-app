import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';

const SongListWrapper = styled.div`
  width: 40%;
  overflow-y: auto;
  padding: 20px;
  color: white;
`;

const SongItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => (props.selected ? props.theme.colors.primary : 'transparent')};
  cursor: pointer;
  color: white;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};


const SongList = ({ songs, onSelectSong }) => {
    const [filteredSongs, setFilteredSongs] = useState(songs);
    const [songsWithDuration, setSongsWithDuration] = useState([]);


    const fetchSongDuration = async (url) => {
      return new Promise((resolve, reject) => {
        const audio = new Audio(url);
        audio.onloadedmetadata = () => {
          resolve(audio.duration);  // Duration in seconds
        };
        audio.onerror = reject;
      });
    };


    useEffect(() => {
      const fetchDurations = async () => {
        const songsWithDurations = await Promise.all(filteredSongs.map(async (song) => {
          try {
            const duration = await fetchSongDuration(song.url);
            return { ...song, duration };
          } catch (error) {
            console.error('Error fetching duration:', error);
            return song;
          }
        }));
        setSongsWithDuration(songsWithDurations);
      };
  
      fetchDurations();
    }, [filteredSongs]);
    

  const filterSongs = (toptrack = false) => {
    const filtered = songs.filter((song) => song.top_track === toptrack);
    console.log('filtered', filtered)
    setFilteredSongs(filtered);
  };

    useEffect(() => {
        filterSongs(false)
    }, [])

    useEffect(() => {
        filterSongs(false)
    },  songs)


  return (
    <SongListWrapper>

        <Tabs onTabSelect={filterSongs}></Tabs>
      {songsWithDuration.map((song, index) => (
  <SongItem key={song.id || index} onClick={() => onSelectSong(song)}>
    {console.log('song item:', song)}
    <span>{song.name || 'Unknown Title'}</span>
    <span>{song.duration ? formatDuration(song.duration) : 'Unknown Duration'}</span>

  </SongItem>
))}

    </SongListWrapper>
  );
};

export default SongList;
