// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Tabs from './components/Tabs';
import SongList from './components/SongList';
import PlayerControls from './components/PlayerControls';
import React from 'react';
import Layout from './components/Layout';
import { fetchSongs } from './api';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Greeting name="Venkat" />
//       </header>
//     </div>
//   );
// }

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ selectedSong, theme }) => selectedSong? selectedSong.accent: theme.colors.background};
`;

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  React.useEffect(() => {
    fetchSongs().then((data) => setSongs(data));
  }, []);

  const onSongSelect = (song) => {
    setSelectedSong(song)
  }


  return (
    <ThemeProvider theme={theme}>
      <AppContainer selectedSong={selectedSong}>
        <Layout songs={songs} selectedSong={selectedSong} onSelectSong={onSongSelect} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
