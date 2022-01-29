import LinkedInIcon from '../assets/logo-linkedin.svg'
import GitHubIcon from '../assets/logo-github.svg'
import EmailIcon from '../assets/mail.svg'
import MenuLink from './MenuLink'

const Header: React.VFC = () => {
  return (
    <div
      className="
          my-10 md:my-20
          text-center md:text-left
          bg-gradient-to-r from-gray-800
          bg-opacity-25
        "
    >
      <div
        className="
              flex-col md:flex-row
              flex justify-between
              gap-2
              font-thin
              p-5
            "
      >
        <h1
          className="
                text-5xl
                font-sans
                text-yellow-100
                text-opacity-50
              "
        >
          Paul Lee
        </h1>

        <div
          className="
                self-center md:self-end
                flex 
                gap-4 md:gap-2
                text-3xl md:text-4xl
                text-yellow-100
                text-opacity-50

              "
        >
          <MenuLink href="/resume">
            <p>Resume</p>
          </MenuLink>
          <a
            className="
            hover:text-yellow-400
            hover:text-opacity-50
            "
            href="mailto:paullee4400@gmail.com"
          >
            <EmailIcon />
          </a>
          <a
            className="
            hover:text-yellow-400
            hover:text-opacity-95
            "
            href="https://github.com/highsilkhat"
          >
            <GitHubIcon />
          </a>
          <a
            className="
          hover:text-yellow-400
          hover:text-opacity-95
          "
            href="https://www.linkedin.com/in/paul-d-lee/"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
