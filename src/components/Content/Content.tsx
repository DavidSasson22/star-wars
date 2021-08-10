import React from 'react';
import { movieLikerDisliker } from '../../assets/localStorage'
import './content.css';



type Props = {
  title: string,
  description: string
}

const Content: React.FC<Props> = ({ title, description }) => {
  return (
    <article>
      <div className="articale-wraper">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="likeBtn">

      </div>
    </article>
  )
}


export default Content;