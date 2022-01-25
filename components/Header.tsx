import LinkedInIcon from '../assets/logo-linkedin.svg'
import GitHubIcon from '../assets/logo-github.svg'
import EmailIcon from '../assets/mail.svg'
import ReaderIcon from '../assets/reader.svg'
import MenuLink from './MenuLink'
import TerminalIcon from '../assets/terminal.svg'

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
                font-thin
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
          <MenuLink href="/blog">
            <div className="group">
              <div
                className="
              
              text-3xl md:text-4xl
              text-yellow-100
              text-opacity-50
              group-hover:text-yellow-400
              group-hover:text-opacity-100
              "
              >
                <ReaderIcon />
                <p
                  className="
                        text-xs
                        invisible group-hover:visible
                        "
                >
                  Blog
                </p>
              </div>
            </div>
          </MenuLink>
          <MenuLink href="/resume">
            <p
              className="
            text-3xl md:text-4xl
            text-yellow-100
            text-opacity-50
            hover:text-yellow-400
            hover:text-opacity-100"
            >
              <TerminalIcon />
              <p
                className="
          text-xs
          "
              >
                Resume
              </p>
            </p>
          </MenuLink>

          <a
            className="
            hover:text-yellow-400
            hover:text-opacity-50
            "
            href="mailto:paullee4400@gmail.com"
          >
            <EmailIcon />
            <p
              className="
          text-xs
          "
            >
              Email
            </p>
          </a>
          <a
            className="
            hover:text-yellow-400
            hover:text-opacity-100
            "
            href="https://github.com/highsilkhat"
          >
            <GitHubIcon />
            <p
              className="
          text-xs
          "
            >
              GitHub
            </p>
          </a>
          <a
            className="
          hover:text-yellow-400
          hover:text-opacity-100
          "
            href="https://www.linkedin.com/in/paul-d-lee/"
          >
            <LinkedInIcon />
            <p
              className="
          text-xs
          "
            >
              LinkedIn
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
