import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isInLocalStorage, setStarWarsLocalStorage } from './assets/localStorage';


import './app.css';
import Toc from './components/Toc/Toc';

function App() {

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [moviesData, setMoviesData] = useState(null);
  const [movieTableData, setMovieTableData] = useState(null);

  let myLocalData = isInLocalStorage('star-wars-api');
  if (myLocalData && !moviesData) {
    setMoviesData(myLocalData);
  }


  useEffect(() => {
    const getMovies = async () => {
      setLoader(true);
      setError(false);

      if (!moviesData) {
        try {
          console.log('could not find "star-wars-api" in local storage');
          let movies = await (await axios.get(`https://swapi.dev/api/films/`)).data.results;
          console.log("recived data");
          setStarWarsLocalStorage(movies);
          console.log("data set in local storage");
          setMoviesData(isInLocalStorage('star-wars-api'));
          console.log(moviesData);
          setLoader(false)

        } catch (e) {
          setLoader(false)
          console.log(e);
          setError(true)
        }
      } else {
        setLoader(false);
        setError(false);
        console.log('found data in local storage');
        console.log(moviesData);

      }
    }
    getMovies();
  }, [moviesData])


  return (
    <div className="App">
      <header>
        <h1>Welcome to star wars' encyclopedia</h1>
        <h2>Everything you need to know about star wars' movies</h2>
      </header>
      <main>
        <Toc loader={loader} error={error} moviesData={moviesData} chooseMovie={setMovieTableData} />
      </main>
    </div>
  );
}

export default App;
