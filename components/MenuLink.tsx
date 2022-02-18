import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'

export interface MenuLinkProps extends LinkProps {
  className: string
  iconText?: string
  iconTextStyling?: string
  iconComponent: React.ComponentType
}

const MenuLink: React.VFC<MenuLinkProps> = ({
  className,
  iconComponent: IconComponent,
  iconText,
  iconTextStyling,
  ...rest
}) => {
  return (
    <div className="group">
      <Link {...rest}>
        <a className={clsx(className, 'flex flex-col items-center')}>
          <IconComponent />
          <p className={iconTextStyling}>{iconText}</p>
        </a>
      </Link>
    </div>
  )
}

export default MenuLink
