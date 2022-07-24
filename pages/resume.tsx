import type { NextPage } from 'next'
import Head from 'next/head'
import Skill from '../components/Skill'
import Project from '../components/Project'
import GitHubIcon from '../assets/logo-github.svg'
import EmailIcon from '../assets/email.svg'
import LinkedInIcon from '../assets/logo-linkedin.svg'
import ReaderIcon from '../assets/reader.svg'
import MenuLink from '../components/MenuLink'
import MenuHref from '../components/MenuHref'
import Link from 'next/link'

const Resume: NextPage = () => {
  return (
    <div
      className="
    p-5 md:p-10
    font-mono
    bg-black
    "
    >
      <Head>
        <title>Paul Lee Portfolio</title>
      </Head>
      {/* <MenuLink href="/">Home</MenuLink> */}
      <h1
        className="
      text-emerald-300
      text-xl md:text-4xl
      md:flex
      "
      >
        <Link href={'/'}>
          <a
            className="group
          flex
          "
          >
            <div
              className="
            font-mono
            group-hover:text-amber-400
            group-hover:text-opacity-100
          "
            >
              Paul
            </div>
            <div
              className="
            font-mono
            group-hover:text-amber-400
            group-hover:text-opacity-100
          "
            >
              Lee
            </div>
          </a>
        </Link>
        <span className="text-white">=</span>{' '}
        <div
          className="
        flex
        gap-3
        "
        >
          <span
            className="
          text-amber-200"
          >
            (
          </span>
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
          <MenuHref
            className="
              text-emerald-300
              hover:text-amber-400
              hover:text-opacity-100
              "
            href="mailto:contact@paullee.me"
            iconComponent={EmailIcon}
            iconText="Email"
            iconTextStyling="
              text-xs
              visible md:invisible group-hover:visible
            "
          />
          <MenuHref
            className="
              text-emerald-300
              hover:text-amber-400
              hover:text-opacity-100
              "
            href="https://github.com/highsilkhat"
            iconComponent={GitHubIcon}
            iconText="GitHub"
            iconTextStyling="
              text-xs
              visible md:invisible group-hover:visible
            "
          />
          <MenuHref
            className="
              text-emerald-300
              hover:text-amber-400
              hover:text-opacity-100
              "
            href="https://www.linkedin.com/in/paul-d-lee/"
            iconComponent={LinkedInIcon}
            iconText="LinkedIn"
            iconTextStyling="
              text-xs
              visible md:invisible group-hover:visible
            "
          />
          <span className="text-amber-200">)</span>{' '}
        </div>
        <span className="text-white">{'=>'} </span> SoftwareEngineer {'{'}
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
        skillBody="JavaScript (ES6), TypeScript, Java, Python, CSS, HTML, SQL, GO"
      />
      <Skill
        skill="Frameworks & Libraries"
        skillBody="React, Express, Node.js, Hibernate, Spring, Flask, Bootstrap, tailwindcss, Next.js,
        npm"
      />
      <Skill
        skill="Databases & Cloud"
        skillBody="
        Azure Cloud,  AWS, MySQL, MongoDB, Vercel"
      />
      <Skill
        skill="Tools"
        skillBody="
        GitHub, Eclipse, Azure DevOps, VSCode, Postman, MySQL Workbench, Azure Portal, TFVC"
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
      text-lg md:text-xl
      "
      >
        Certifications {'('}
      </h2>
      <Link
        href={
          'https://www.credly.com/badges/f39a6b6f-b153-4b9d-b824-62ef0a4319a0?source=linked_in_profile'
        }
      >
        <a className="group">
          <div
            className="
      text-amber-500
      text-opacity-75
          "
          >
            <u>Microsoft Certified: Azure Developer Associate</u>
          </div>
        </a>
      </Link>
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
        title="Portfolio Website"
        listItems={[
          'Used TypeScript to ensure reliable and readable code',
          'Drew on Next.js to create build time generated static webpages',
          'Leveraged tailwindcss for consistent but adaptable styling',
        ]}
        href="https://github.com/highsilkhat/paul-dev-website"
        techs="TypeScript, Next.js, tailwindcss"
      />
      <Project
        title="Pirate Manager App"
        listItems={[
          'Utilized OOP principles to modularize functional and class components',
          'Integrated useState, Express and MongoDB to create seamless button retrieve and update functionality',
          'Provided real-time front-end validations through state, to ensure legitimate data and user feedback',
        ]}
        href="https://github.com/highsilkhat/pirate-manager"
        techs="JavaScript, React, Express, MongoDB, Node.js"
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
      text-emerald-300
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
