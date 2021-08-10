import React, { useState, useEffect } from 'react';
import { movieLikerDisliker, isInLocalStorage } from '../../assets/localStorage'
import './content.css';



type Props = {
  title: string,
  description: string,
  currentMovieIndex: number,
  setMoviesData: Function,
  isLiked: any
}

const Content: React.FC<Props> = ({ title, description, currentMovieIndex, setMoviesData, isLiked }) => {

  isLiked = isLiked[currentMovieIndex].isLiked;

  const likeHandler = () => {
    let newMoviesData = movieLikerDisliker(currentMovieIndex);
    newMoviesData && setMoviesData(newMoviesData);
  }

  useEffect(() => {
    console.log(`ative everyTime`);
    console.log(currentMovieIndex);
  })

  return (
    <article>
      <div className="articale-wraper">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="likeBtn" onClick={() => likeHandler()}>
        <button>
          {isLiked ? <i className="heart icon red"></i> : <i className="heart icon white" ></i>}
        </button>
      </div>
    </article>
  )
}


export default Content;