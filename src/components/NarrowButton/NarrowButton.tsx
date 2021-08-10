import React from 'react';
import './narrowBotton.css'


type Props = {
  title: string,
  like: boolean,
  index: any,
  chooseMovie: Function,
  indexSetter: Function
  moviesData: any

}

const NarrowButton: React.FC<Props> = ({ title, like, index, chooseMovie, moviesData, indexSetter }) => {
  return (
    <button onClick={() => {
      chooseMovie(moviesData[index]);
      indexSetter(index);
    }}>
      {title}
      {like ? <i className="heart icon red"></i> : <i className="heart icon transperent" ></i>}
    </button>
  )
}


export default NarrowButton