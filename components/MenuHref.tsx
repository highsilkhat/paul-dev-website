import clsx from 'clsx'

export interface HrefData {
  className: string
  href: string
  iconText?: string
  iconTextStyling?: string
  iconComponent: React.ComponentType
  noCenter?: boolean
}

const MenuHref: React.FC<HrefData> = ({
  className,
  href,
  iconComponent: IconComponent,
  iconText,
  iconTextStyling,
  noCenter,
}) => {
  return (
    <div
      className="
      group
    "
    >
      <a
        className={clsx(className, noCenter || 'flex flex-col items-center')}
        href={href}
      >
        <IconComponent />
        <p className={iconTextStyling}>{iconText}</p>
      </a>
    </div>
  )
}

export default MenuHref
