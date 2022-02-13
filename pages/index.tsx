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
          I am a software developer based out of Columbia, Missouri. Over the
          course of my diverse career, I have balanced creative and methodical
          approaches to my work. As a college instructor of 7 years, I enjoyed
          sharing my expertise in Literature and English with others. This past
          year, however, I decided to lean into my strengths as a creative
          problem-solver and take up software and web-development.
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
          Recently, I completed a rigorous and immersive 14-week coding
          bootcamp. In this time, I learned how to create full-stack
          applications in three separate tech stacks: MERN, Python, and Java.
          This experience not only taught me the foundations of these languages
          but also how to transfer knowledge of one programming syntax to
          another.
        </p>
      </div>
    </div>
  )
}

export default Home
