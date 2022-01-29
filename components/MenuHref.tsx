import { Component } from 'react'

const MenuHref: React.FC<{
  outerDivStyle: string
  innerDivStyle: string
  href: string
  iconText: string
  iconTextStyling: string
  iconComponent: string
}> = ({
  outerDivStyle,
  innerDivStyle,
  href,
  iconComponent,
  iconText,
  iconTextStyling,
}) => {
  return (
    <div className={outerDivStyle}>
      <div className={innerDivStyle}>
        <a href={href}></a>
        <p className={iconTextStyling}>{iconText}</p>
      </div>
    </div>
  )
}

export default MenuHref
