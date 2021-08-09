import React, { useState } from 'react'
import "./toc.css"

export default function Toc() {
  const [displyToc, setDisplatToc] = useState("flex-wraper left-hiden");

  const tocDisplayer = (): void => {
    displyToc === "flex-wraper" ? setDisplatToc("flex-wraper left-hiden") : setDisplatToc("flex-wraper")
  }
  return (
    <div className={displyToc}>
      <div className="table-of-content">

      </div>
      <div className="table-displayer" onClick={() => tocDisplayer()}>

      </div>
    </div>
  )
}
