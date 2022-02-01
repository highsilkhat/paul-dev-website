const MenuHref: React.FC<{
  outerDivStyle: string
  innerDivStyle: string
  href: string
  iconText: string
  iconTextStyling: string
  iconComponent: React.ComponentType
}> = ({
  outerDivStyle,
  innerDivStyle,
  href,
  iconComponent: IconComponent,
  iconText,
  iconTextStyling,
}) => {
  return (
    <div className={outerDivStyle}>
      <div className={innerDivStyle}>
        <a href={href}>
          <IconComponent />
        </a>
        <p className={iconTextStyling}>{iconText}</p>
      </div>
    </div>
  )
}

export default MenuHref
