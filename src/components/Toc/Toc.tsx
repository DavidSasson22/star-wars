import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { isInLocalStorage, setStarWarsLocalStorage } from '../../assets/localStorage';

import NarrowButton from '../NarrowButton/NarrowButton';
import Loader from '../Loader/Loader';

import "./toc.css"

export default function Toc() {
  const [displyToc, setDisplatToc] = useState("flex-wraper");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [moviesData, setMoviesData] = useState(null);

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
          await setMoviesData(isInLocalStorage('star-wars-api'));
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


  const tocDisplayer = (): void => {
    displyToc === "flex-wraper" ? setDisplatToc("flex-wraper left-hiden") : setDisplatToc("flex-wraper")
  }


  return (
    <div className={displyToc}>
      <div className="table-of-content">
        <NarrowButton />
      </div>
      <div className="table-displayer" onClick={() => tocDisplayer()}>
      </div>
      {loader && <Loader />}
      {error && <h3>Somthing went wrong...</h3>}
    </div>
  )
}
