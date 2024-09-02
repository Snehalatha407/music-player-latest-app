// import axios from 'axios';

// const API_URL = 'https://cms.samespace.com/items/songs';

// export const fetchSongs = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data.data;
//   } catch (error) {
//     console.error('Error fetching songs:', error);
//     return [];
//   }
// };

export const fetchSongs = async () => {
    const response = await fetch('https://cms.samespace.com/items/songs');
    const data = await response.json();
    console.log(data)
    return data.data;
  };
  
