import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NarrowButton from '../NarrowButton/NarrowButton';
import "./toc.css"

export default function Toc() {
  const [displyToc, setDisplatToc] = useState("flex-wraper");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    const getMovies = async () => {
      setLoader(true);
      try {
        let movies = await (await axios.get(`https://swapi.dev/api/films/`)).data.results;
        console.log(movies);

      } catch (e) {
        console.log(e);

      }
    }
    getMovies();
  }, [])


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
    </div>
  )
}
