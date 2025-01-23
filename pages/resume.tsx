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
    (<div
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
        <Link
          href={'/'}
          className="group
        flex
        ">

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
        <span className="text-white">{'=>'} </span> DevOpsEngineer {'{'}
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
        skillBody="Yaml, Terraform, Java, python, TypeScript"
      />
      <Skill
          skill="Technologies"
          skillBody="
        Kubernetes, Docker, GitHub, ArgoCD, Red Hat OpenShift"
      />
      <Skill
        skill="Frameworks & Libraries"
        skillBody="Helm, Spring, npm, Next.js"
      />
      <Skill
        skill="Databases & Cloud"
        skillBody="
        Azure, AWS, MySQL, MongoDB, Vercel"
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
            'https://www.credly.com/badges/d8b6dfcb-8867-43cd-baa6-0eb6170ba45b/linked_in_profile'
          }
          className="group">

        <div
            className="
    text-amber-500
    text-opacity-75
        "
        >
          <u>Linux Foundation: Certified Kubernetes Application Developer</u>
        </div>

      </Link>
      <Link
        href={
          'https://learn.microsoft.com/en-us/users/paullee-7702/transcript/dw226fwmw2xo3r2?source=docs'
        }
        className="group">

        <div
          className="
    text-amber-500
    text-opacity-75
        "
        >
          <u>Microsoft Certified: Azure Developer Associate</u>
        </div>

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
        Experience {'('}
      </h2>
      <Project
        title="Senior DevOps Engineer"
        listItems={[
          'Developed proof of concept application in GitHub, leveraging Helm and ArgoCD, to lead team in DevOps practices',
          'Composed thorough documentation for team on GitHub migration guidance, to accelerate enterprise priorities',
          'Modernized pipeline by partnering with teams to create new application in OpenShift, leveraging Helm and ArgoCD',
        ]}
        techs="Kubernetes, ArgoCD, GitHub Actions, Helm"
      />
      <Project
        title="DevOps Engineer"
        listItems={[
          'Prioritized business stakeholders through development of enterprise Java applications',
          'Served as expert on vendor product and relationship, to ensure reliable email communication with clients',
          'Formulated architecture decision to memorialize rationale for technology approach',
          'Conducted discovery work and piloted implementation of new product, to improve business advertising spend'
        ]}
        techs="Kubernetes, Java, Spring, Maven"
      />
      <Project
        title="Application Developer"
        listItems={[
          'Led, developed, and managed CI/CD pipeline to streamline and maintain Azure Web App deployments',
          'Collaborated with Microsoft Senior Architect to produce Azure deployment proof-of-concept ',
          'Migrated data access layer from JDBC & SQL to JPA for more efficient development',
          'Conducted knowledge transfer with colleagues on Azure Web App management',
        ]}
        techs="Azure DevOps, Spring, Maven"
      />
      <Project
        title="Associate Application Developer"
        listItems={[
          'Implemented automated build tests and code security reviews to ensure repository stability',
          'Composed over 110 pages of documentation for Azure Web App and ADO pipeline creation',
          'Worked on a Scrum team to re-write J2EE web application from WebSphere to Spring Boot for modernization',
        ]}
        techs="Java, WebSphere, MySQL"
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
    </div>)
  );
}

export default Resume
