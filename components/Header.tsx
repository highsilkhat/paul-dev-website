import LinkedInIcon from '../assets/logo-linkedin.svg'
import GitHubIcon from '../assets/logo-github.svg'
import EmailIcon from '../assets/email.svg'
import ReaderIcon from '../assets/reader.svg'
import MenuLink from './MenuLink'
import TerminalIcon from '../assets/terminal.svg'
import MenuHref from './MenuHref'
import Link from 'next/link'
import React from "react";

const Header: React.FC = () => {
  return (
    (<div
      className="
      py-10 md:py-20
      font-serif
    "
    >
      <div
        className="
            text-center md:text-left
            bg-gradient-to-l from-gray-400 via-sky-blue to-sea-blue
            bg-opacity-100
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
          <Link href={'/'} className="group">

            <div
              className="
          text-5xl
          font-sans
          text-amber-100
          text-opacity-50
          group-hover:text-amber-400
            group-hover:text-opacity-100
        "
            >
              Paul Lee
            </div>

          </Link>
          <div
            className="
                  self-center md:self-end
                  flex
                  gap-4 md:gap-2
                  text-3xl md:text-4xl
                  text-amber-100
                  text-opacity-50
                "
          >
            <MenuLink
              href="/blog"
              className="
              group-hover:text-amber-400
              group-hover:text-opacity-100
            "
              iconComponent={ReaderIcon}
              iconText="Blog"
              iconTextStyling="
              text-xs
              visible md:invisible group-hover:visible
            "
            />

            <MenuLink
              href="/resume"
              className="
                group-hover:text-amber-400
                group-hover:text-opacity-100
              "
              iconComponent={TerminalIcon}
              iconText="Resume"
              iconTextStyling="
                text-xs
                visible md:invisible group-hover:visible
              "
            />

            <MenuHref
              className="
                
                group-hover:text-amber-400
                group-hover:text-opacity-100
              "
              href="mailto:contact@paullee.me
              "
              iconComponent={EmailIcon}
              iconText="Email"
              iconTextStyling="
                text-xs
                visible md:invisible group-hover:visible
              "
            />

            <MenuHref
              className="
                group-hover:text-amber-400
                group-hover:text-opacity-100
              "
              href="https://github.com/highsilkhat
              "
              iconComponent={GitHubIcon}
              iconText="GitHub"
              iconTextStyling="
                text-xs
                visible md:invisible group-hover:visible
              "
            />

            <MenuHref
              className="
                group-hover:text-amber-400
                group-hover:text-opacity-100
              "
              href="https://www.linkedin.com/in/paul-d-lee/
              "
              iconComponent={LinkedInIcon}
              iconText="LinkedIn"
              iconTextStyling="
                text-xs
                visible md:invisible group-hover:visible
              "
            />
          </div>
        </div>
      </div>
    </div>)
  );
}

export default Header
