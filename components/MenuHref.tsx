export interface HrefData {
  divStyle: string
  href: string
  iconText: string
  iconTextStyling: string
  iconComponent: React.ComponentType
}

const MenuHref: React.FC<HrefData> = ({
  divStyle,
  href,
  iconComponent: IconComponent,
  iconText,
  iconTextStyling,
}) => {
  return (
    <div className={divStyle}>
      <a href={href}>
        <IconComponent />
      </a>
      <p className={iconTextStyling}>{iconText}</p>
    </div>
  )
}

export default MenuHref
