import React from 'react';
import './narrowBotton.css'


type Props = {
  title: string,
  like: boolean,
}

const NarrowButton: React.FC<Props> = ({ title, like }) => {
  return (
    <button>
      {title}
      {like ? <i className="heart icon red"></i> : <i className="heart icon" ></i>}
    </button>
  )
}


export default NarrowButton