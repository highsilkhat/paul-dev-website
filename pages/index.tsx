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
          Paul Lee is a Senior DevOps Engineer. He has helped to drive DevOps practices in the Marketing Technology space. Paul leads his team’s GitHub migration, including adoption of ArgoCD and Helm. He works to cultivate cross-team collaboration for the maturing of DevOps across his current company. In his previous position, Paul led a team initiative to deploy their first cloud-hosted application.
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
          Paul is passionate about work with distributed systems, cloud-based infrastructure, and DevOps tooling and practices. He earned the Microsoft Azure Developer Associate (AZ-204) certificate in 2022 and maintains it annually. Paul will be sitting for the Certified Kubernetes Application Developer (CKAD) certificate in December 2024. He works out of and lives in Seattle.
        </p>
      </div>
    </div>
  )
}

export default Home
