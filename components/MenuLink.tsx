import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'
import React from "react";

export interface MenuLinkProps extends LinkProps {
  className: string
  iconText?: string
  iconTextStyling?: string
  iconComponent: React.ComponentType
}

const MenuLink: React.FC<MenuLinkProps> = ({
  className,
  iconComponent: IconComponent,
  iconText,
  iconTextStyling,
  ...rest
}) => {
  return (
    (<div className="group">
      <Link {...rest} className={clsx(className, 'flex flex-col items-center')}>

        <IconComponent />
        <p className={iconTextStyling}>{iconText}</p>

      </Link>
    </div>)
  );
}

export default MenuLink
