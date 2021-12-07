import Link, { LinkProps } from 'next/link'

const MenuLink: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...rest}>
      <a
        className="
        text-yellow-400
        hover:text-blue-700
        "
      >
        {children}
      </a>
    </Link>
  )
}

export default MenuLink
