import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isInLocalStorage, setStarWarsLocalStorage } from './assets/localStorage';

import './App.css';
import Toc from './components/Toc/Toc';
import Content from './components/Content/Content';

function App() {

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [moviesData, setMoviesData] = useState(null);
  const [movieTableData, setMovieTableData] = useState({ title: "Please choose a movie...", opening_crawl: "", isLiked: false });
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

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
          setMoviesData(await isInLocalStorage('star-wars-api'));
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
        setMoviesData(moviesData);
      }
    }
    getMovies();
  }, [moviesData])


  const contentTitleDisplayer = () => {
    return <Content
      title={movieTableData.title}
      description={movieTableData.opening_crawl}
      currentMovieIndex={currentMovieIndex}
      setMoviesData={setMoviesData}
      isLiked={moviesData}
    />
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome to star wars' encyclopedia</h1>
        <h2>Everything you need to know about star wars' movies</h2>
      </header>
      <main>
        <Toc loader={loader} error={error} moviesData={moviesData} chooseMovie={setMovieTableData} indexSetter={setCurrentMovieIndex} />
        {!loader && contentTitleDisplayer()}
      </main>
    </div>
  );
}

export default App;
