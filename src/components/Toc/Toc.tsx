import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NarrowButton from '../NarrowButton/NarrowButton';
import "./toc.css"
import Loader from '../Loader/Loader';

export default function Toc() {
  const [displyToc, setDisplatToc] = useState("flex-wraper");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [moviesData, setMoviesData] = useState([]);


  useEffect(() => {
    const getMovies = async () => {
      setLoader(true);
      setError(false);
      try {
        let movies = await (await axios.get(`https://swapi.dev/api/films/`)).data.results;
        console.log(movies);
        setMoviesData(moviesData)

      } catch (e) {
        console.log(e);
        setError(true)
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
    </div>
  )
}
