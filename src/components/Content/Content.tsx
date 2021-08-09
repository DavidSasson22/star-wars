import React from 'react';
import './content.css';


type Props = {
  title: string,
  description: string
}

const Content: React.FC<Props> = ({ title, description }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}


export default Content;