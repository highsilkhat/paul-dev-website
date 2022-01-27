import LinkedInIcon from '../assets/logo-linkedin.svg'
import GitHubIcon from '../assets/logo-github.svg'
import EmailIcon from '../assets/email.svg'
import ReaderIcon from '../assets/reader.svg'
import MenuLink from './MenuLink'
import TerminalIcon from '../assets/terminal.svg'
import MenuHref from './MenuHref'

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
                <div
                  className="
                        text-xs
                        visible md:invisible group-hover:visible
                        flex
                        
                        "
                >
                  <p className="flex justify-center">Blog</p>
                </div>
              </div>
            </div>
          </MenuLink>
          <MenuLink href="/resume">
            <div className="group">
              <div
                className="
              text-3xl md:text-4xl
              text-yellow-100
              text-opacity-50
              group-hover:text-yellow-400
              group-hover:text-opacity-100"
              >
                <TerminalIcon />
                <div>
                  <p
                    className="
                          text-xs
                          visible md:invisible group-hover:visible
                          "
                  >
                    Resume
                  </p>
                </div>
              </div>
            </div>
          </MenuLink>

          <div className="group">
            <a
              className="
              group-hover:text-yellow-400
              group-hover:text-opacity-100
              "
              href="mailto:paullee4400@gmail.com"
            >
              <EmailIcon />
              <div
                className="flex
              justify-self-end"
              >
                <p
                  className="
                            text-xs
                            visible md:invisible group-hover:visible
                            flex
                            justify-self-end
                            "
                >
                  Email
                </p>
              </div>
            </a>
          </div>
          <div className="group">
            <a
              className="
              group-hover:text-yellow-400
              group-hover:text-opacity-100
              "
              href="https://github.com/highsilkhat"
            >
              <GitHubIcon />
              <div
                className="flex
              self-center"
              >
                <p
                  className="
                            text-xs
                            visible md:invisible group-hover:visible
                            "
                >
                  GitHub
                </p>
              </div>
            </a>
          </div>
          <div className="group">
            <a
              className="
            group-hover:text-yellow-400
            group-hover:text-opacity-100
            "
              href="https://www.linkedin.com/in/paul-d-lee/"
            >
              <LinkedInIcon />
              <p
                className="
            text-xs
            visible md:invisible group-hover:visible
            "
              >
                LinkedIn
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
