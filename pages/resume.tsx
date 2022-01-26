import type { NextPage } from 'next'
import Head from 'next/head'
import Skill from '../components/Skill'
import Project from '../components/Project'
import GitHubIcon from '../assets/logo-github.svg'
import EmailIcon from '../assets/mail.svg'
import LinkedInIcon from '../assets/logo-linkedin.svg'
import MenuLink from '../components/MenuLink'

const Resume: NextPage = () => {
  return (
    <div
      className="
    bg-black
    p-5 md:p-10
    w-full
    h-screen
    font-mono
    overflow-y-auto
    "
    >
      <Head>
        <title>Resume</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <MenuLink href="/">Home</MenuLink>

      <h1
        className="
      text-green-300
      text-xl md:text-4xl
      md:flex
      "
      >
        PaulLee <span className="text-white">=</span>{' '}
        <div
          className="
        flex"
        >
          <span className="text-yellow-200">(</span>
          <a
            className="
              text-green-300
              text-opacity-50
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
              hover:text-opacity-100
              "
            href="https://github.com/highsilkhat"
          >
            <GitHubIcon />
          </a>
          <a
            className="
            hover:text-yellow-400
            hover:text-opacity-100
            "
            href="https://www.linkedin.com/in/paul-d-lee/"
          >
            <LinkedInIcon />
          </a>
          <span className="text-yellow-200">)</span>{' '}
        </div>
        <span className="text-blue-300">={'>'} </span> SoftwareEngineer {'{'}
      </h1>

      <h2
        className="
      text-blue-300
      text-lg md:text-xl
      "
      >
        Skills {'('}
      </h2>

      <Skill
        skill="Languages"
        skillBody="JavaScript (ES6), Python, TypeScript, Java, CSS, HTML, MySQL"
      />

      <Skill
        skill="Frameworks & Libraries"
        skillBody="React, Express, Node.js, Flask, Spring, Bootstrap, TailwindCSS, Next.js,
        npm, yarn"
      />

      <Skill
        skill="Databases & Cloud"
        skillBody="
        EC2(AWS), MySQL, MongoDB, Vercel"
      />

      <Skill
        skill="Tools"
        skillBody="
        GitHub, VSCode, Postman, MySQL Workbench"
      />

      <h2
        className="
      text-blue-300
      text-xl
      "
      >
        {')'}
      </h2>

      <h2
        className="
      text-blue-300
      text-lg md:text-2xl"
      >
        Projects {'('}
      </h2>

      <Project
        title="Pirate Manager App"
        listItems={[
          'Utilized OOP principles to modularize functional and class components',
          'Integrated useState, Express and MongoDB to create seamless button retrieve and update functionality',
          'Provided real-time front-end validations through state, to ensure legitimate data and user feedback',
        ]}
        href="https://github.com/highsilkhat/pirate-manager"
        techs="React, Express, MongoDB, Node.js"
      />

      <Project
        title="Pen Fans App"
        listItems={[
          'Created login/registration, including BCrycpt passwords, frontend validations',
          'Implemented Flask to dynamically display and update information from database',
          'Architected database with MySQL to facilitate many-to-many and many-to-one data relationships',
          'Deployed on AWS EC2 for quick and flexible web hosting',
        ]}
        href="https://github.com/highsilkhat/pen_favorites"
        techs="Python, CSS, HTML5, MySQL"
      />

      <Project
        title="Company Scheduling App"
        listItems={[
          'Developed application with RESTful API for users to manage an instruction schedule',
          'Generated dynamic rendering to grant access for all instructors to see others’ schedule and update their own',
          'Employed Bootstrap to create a uniform and attractive user experience',
        ]}
        href="https://github.com/highsilkhat/classScheduler"
        techs="Java, Spring, MySQL"
      />

      <p
        className="
      text-green-300
      text-xl md:text-4xl
      "
      >
        <span
          className="
          text-blue-300
      "
        >
          {')'}
        </span>
        {'}'}
      </p>
    </div>
  )
}

export default Resume
