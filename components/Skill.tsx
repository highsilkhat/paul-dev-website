import React from "react";

const Skill: React.FC<{ skill: string; skillBody: string }> = ({
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
      text-amber-500
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
