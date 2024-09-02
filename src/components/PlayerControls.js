// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';


// const ControlsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: 'blue';
// `;

// const Button = styled.button`
//   margin: 0 10px;
//   padding: 10px;
//   border: none;
//   background: ${({ theme }) => theme.colors.primary};
//   color: white;
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }
// `;

// const PlayerControls = ({ song }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audio = new Audio(song?.url);

//   useEffect(() => {
//     if (isPlaying) {
//       audio.play();
//     } else {
//       audio.pause();
//     }

//     return () => {
//       audio.pause();
//     };
//   }, [isPlaying, audio]);

//   return (
//     <ControlsContainer>
//       <Button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </Button>
//       <Button onClick={() => { /* Implement Next functionality */ }}>
//         Next
//       </Button>
//       <Button onClick={() => { /* Implement Previous functionality */ }}>
//         Previous
//       </Button>
//     </ControlsContainer>
//   );
// };

// export default PlayerControls;
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.primary || 'black'};
  color: white;
  cursor: pointer;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

const ProgressBar = styled.input`
  width: 100%;
  margin-top: 10px;
  -webkit-appearance: none;
  background: white;
  height: 5px;
  border-radius: 5px;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${({ theme }) => theme.colors.primary || '#1DB954'};
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  
  &::-moz-range-thumb {
    background: ${({ theme }) => theme.colors.primary || '#1DB954'};
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

const PlayerControls = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!song) return;

    // Initialize audio element
    const audio = new Audio(song.url);
    audioRef.current = audio;

    // Event listeners for updating progress and duration
    const handleTimeUpdate = () => {
      debugger
      setProgress((audio.currentTime / duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Cleanup function
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.pause();
    };
  }, [song]);

  useEffect(() => {
    debugger
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  const handleProgressChange = (event) => {
    debugger
    const newTime = (event.target.value / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(event.target.value);
    }
  };


  useEffect(() => {
    debugger
    setProgress(0);
    setDuration(0);
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    setDuration(audio.duration);
  }, [song])


  return (
    <ControlsContainer>
      <div>

      <Button onClick={() => setIsPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </Button>
      <Button onClick={() => { /* Implement Next functionality */ }}>
        <FontAwesomeIcon icon={faForward} />
      </Button>
      <Button onClick={() => { /* Implement Previous functionality */ }}>
        <FontAwesomeIcon icon={faBackward} />
      </Button>
      </div>
      <ProgressBar
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
      />
    </ControlsContainer>
  );
};

export default PlayerControls;
