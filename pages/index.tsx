import type { NextPage } from 'next'
import Header from '../components/Header'
import Splash from '../components/Splash'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div
      className="
    relative
    w-full
    h-screen
    font-serif
    "
    >
      <Splash />
      <div
        className="
        absolute
        inset-0
        flex
        flex-col
        overflow-y-auto
      "
      >
        <Header />

        <p
          className="
              font-serif
              text-lg
              text-blue-100
              mx-2 md:mx-0
              mb-5 md:mb-10
              p-10
              text-center md:text-left
              bg-gray-800
              bg-opacity-50
              md:w-2/3
              rounded-lg md:rounded-r-full
            "
        >
          Shortly after beginning my first developer role, I created a CI/CD
          pipeline and earned the Azure Associate Developer certificate from
          Microsoft. I continue to grow, as I transition a Java application from
          JDBC and SQL queries to JPA. I also continue to pursue personal
          projects, including a poetry application that analyzes a variety of
          traditional forms and my portfolio site, and learn new technologies
          and methods. I am currently diving into test-driven design, GoLang,
          and machine learning.
        </p>

        <p
          className="
            text-lg
            text-blue-100
            font-serif
            self-end
            mx-2 md:mx-0
            p-10
            text-center md:text-right
            bg-gray-800
            bg-opacity-50
            md:w-2/3
            rounded-lg md:rounded-l-full
              "
        >
          My initiation into programming occurred in the summer of 2021, when I
          completed a rigorous and immersive 14-week coding bootcamp. In this
          time, I learned how to create full-stack applications in three
          separate tech stacks: MERN, Python, and Java. This experience not only
          taught me the foundations of these languages but also how to transfer
          knowledge of one programming syntax to another.
        </p>
      </div>
    </div>
  )
}

export default Home
