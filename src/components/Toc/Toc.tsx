import React, { useState } from 'react'
import NarrowButton from '../NarrowButton/NarrowButton';
import Loader from '../Loader/Loader';
import "./toc.css"

type Props = {
  loader: boolean,
  error: boolean,
  moviesData: { title: string, isLiked: boolean, opening_crawl: string }[] | null,
  chooseMovie: Function,
  indexSetter: any
}

const Toc: React.FC<Props> = ({ loader, error, moviesData, chooseMovie, indexSetter }) => {
  const [displyToc, setDisplatToc] = useState("flex-wraper");

  const tocDisplayer = (): void => {
    displyToc === "flex-wraper" ? setDisplatToc("flex-wraper left-hiden") : setDisplatToc("flex-wraper")
  }

  const buttonDisplaer = () => {
    if (moviesData)
      return moviesData.map((movie, i) => {
        return <NarrowButton key={i} title={movie.title} like={movie.isLiked} index={i} chooseMovie={chooseMovie} moviesData={moviesData} indexSetter={indexSetter} />
      })
  }

  return (
    <div className={displyToc}>
      <div className="table-of-content">
        <h3>Table Of Content</h3>
        {moviesData && buttonDisplaer()}
      </div>
      <div className="table-displayer" onClick={() => tocDisplayer()}>
        CLICK   <i className="angle double right icon"></i>   HERE
      </div>
      {loader && <Loader />}
      {error && <h3>Somthing went wrong...</h3>}
    </div>
  )
}


export default Toc