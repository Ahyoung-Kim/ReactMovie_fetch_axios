import React from 'react';
import { apiKEY } from './myApi';
import FetchMovie from './FetchMovie';
import AxiosMovie from './AxiosMovie';

const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKEY}&language=en-US&page=1`;

const App = () => {
  return (
    <div>
      <FetchMovie url={url} />
      <AxiosMovie url={url} />
    </div>
  );
};

export default App;