const Skill: React.VFC<{ skill: string; skillBody: string }> = ({
  skill,
  skillBody,
}) => {
  return (
    <div
      className="
      text-pink-500
      text-base md:text-lg
      "
    >
      <p>
        {skill} {'{'}
      </p>
      <p
        className="
      text-yellow-500
      text-opacity-75
      "
      >
        {skillBody}
        <br />
      </p>
      <p
        className="
        text-pink-500
        text-base md:text-lg
        "
      >
        {' '}
        {'}'}
      </p>
    </div>
  )
}

export default Skill
