import GitHubIcon from '../assets/logo-github.svg'
import React from "react";

const Project: React.FC<{
  title: string
  listItems: string[]
  techs: string
}> = ({ title, listItems, techs }) => {
  return (
    <div>
      <h3
        className="
      text-blue-600
      text-base md:text-xl
      md:flex
      justify-between
      "
      >
        <p>
          {'{ '} {title} {'} '}
        </p>
        <p
          className="
        text-amber-200
        "
        >
          {techs}
        </p>
      </h3>
      <ul
        className="
        text-amber-700"
      >
        {listItems.map((item, i) => {
          return (
            <li key={i}>
              {'<'}
              {item}
              {'>'}
            </li>
          )
        })}
      </ul>
      <br />
    </div>
  )
}

export default Project
