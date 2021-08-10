import React from 'react';
import { movieLikerDisliker } from '../../assets/localStorage'
import './content.css';



type Props = {
  title: string,
  description: string,
  currentMovieIndex: number,
  setMoviesData: Function,
  isLiked: any
}

const Content: React.FC<Props> = ({ title, description, currentMovieIndex, setMoviesData, isLiked }) => {

  if (isLiked !== null) { isLiked = isLiked[currentMovieIndex].isLiked };

  const likeHandler = () => {
    let newMoviesData = movieLikerDisliker(currentMovieIndex);
    newMoviesData && setMoviesData(newMoviesData);
  }



  return (
    <article>
      <div className="articale-wraper">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="likeBtn" onClick={() => likeHandler()}>
        {(isLiked !== null && title !== "Please choose a movie...") &&
          <>
            <br />
            <button className="heart-btn">
              {isLiked ? <i className="heart icon red"></i> : <i className="heart icon white" ></i>}
            </button>
          </>
        }
      </div>
    </article>
  )
}


export default Content;