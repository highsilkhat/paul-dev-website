import GitHubIcon from '../assets/logo-github.svg'

const Project: React.VFC<{
  title: string
  listItems: string[]
  href: string
  techs: string
}> = ({ title, listItems, href, techs }) => {
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
        <a
          className="
        text-green-300
        hover:text-yellow-400
        hover:text-opacity-100
        justify-self-end
        "
          href={href}
        >
          <GitHubIcon />
        </a>
        <p
          className="
        text-yellow-200
        "
        >
          {techs}
        </p>
      </h3>
      <ul
        className="
        text-yellow-700"
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
